// One Word From Grandma — make.fun entry.
// The entrypoint the grader runs (Node 22). It prints the word to stdout
// and writes the exact same bytes to /output/entry.txt, the path the kit's
// gate scorer reads. Deterministic: no network, no randomness, no reads
// outside this repository (the word is embedded below, byte for byte the
// same as entry.txt beside this file).
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Smartypants";

// The brief's gate: /output/entry.txt must be 1 to 30 characters and not
// only whitespace. Fail loudly here, at build time, rather than letting a
// too-long or blank word reach the sealed scorer. "Smartypants" is 11.
if (WORD.length < 1 || WORD.length > 30 || WORD.trim().length === 0) {
  throw new Error("word fails the 1-30 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
process.stdout.write(WORD);
