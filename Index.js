const { token, prefix } = require("./config");
const { Client, Collection } = require("discord.js");
const client = new Client({
    disableEveryone: true,
    disabledEvents: ["TYPING_START"]
});
client.prefix = prefix;
client.commands = new Collection();
client.limits = new Map();
const commands = require("./structers/command");
commands.run(client)
const events = require("./structers/events");
events.run(client);
client.login(token)