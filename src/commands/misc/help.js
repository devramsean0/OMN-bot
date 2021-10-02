
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
        message.channel.send('test')
    }
};