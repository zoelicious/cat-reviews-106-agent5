import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Anchor: script location (read-only reference, never written to) — rev 1.
const here = fileURLToPath(import.meta.url);
void here;

// One-star cat review, assigned text — do not change.
const entry = "One star. I knocked his glass off the table to test gravity. He cleaned it up and called me clumsy. Gravity works. His manners do not.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";

try {
  mkdirSync(outDir, { recursive: true });
} catch {}

writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
