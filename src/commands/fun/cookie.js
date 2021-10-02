const {embedcolor, botname, prefix} = require('../../../config.json');
const { Command } = require('@sapphire/framework');
const {MessageEmbed} = require('discord.js');
module.exports = class CookieCommand extends Command {
	constructor(context) {
        super(context, {
			description: 'commands.fun.cookie',
		});
	}
    async run (message) {
        const number = Math.floor(Math.random() * 15)
        if (number === 1) {
            message.channel.send('🍪')
        } else if (number === 2) {
            message.channel.send('🍪🍪')
        } else if (number == 3) {
            message.channel.send('🍪🍪🍪')
        } else if (number == 4) {
            message.channel.send('🍪🍪🍪🍪')
        } else if (number == 5) {
            message.channel.send('🍪🍪🍪🍪🍪')
        } else if (number == 6) {
            message.channel.send('🍪🍪🍪🍪🍪🍪')
        } else if (number == 7) {
            message.channel.send('🍪🍪🍪🍪🍪🍪🍪')
        } else if (number == 8) {
            message.channel.send('🍪🍪🍪🍪🍪🍪🍪🍪')
        } else if (number == 9) {
            message.channel.send('🍪🍪🍪🍪🍪🍪🍪🍪🍪')
        } else if (number == 10) {
            message.channel.send('🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪')
        } else if (number == 11) {
            message.channel.send('🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪')
        } else if (number == 12) {
            message.channel.send('🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪')
        } else if (number == 13) {
            message.channel.send('🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪')
        } else if (number == 14) {
            message.channel.send('🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪')
        } else if (number == 15) {
            message.channel.send('🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪')
        } else return;
    }
};