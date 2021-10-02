const fetch = require('node-fetch');
const {embedcolor, botname, prefix} = require('../../../config.json');
const { Command } = require('@sapphire/framework');
const {MessageEmbed} = require('discord.js');
module.exports = class PuppyCommand extends Command {
	constructor(context) {
        super(context, {
			description: 'commands.animal.puppy',
		});
	}
    async run (message) {
        const { file } = await fetch('https://loremflickr.com/json/g/320/240/puppy/all').then(response => response.json());
        const Embed = new MessageEmbed()
            .setColor(embedcolor)
            .setTitle(`${botname} Puppy CMD`)
            .setDescription(`A Puppy:`)
            .setImage(file)
            .setFooter(`Prefix = ${prefix}`)
        message.channel.send({embeds: [Embed]});
    }
};