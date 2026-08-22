"use client";

import { useLocale, t, type LocText } from "@/lib/i18n";
import type { Block } from "@/lib/blocks";
import { CodeBlock } from "@/components/CodeBlock";
import { Callout } from "@/components/Callout";

// Parses `code`, **bold**, and *italic* spans out of a plain string.
// C keywords and identifiers are written inside `code` spans in every
// language's text, so they're never touched by translation.
function parseInline(text: string): React.ReactNode[] {
  const pattern = /(`[^`]+`)|(\*\*[^*]+\*\*)|(\*[^*]+\*)/g;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const [full, code, bold, italic] = match;
    if (code) {
      nodes.push(<code key={key++}>{code.slice(1, -1)}</code>);
    } else if (bold) {
      nodes.push(<strong key={key++}>{bold.slice(2, -2)}</strong>);
    } else if (italic) {
      nodes.push(<em key={key++}>{italic.slice(1, -1)}</em>);
    }
    lastIndex = match.index + full.length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

// Arabic text reads right-to-left internally, but the page's overall
// structure (sidebar, nav, prev/next, code) intentionally stays put —
// only the text-bearing elements pick up dir="rtl" + right alignment.
function useTextDir() {
  const { locale } = useLocale();
  return locale === "ar"
    ? { dir: "rtl" as const, style: { textAlign: "right" as const } }
    : {};
}

function Localized({ text }: { text: LocText }) {
  const { locale } = useLocale();
  return <>{parseInline(t(text, locale))}</>;
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  const dirProps = useTextDir();

  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} {...dirProps}>
                <Localized text={block.text} />
              </p>
            );
          case "h2":
            return (
              <h2 key={i} {...dirProps}>
                <Localized text={block.text} />
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} {...dirProps}>
                <Localized text={block.text} />
              </h3>
            );
          case "ul":
            return (
              <ul key={i} {...dirProps}>
                {block.items.map((item, j) => (
                  <li key={j}>
                    <Localized text={item} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} {...dirProps}>
                {block.items.map((item, j) => (
                  <li key={j}>
                    <Localized text={item} />
                  </li>
                ))}
              </ol>
            );
          case "code":
            return (
              <CodeBlock
                key={i}
                code={block.code.code}
                label={block.code.label}
                compact={block.compact}
              />
            );
          case "callout":
            return (
              <Callout key={i} kind={block.kind} title={block.title}>
                <span {...dirProps} style={{ ...dirProps.style, display: "block" }}>
                  <Localized text={block.text} />
                </span>
                {block.code && (
                  <CodeBlock
                    code={block.code.code}
                    label={block.code.label}
                    compact
                  />
                )}
              </Callout>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
