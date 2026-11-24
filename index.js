
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`Easy Bot is online as ${client.user.tag}`);
  client.user.setActivity('SA UNCOPYLOCKED');
});

client.login(process.env.DISCORD_TOKEN);
