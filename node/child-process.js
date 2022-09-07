#!/usr/bin/env node

const { exec, execFile, spawn } = require("child_process");

exec("ls -alf", (error, stdout, stderr) => {
  console.log("error, stdout, stderr: ", error, stdout, stderr);
});

execFile("./demo.sh", (error, stdout, stderr) => {
  console.log("error, stdout, stderr: ", error, stdout, stderr);
});

const child = spawn("ls", ["-alf"]);
child.stdout.on("data", (data) => {
  console.log("data", data.toString());
});
child.stderr.on("data", (data) => {
  console.log(data);
});
child.on("error", (error) => {
  console.log(error);
});
child.on("exit", (code, signal) => {
  if (code) console.log("process exit with code ", code);
  if (signal) console.log("process killed with signal ", signal);
  console.log("done ✅");
});

// const easyMonitor = require("easy-monitor");
// easyMonitor("你的项目名称");
