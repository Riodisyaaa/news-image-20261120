import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Copy the pre-rendered front page into the grader's output directory.
// The image is deterministic: the same bytes are written on every run.
// The grader sets MAKEFUN_OUTPUT_DIR; locally it defaults to ./out.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
