
try {
  console.log("Resolving tailwindcss in " + process.cwd());
  console.log(require.resolve("tailwindcss"));
  console.log("Success!");
} catch (e) {
  console.error("Failed:", e.message);
  console.error(e);
}
