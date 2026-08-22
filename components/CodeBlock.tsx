"use client";

import { useState } from "react";
import { useLocale, t, ui } from "@/lib/i18n";

const KEYWORDS = new Set([
  "if", "else", "for", "while", "do", "switch", "case", "default", "break",
  "continue", "return", "goto", "sizeof", "typedef", "struct", "union",
  "enum", "static", "extern", "const", "volatile", "register", "auto",
  "void", "inline",
]);

const TYPES = new Set([
  "int", "char", "float", "double", "long", "short", "unsigned", "signed",
  "size_t", "FILE", "NULL",
]);

type Token = { text: string; kind: string };

function tokenize(line: string): Token[] {
  const tokens: Token[] = [];
  // Order matters: comments/strings/chars first, then preprocessor, then words/numbers/punct.
  const pattern =
    /(\/\/.*$)|("(?:[^"\\]|\\.)*")|('(?:[^'\\]|\\.)*')|(#\s*\w+)|(\b\d+\.?\d*[fFlLuU]?\b)|([A-Za-z_]\w*)|(\s+)|([^\sA-Za-z0-9_]+)/g;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(line)) !== null) {
    const [, comment, dquote, squote, preproc, num, word, space, punct] = match;
    if (comment) tokens.push({ text: comment, kind: "comment" });
    else if (dquote) tokens.push({ text: dquote, kind: "string" });
    else if (squote) tokens.push({ text: squote, kind: "string" });
    else if (preproc) tokens.push({ text: preproc, kind: "preproc" });
    else if (num) tokens.push({ text: num, kind: "number" });
    else if (word) {
      if (KEYWORDS.has(word)) tokens.push({ text: word, kind: "keyword" });
      else if (TYPES.has(word)) tokens.push({ text: word, kind: "type" });
      else if (/^[A-Z_][A-Z0-9_]*$/.test(word) && word.length > 1)
        tokens.push({ text: word, kind: "const" });
      else tokens.push({ text: word, kind: "plain" });
    } else if (space) tokens.push({ text: space, kind: "space" });
    else if (punct) tokens.push({ text: punct, kind: "punct" });
  }
  return tokens;
}

const KIND_CLASS: Record<string, string> = {
  comment: "text-paper-faint italic",
  string: "text-amber",
  preproc: "text-cyan-dim",
  number: "text-amber",
  keyword: "text-cyan",
  type: "text-cyan",
  const: "text-coral",
  plain: "text-paper",
  space: "",
  punct: "text-paper-dim",
};

export function CodeBlock({
  code,
  label = "program.c",
  compact = false,
}: {
  code: string;
  label?: string;
  compact?: boolean;
}) {
  const { locale } = useLocale();
  const [copied, setCopied] = useState(false);
  const lines = code.replace(/^\n/, "").replace(/\n$/, "").split("\n");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-lg border border-surface-line bg-surface-raised ${
        compact ? "" : "my-6"
      }`}
    >
      <div className="flex items-center justify-between border-b border-surface-line bg-ink-soft px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-coral/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyan/70" />
          <span className="ml-2 font-mono text-xs text-paper-faint">{label}</span>
        </div>
        <button
          onClick={handleCopy}
          className="font-mono text-xs text-paper-faint transition hover:text-cyan"
          aria-label="Copy code"
        >
          {copied ? t(ui.copied, locale) : t(ui.copy, locale)}
        </button>
      </div>
      <div className="overflow-x-auto px-4 py-4">
        <pre className="font-mono text-[13px] leading-6 sm:text-sm">
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-4 inline-block w-5 shrink-0 select-none text-right text-paper-faint/50">
                {i + 1}
              </span>
              <code className="whitespace-pre">
                {tokenize(line).map((t, j) => (
                  <span key={j} className={KIND_CLASS[t.kind]}>
                    {t.text}
                  </span>
                ))}
                {line.length === 0 ? "\u00A0" : null}
              </code>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}
