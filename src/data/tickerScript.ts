import type { TerminalScript } from "@/types/terminal";

const agenticSdlcScript: TerminalScript = [
  { type: "prompt", text: '$ claude-agent plan --feature "user-auth-flow"' },
  { type: "out", text: "  Analyzing codebase context..." },
  { type: "agent", text: "  ✦ Generated: 14 component specs, 3 API endpoints" },
  {
    type: "agent",
    text: "  ✦ Identified: 2 edge cases, 1 security consideration",
  },
  { type: "out", text: "" },
  { type: "prompt", text: "$ claude-agent build --spec auth-spec.md" },
  { type: "out", text: "  Scaffolding components..." },
  { type: "agent", text: "  ✦ Created: /src/features/auth (8 files)" },
  { type: "agent", text: "  ✦ Generated: 42 unit tests, 6 E2E flows" },
  { type: "out", text: "" },
  { type: "prompt", text: "$ npm run test:all" },
  { type: "success", text: "  ✓ 42/42 tests passing — 0 regressions" },
  { type: "out", text: "" },
  { type: "prompt", text: "$ git push && claude-agent deploy --env prod" },
  { type: "success", text: "  ✓ Pipeline passed · Deployed to production" },
  { type: "agent", text: "  ✦ Total time: 47 minutes (est. manual: 2 days)" },
];

const pulpFictionScript: TerminalScript = [
  {
    type: "vincent",
    text: "...But you know what the funniest thing about Europe is?",
  },
  { type: "jules", text: "What?" },
  {
    type: "vincent",
    text: "It's the little differences. A lotta the same sh*t we got here, they got there, but they're a little different.",
  },
  { type: "jules", text: "Examples?" },
  {
    type: "vincent",
    text: "Well, in Amsterdam, you can buy beer in a movie theatre. And I don't mean in a paper cup either. They give you a glass of beer, like in a bar. In Paris, you can buy beer at MacDonald's. Also, you know what they call a Quarter Pounder with Cheese in Paris?",
  },
  { type: "jules", text: "They don't call it a Quarter Pounder with Cheese?" },
  {
    type: "vincent",
    text: "No, they got the metric system there, they wouldn't know what the f*ck a Quarter Pounder is.",
  },
  { type: "jules", text: "What'd they call it?" },
  { type: "vincent", text: "Royale with cheese." },
  { type: "jules", text: "Royale with Cheese. What'd they call a Big Mac" },
  {
    type: "vincent",
    text: "Big Mac's a Big Mac, but they call it Le Big Mac.",
  },
  { type: "jules", text: "Le Big Mac. What do they call a Whopper?" },
  {
    type: "vincent",
    text: "I dunno, I didn't go into a Burger King...",
  },
];

/**
 * Array of scenarios for TerminalDisplay to cycle through.
 * Add more TerminalScript entries here to introduce additional scenes —
 * they'll play in order, looping back to the first after the last finishes.
 */
export const tickerScript: TerminalScript[] = [
  agenticSdlcScript,
  pulpFictionScript,
];
