const fetch = require('node-fetch');
const {embedcolor, botname, prefix} = require('../../../config.json');
const { Command } = require('@sapphire/framework');
const {MessageEmbed} = require('discord.js');
module.exports = class BabyParrotCommand extends Command {
	constructor(context) {
        super(context, {
            aliases: ['pchick'],
			description: 'commands.animal.baby-parrot',
		});
	}
    async run (message) {
        const { file } = await fetch('https://loremflickr.com/json/g/320/240/parrot,chick/all').then(response => response.json());
        const Embed = new MessageEmbed()
            .setColor(embedcolor)
            .setTitle(`${botname} Baby Parrot CMD`)
            .setDescription(`A Baby Parrot:`)
            .setImage(file)
            .setFooter(`Prefix = ${prefix}`)
        message.channel.send({embeds: [Embed]});
    }
};