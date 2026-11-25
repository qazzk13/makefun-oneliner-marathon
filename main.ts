process.umask(0o022);
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Liner Marathon — one joke, written to the output file.
// The thermostat at my dad's house: one degree at a time, then
// stand still and listen, a habit that outlived living there.
const LINE =
  "I'm 34 and I still turn the thermostat up one degree at a time and listen for my dad's footsteps, and he lives three hours away.";

if (LINE.length < 1 || LINE.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n");
