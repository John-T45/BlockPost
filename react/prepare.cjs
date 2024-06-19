/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
// const pkgjson = require("./package.json");

// for (let pkg in pkgjson.dependencies) {
//   if (pkgjson.dependencies[pkg].startsWith("file:")) {
//     console.error(
//       "\x1b[31m%s\x1b[0m",
//       `Package '${pkg}' located at '${pkgjson.dependencies[pkg].replace(
//         "file:",
//         "",
//       )}' needs to be published and your package.json file updated.`,
//     );
//   }
// }

const pkgjson = require("./package.json");
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

for (let pkg in pkgjson.dependencies) {
  if (pkgjson.dependencies[pkg].startsWith("file:")) {
    const localPath = pkgjson.dependencies[pkg].replace("file:", "");
    
    console.log(`Detected local dependency: ${pkg} at ${localPath}`);

    const absoluteLocalPath = path.resolve(__dirname, localPath);
    const localPkgJsonPath = path.join(absoluteLocalPath, "package.json");

    if (!fs.existsSync(localPkgJsonPath)) {
      console.error(
        "\x1b[31m%s\x1b[0m",
        `Package '${pkg}' located at '${absoluteLocalPath}' does not exist.`
      );
      process.exit(1);
    }

    // Ensure the local package is built
    console.log(`Building local package ${pkg}...`);
    try {
      execSync("npm install", { cwd: absoluteLocalPath, stdio: "inherit" });
      execSync("npm run build", { cwd: absoluteLocalPath, stdio: "inherit" });
    } catch (error) {
      console.error(`Failed to build local package ${pkg}.`);
      process.exit(1);
    }

    console.log(`Local package ${pkg} built successfully.`);
  }
}