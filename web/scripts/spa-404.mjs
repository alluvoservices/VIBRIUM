import fs from "fs";
const src = "dist/index.html";
const dst = "dist/404.html";
if (fs.existsSync(src)) {
  fs.copyFileSync(src, dst);
  console.log("[spa-404] Created dist/404.html for SPA fallback");
} else {
  console.log("[spa-404] dist/index.html not found (build step order?)");
}
