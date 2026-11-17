import { useEffect, useRef, useState } from "react";
import type { TerminalLineType, TerminalScript } from "@/types/terminal";
import "@/styles/terminalStyles.css";

export interface TerminalDisplayProps {
  /** Array of scenarios. Each scenario plays fully, pauses, then the next one begins. Loops back to the first after the last. */
  scripts: TerminalScript[];
  title?: string;
  /** Pause (ms) after a scenario finishes, before clearing and starting the next one. */
  loopDelayMs?: number;
}

interface RenderedLine {
  type: TerminalLineType;
  text: string;
}

function colorClass(type: TerminalLineType): string {
  switch (type) {
    case "prompt":
      return "t-cmd";
    case "out":
      return "t-out";
    case "agent":
      return "t-agent";
    case "success":
      return "t-success";
    case "jules":
      return "t-jules";
    case "vincent":
      return "t-vincent";
    default:
      return "t-out";
  }
}

export function TerminalDisplay({
  scripts,
  title = "SCRIPT READER 3000",
  loopDelayMs = 3500,
}: TerminalDisplayProps) {
  const [renderedLines, setRenderedLines] = useState<RenderedLine[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [renderedLines]);

  useEffect(() => {
    if (!scripts.length) return;

    //const instanceId = Math.random().toString(36).slice(2, 8);
    let scriptIdx = 0;
    let lineIdx = 0;
    let charIdx = 0;

    setRenderedLines([]);

    function tick() {
      //console.log("tick", instanceId, { scriptIdx, lineIdx, charIdx });
      const currentScript = scripts[scriptIdx];

      // Finished this scenario — pause, clear, advance to the next.
      if (lineIdx >= currentScript.length) {
        timeoutRef.current = setTimeout(() => {
          scriptIdx = (scriptIdx + 1) % scripts.length;
          lineIdx = 0;
          charIdx = 0;
          setRenderedLines([]);
          tick();
        }, loopDelayMs);
        return;
      }

      const line = currentScript[lineIdx];

      // Empty spacer line — commit it as-is and move on immediately.
      if (line.text.length === 0) {
        setRenderedLines((prev) => [...prev, { type: line.type, text: "" }]);
        lineIdx += 1;
        charIdx = 0;
        timeoutRef.current = setTimeout(tick, 80);
        return;
      }

      if (charIdx < line.text.length) {
        setRenderedLines((prev) => {
          const next = [...prev];
          const nextText = line.text.slice(0, charIdx + 1);
          if (charIdx === 0) {
            next.push({ type: line.type, text: nextText });
          } else {
            next[next.length - 1] = { type: line.type, text: nextText };
          }
          return next;
        });
        charIdx += 1;
        timeoutRef.current = setTimeout(tick, line.type === "prompt" ? 38 : 12);
      } else {
        lineIdx += 1;
        charIdx = 0;
        timeoutRef.current = setTimeout(
          tick,
          line.type === "prompt" ? 300 : 80,
        );
      }
    }

    tick();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [scripts, loopDelayMs]);

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <div className="dot dot-r" />
        <div className="dot dot-y" />
        <div className="dot dot-g" />
        <div className="terminal-title">{title}</div>
      </div>
      <div className="terminal-body" ref={bodyRef}>
        {renderedLines.map((line, i) => {
          const isLast = i === renderedLines.length - 1;
          return (
            <div key={i} className={colorClass(line.type)}>
              {line.type === "prompt" && <span className="t-prompt">❯ </span>}
              {line.text}
              {isLast && <span className="t-cursor" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
