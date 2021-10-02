// libs
require('dotenv').config()
const token = process.env.token;
const { SapphireClient } = require('@sapphire/framework');
const {MessageEmbed, ReactionUserManager} = require('discord.js')
const client = new SapphireClient ({ defaultPrefix: ['*'], intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS']});
client.once('ready', () => {
	console.log('Ready!');
	const data = [
		{
			name: 'ping',
			description: 'Latency Test'
		},
		{
			name: 'help',
			description: 'Help command'
		}
	]
	client.guilds.cache.get('893217097809821737')?.commands.set(data);
});
// slash commands
client.on('interactionCreate', interaction => {
	if (interaction.isCommand()) {
		if (interaction.commandName === 'ping') {
			interaction.reply('Pong!');
		} else if (interaction.commandName === 'help') {
			interaction.reply('help')
		}
	} else return;
});
client.login(token);