// libs
const {prefix} = require('../config.json');
require('dotenv').config()
const token = process.env.token;
const { SapphireClient } = require('@sapphire/framework');
const {MessageEmbed} = require('discord.js')
const client = new SapphireClient ({ defaultPrefix: [prefix], intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS']});
client.once('ready', () => {
	console.log('Ready!');
});
client.login(token);