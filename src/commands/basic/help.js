const {embedcolor, botname} = require('../../../config.json');
const {Command} = require('@sapphire/framework');
const { MessageEmbed } = require('discord.js');
module.exports = class HelpCommand extends Command {
	constructor(context) {
		super(context, {
			description: 'commands.basic.help',
		});
	}
	async run(message) {
		console.log('test')
		const Embed = new MessageEmbed()
		.setColor(embedcolor)
		.setTitle(`${botname} Help`)
		.setDescription(`Use slash commands except for moderation!`)
		message.channel.send({embeds: [Embed]})
	}
};