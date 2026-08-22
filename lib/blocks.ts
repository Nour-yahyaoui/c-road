import type { LocText } from "@/lib/i18n";

export type CodeSpec = { label?: string; code: string };

export type Block =
  | { type: "p"; text: LocText }
  | { type: "h2"; text: LocText }
  | { type: "h3"; text: LocText }
  | { type: "ul"; items: LocText[] }
  | { type: "ol"; items: LocText[] }
  | { type: "code"; code: CodeSpec; compact?: boolean }
  | {
      type: "callout";
      kind: "note" | "warning" | "error";
      title?: LocText;
      text: LocText;
      code?: CodeSpec;
    };
