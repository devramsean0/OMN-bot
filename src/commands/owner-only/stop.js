const {embedcolor, botname, prefix} = require('../../../config.json');
const { Command } = require('@sapphire/framework');
const {MessageEmbed} = require('discord.js');
module.exports = class StopCommand extends Command {
	constructor(context) {
        super(context, {
			aliases: ['kill'],
			description: 'commands.owner-only.stop',
            preconditions: ['owner', 'guildcheck']
		});
	}
    async run (message) {
        message.channel.send('Killing bot')
        console.log(`bot was killed in guild`)
        process.exit()
    }
};