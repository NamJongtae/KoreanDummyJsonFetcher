const fs = require("fs");
const path = require("path");

// ESM index.js
const esmIndex = path.join(__dirname, "dist", "index.js");
if (fs.existsSync(esmIndex)) {
  let esmContent = fs.readFileSync(esmIndex, "utf8");
  esmContent = esmContent.replace(
    /from "\.\/([a-zA-Z0-9_-]+)\.js"/g,
    'from "./esm/$1.js"'
  );
  fs.writeFileSync(esmIndex, esmContent);
}

// CJS index.cjs
const cjsIndex = path.join(__dirname, "dist", "index.cjs");
if (fs.existsSync(cjsIndex)) {
  let cjsContent = fs.readFileSync(cjsIndex, "utf8");
  cjsContent = cjsContent.replace(
    /require\("\.\/([a-zA-Z0-9_-]+)\.js"\)/g,
    'require("./cjs/$1.js")'
  );
  fs.writeFileSync(cjsIndex, cjsContent);
}
