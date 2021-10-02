const fetch = require('node-fetch');
const {embedcolor, botname, prefix} = require('../../../config.json');
const { Command } = require('@sapphire/framework');
const {MessageEmbed} = require('discord.js');
module.exports = class ParrotCommand extends Command {
	constructor(context) {
        super(context, {
			description: 'commands.animal.parrot',
		});
	}
    async run (message) {
        const { file } = await fetch('https://loremflickr.com/json/g/320/240/parrot/all').then(response => response.json());
        const Embed = new MessageEmbed()
            .setColor(embedcolor)
            .setTitle(`${botname} Parrot CMD`)
            .setDescription(`A Parrot:`)
            .setImage(file)
            .setFooter(`Prefix = ${prefix}`)
        message.channel.send({embeds: [Embed]});
    }
};