const {embedcolor, botname, prefix} = require('../../../config.json');
const { Command } = require('@sapphire/framework');
const {MessageEmbed} = require('discord.js');
module.exports = class IpCommand extends Command {
	constructor(context) {
        super(context, {
			description: 'commands.misc.ip',
		});
	}
    async run (message) {
        const Embed = new MessageEmbed()
        .setColor(embedcolor)
        .setTitle(`${botname} Ip CMD`)
        .setDescription('Ip: Empire.mcpe.lol Port: 19145')
        .setFooter(`Prefix = ${prefix}`)
    message.channel.send({embeds: [Embed]})
    }
};