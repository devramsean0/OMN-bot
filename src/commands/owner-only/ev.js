const {embedcolor, botname, prefix} = require('../../../config.json');
const { Command } = require('@sapphire/framework');
const {MessageEmbed} = require('discord.js');
module.exports = class EvCommand extends Command {
	constructor(context) {
        super(context, {
            preconditions: ['owner'],
			aliases: ['Eval'],
			description: 'commands.owner-only.ev',
		});
	}
    async run (message, args) {
        const code = await args.rest('string');
        const evcode = eval(code)
        const Evalulationembed = new MessageEmbed()
        .setColor(embedcolor)
        .setTitle(`${botname} Eval CMD`)
        .setDescription('The evaluation of your code!')
        .addFields(
            {name: 'Original Code', value: `${code}`}
        )
        .setFooter(`Prefix = ${prefix}`)
        message.channel.send({embeds: [Evalulationembed]});
    }
};