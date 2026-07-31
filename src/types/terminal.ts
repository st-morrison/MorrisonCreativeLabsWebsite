export type TerminalLineType =
  | "prompt"
  | "out"
  | "agent"
  | "success"
  | "vincent"
  | "jules";

export interface TerminalLine {
  type: TerminalLineType;
  text: string;
}

export type TerminalScript = TerminalLine[];
