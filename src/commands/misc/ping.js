const {embedcolor, botname, prefix} = require('../../../config.json');
const { Command } = require('@sapphire/framework');
const {MessageEmbed} = require('discord.js');
module.exports = class PingCommand extends Command {
	constructor(context) {
        super(context, {
			aliases: ['pong'],
			description: 'commands.misc.ping',
		});
	}

	async run(message) {
        const embed1 = new MessageEmbed()
        .setColor(embedcolor)
        .setTitle(`${botname} Ping CMD`)
        .setDescription('Pinging...')
        .setFooter(`Prefix = ${prefix}`)
		const response = await message.channel.send({ embeds: [embed1]});
		const latency = response.createdTimestamp - message.createdTimestamp;
        const embed2 = new MessageEmbed()
        .setColor(embedcolor)
        .setTitle(`${botname} Ping CMD`)
        .setDescription(`Your latency is ${latency}ms`)
        .setFooter(`Prefix = ${prefix}`)
		await response.edit({ embeds: [embed2]});
	}
};