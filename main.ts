// One Line, One Chill — make.fun bounty u-azazex-one-line-one-chill-6d4d5488
// Writes a single sentence of horror (under 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "The baby monitor crackles at 3 AM, and a voice exactly like mine is already whispering our daughter back to sleep — but I haven't said a word yet.";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
