process.umask(0o022);
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Liner Marathon — one joke, written to the output file.
// First draft: the thermostat at my parents' house.
const LINE =
  "I still turn my dad's thermostat up slowly and listen for footsteps, even though I am grown.";

if (LINE.length < 1 || LINE.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n");
