#!/usr/bin/env node

(async () => {
  const url = process.argv[2];
  const name = process.argv.slice(3).join(" ");
  console.log(`curl -L -o "${name}.mp4" -C - "${url}"`);
})();
