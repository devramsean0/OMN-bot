const {embedcolor, botname, prefix} = require('../../../config.json');
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
        .setDescription(`The Help Menu`)
        .addFields(
            {name: 'MISC', value: `${prefix}help = This Command lol.`}
        )
        message.channel.send({embeds: [embed]})
    }
};