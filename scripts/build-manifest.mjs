import { createHash } from "node:crypto";
import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const root = process.cwd();
const owner = "ItsLeoIso";
const repository = "gptsp.github.com";
const branch = process.env.GITHUB_REF_NAME || "main";
const extensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif"]);
const ignored = new Set([".git", "node_modules", "_site"]);
const assets = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!ignored.has(entry.name)) await walk(join(directory, entry.name));
      continue;
    }
    const absolutePath = join(directory, entry.name);
    const path = relative(root, absolutePath).split(sep).join("/");
    const extension = entry.name.slice(entry.name.lastIndexOf(".")).toLowerCase();
    if (!extensions.has(extension)) continue;
    const [contents, info] = await Promise.all([readFile(absolutePath), stat(absolutePath)]);
    const encodedPath = path.split("/").map(encodeURIComponent).join("/");
    assets.push({
      path,
      size: info.size,
      sha256: createHash("sha256").update(contents).digest("hex"),
      rawUrl: `https://raw.githubusercontent.com/${owner}/${repository}/${branch}/${encodedPath}`,
      cdnUrl: `https://cdn.jsdelivr.net/gh/${owner}/${repository}@${branch}/${encodedPath}`,
      githubUrl: `https://github.com/${owner}/${repository}/blob/${branch}/${encodedPath}`
    });
  }
}

await walk(root);
assets.sort((a, b) => a.path.localeCompare(b.path));
const manifest = {
  schemaVersion: 1,
  repository: `${owner}/${repository}`,
  branch,
  generatedAt: new Date().toISOString(),
  count: assets.length,
  assets
};
await writeFile(join(root, "assets.json"), `${JSON.stringify(manifest, null, 2)}\\n`);
console.log(`Wrote assets.json with ${assets.length} image(s).`);
