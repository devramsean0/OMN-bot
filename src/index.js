const dotenv = require('dotenv');
dotenv.config();
const { SapphireClient } = require('@sapphire/framework');
const {Intents} = require('discord.js')
const client = new SapphireClient({ intents: [Intents.FLAGS.GUILDS], prefix: ["OMN, ="] });
client.once('ready', () => {
    console.log('Ready!')
});
client.login(process.env.TOKEN);
