const fetch = require('node-fetch');
const {embedcolor, botname, prefix} = require('../../../config.json');
const { Command } = require('@sapphire/framework');
const {MessageEmbed} = require('discord.js');
module.exports = class KIttenCommand extends Command {
	constructor(context) {
        super(context, {
			description: 'commands.animal.kitten',
		});
	}
    async run (message) {
        const { file } = await fetch('https://loremflickr.com/json/g/320/240/kitten/all').then(response => response.json());
        const Embed = new MessageEmbed()
            .setColor(embedcolor)
            .setTitle(`${botname} Kitten CMD`)
            .setDescription(`A Kitten:`)
            .setImage(file)
            .setFooter(`Prefix = ${prefix}`)
        message.channel.send({embeds: [Embed]});
    }
};