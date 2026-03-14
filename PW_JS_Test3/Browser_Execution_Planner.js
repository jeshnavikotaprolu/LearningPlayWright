function browserExecutionPlanner(allBrowsers, blockedBrowsers) {
  const runnable = allBrowsers.filter(b => !blockedBrowsers.includes(b));
  const blocked = allBrowsers.filter(b => blockedBrowsers.includes(b));

  const plan = `Run on: ${runnable.join(", ")} | Skip: ${blocked.join(", ")}`;

  return {
    runnable,
    blocked,
    plan
  };
}


const allBrowsers = ["chromium", "firefox", "webkit"];
const blockedBrowsers = ["firefox"];

console.log(browserExecutionPlanner(allBrowsers, blockedBrowsers));