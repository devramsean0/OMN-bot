const {embedcolor, botname, prefix} = require('../../../config.json');
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
        const embed1 = new MessageEmbed()
        .setColor(embedcolor)
        .setTitle(`${botname} Help CMD`)
        .setDescription(`this is help`)
        .addFields(
            {name: 'Misc', value: `Miscalanious commands: \n ${prefix}ping = Ping Latency \n ${prefix}ip = Server ip \n ${prefix}staff = Staff List`},
            {name: 'Fun', value: `${prefix}sus = gives u a amongus gif`},
            {name: 'Animals', value: `all animal images are served by <https://loremflickr.com> \n ${prefix}cat = gives u a cat image \n ${prefix}dog = gives u a dog image \n ${prefix}kitten = gives u a kitten image \n ${prefix}puppy = gives u a puppy image \n ${prefix}parrot = gives u a parrot image \n ${prefix}parrot-chick or ${prefix}pchick = gives u a parrot chick image`},
            {name: 'Owner CMDs', value: `(the bot owner not the server owner) \n ${prefix}ev <code> or ${prefix}eval <code> = evaluates code \n ${prefix}stop = stops the bot`},
        )
        .setFooter(`Prefix = ${prefix}`)
        message.channel.send({ embeds: [embed1]})
        
    }
};