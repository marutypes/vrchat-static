const dotenv = require("dotenv");

dotenv.config();

const { Client, GatewayIntentBits } = require("discord.js");
const fs = require("fs");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});
const TOKEN = process.env.BOT_TOKEN;
const SERVER_NAME = process.env.SERVER_NAME;
const ROLE_NAME = process.env.ROLE_NAME;

if (!TOKEN) {
  console.error("Bot token not found in environment variable BOT_TOKEN");
  process.exit(1);
}

if (!SERVER_NAME) {
  console.error("Server name not found in environment variable SERVER_NAME");
  process.exit(1);
}

if (!ROLE_NAME) {
  console.error("Role name not found in environment variable ROLE_NAME");
  process.exit(1);
}

const [, , OUTPUT_FILE = "patrons.json"] = process.argv;

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  const server = client.guilds.cache.find(
    (guild) => guild.name === SERVER_NAME
  );

  if (!server) {
    console.error(`Server "${SERVER_NAME}" not found.`);
    process.exit(1);
  }

  const role = server.roles.cache.find((r) => r.name === ROLE_NAME);

  if (!role) {
    console.error(`Role "${ROLE_NAME}" not found.`);
    process.exit(1);
  }
  const membersWithRole = await server.members.fetch();

  const users = membersWithRole
    .filter((member) => {
      return member.roles.cache.has(role.id);
    })
    .map((member) => {
      console.log("member displayname: ", member.displayName);
      console.log("member.user username: ", member.username);
      console.log("member.user displayname: ", member.user.displayName);
      return member.displayName || member.user.username;
    });

  let output = "";
  if (OUTPUT_FILE.endsWith("json")) {
    output = JSON.stringify(users, null, 2);
  } else {
    output = users.join(", ");
  }

  fs.writeFile(OUTPUT_FILE, output, (err) => {
    if (err) {
      console.error("Error saving users to file:", err);
    } else {
      console.log(`Users saved to ${OUTPUT_FILE}`);
      client.destroy();
    }
  });
});

client.login(TOKEN);
