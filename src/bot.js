require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client({
    intents: ['GUILDS', 'GUILD_MESSAGES']
});

client.on('messageCreate', (message) => {
    // handle messages
});

client.login(process.env.BOT_TOKEN)