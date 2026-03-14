function buildTestUsers(names, roles) {
  const users = [];

  for (let i = 0; i < names.length; i++) {
    const username = names[i].toLowerCase().replace(/\s+/g, "_");

    users.push({
      username: username,
      email: `${username}@playwrightbatch.com`,
      role: roles[i]
    });
  }

  return users;
}

const names = ["Amit Kumar", "Neha Singh"];
const roles = ["admin", "viewer"];

console.log(buildTestUsers(names, roles));