const fs = require("fs");
const path = require("path");
function w(f, c) {
  const d = path.dirname(f);
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
  fs.writeFileSync(f, c, "utf8");
  console.log("Wrote: " + f);
}
// Run all generators
require("./gen-content")();
require("./gen-shared")();
require("./gen-home")();
require("./gen-about")();
require("./gen-services")();
require("./gen-work")();
require("./gen-contact")();
require("./gen-css")();
console.log("ALL DONE");