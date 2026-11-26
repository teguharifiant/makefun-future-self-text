// Texts From Your Future Self — make.fun entry.
//
// The program writes one text message, under 200 characters, from the
// writer's future self to /output/entry.txt. The message stands alone:
// no setup, no context, just the text as it would arrive on the phone.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Future you here. The password you just changed to something ‘unforgettable’? I’ve been locked out since 2031. The hint is our first pet. We never had a pet.";

if ([...ENTRY].length > 200 || [...ENTRY].length < 1) {
  throw new Error(`Entry must be 1-200 characters, got ${[...ENTRY].length}`);
}
if (ENTRY.includes("\n") || ENTRY.trim() !== ENTRY) {
  throw new Error("Entry must be a single line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
