const {prefix, ForbiddenWords, botname, embedcolor} = require('../config.json')
require('dotenv').config()
const token = process.env.token;
const { SapphireClient } = require('@sapphire/framework');
const {MessageEmbed} = require('discord.js')
const client = new SapphireClient ({ defaultPrefix: prefix, intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS']});
client.once('ready', () => {
	console.log('Ready!');
});
client.on("messageCreate", function(message){
	if (ForbiddenWords.some(word => message.content.includes(word))) {
        const Embed = new MessageEmbed()
        .setColor(embedcolor)
        .setTitle(`${botname} Filter`)
        .setDescription(`You cannot use that word. 😡`)
        .setFooter(`Prefix = ${prefix}`)
        message.channel.send({embeds: [Embed]})
		message.delete()
    }
});
client.login(token);