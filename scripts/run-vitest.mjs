import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

function withUppercaseDrive(filePath) {
  return filePath.replace(/^([a-zA-Z]):/, (_, drive) => `${drive.toUpperCase()}:`);
}

const root = withUppercaseDrive(
  path.resolve(fileURLToPath(new URL("..", import.meta.url))),
);
const vitestCli = path.join(root, "node_modules", "vitest", "vitest.mjs");
const forwarded = process.argv.slice(2);

const child =
  process.platform === "win32"
    ? spawn(
        "cmd.exe",
        [
          "/c",
          `cd /d ${root} && node node_modules\\vitest\\vitest.mjs ${forwarded.join(" ")}`,
        ],
        { stdio: "inherit", windowsHide: true },
      )
    : spawn(process.execPath, [vitestCli, ...forwarded], {
        cwd: root,
        stdio: "inherit",
      });

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 1);
});
