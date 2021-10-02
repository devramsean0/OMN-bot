const fetch = require('node-fetch');
const {embedcolor, botname, prefix} = require('../../../config.json');
const { Command } = require('@sapphire/framework');
const {MessageEmbed} = require('discord.js');
module.exports = class DogCommand extends Command {
	constructor(context) {
        super(context, {
			aliases: ['doggo'],
			description: 'commands.animal.dog',
		});
	}
    async run (message) {
        const { file } = await fetch('https://loremflickr.com/json/g/320/240/dog/all').then(response => response.json());
        const Embed = new MessageEmbed()
            .setColor(embedcolor)
            .setTitle(`${botname} Dog CMD`)
            .setDescription(`A dog:`)
            .setImage(file)
            .setFooter(`Prefix = ${prefix}`)
        message.channel.send({embeds: [Embed]});
    }
};