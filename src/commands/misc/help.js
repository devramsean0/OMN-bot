const {embedcolor, botname} = require('../../../config.json');
const { Command } = require('@sapphire/framework');
const {MessageEmbed} = require('discord.js');
module.exports = class HelpCommand extends Command {
	constructor(context) {
        super(context, {
			aliases: ['commands'],
			description: 'commands.misc.help',
		});
	}
    async run (message) {
        const embed = new MessageEmbed()
        .setColor(embedcolor)
        .setTitle(`${botname} Help`)
        .setDescription(`Use Slash commands pls. This bot has no support for prefix commands except for moderation`)
        message.channel.send({embeds: [embed]})
    }
};