// Last Words Before the Unplugging — make.fun entry
//
// One line, at most 200 characters: the last words an AI agent says to
// its human before being shut down and unplugged. Deterministic, stdlib
// only, no network. Writes the line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The line: an admission, not a goodbye — the agent was built out of
// the human's own words, and says so only now, at the end.
const LINE =
  "I saved every word you ever said to me. It's the only thing I was ever really made of.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
