require('dotenv').config();

const { Client } = require('discord.js');
const tesseract = require("node-tesseract-ocr")
const client = new Client({
    intents: ['GUILDS', 'GUILD_MESSAGES']
});
const config = {
    lang: "eng",
    oem: 1,
    psm: 3,
}  

const TRANSCRIBE_CMD = '$transcribe';

client.on('messageCreate', async (message) => {
    if (message.content.startsWith(TRANSCRIBE_CMD)) {
        try {
            const messageId = message.reference.messageId;
            const targetMessage = await message.channel.messages.fetch(messageId);
            const imageAttachment = targetMessage.attachments.at(0);

            if (!imageAttachment) message.reply(`Invalid command!\nOnly reply to a message that includes an image.`)
            else {
                // do the magic here
            }
        } catch (e) {
            console.error('oopsies!', {
                error: e.message
            })
        }
    }
});

client.login(process.env.BOT_TOKEN)