const {embedcolor, botname, prefix} = require('../../../config.json');
const { Command } = require('@sapphire/framework');
const {MessageEmbed} = require('discord.js');
module.exports = class StaffCommand extends Command {
	constructor(context) {
        super(context, {
			description: 'commands.misc.staff',
		});
	}
    async run (message) {
        const Embed = new MessageEmbed()
        .setColor(embedcolor)
        .setTitle(`${botname} Staff CMD`)
        .setDescription('Staff List')
        .addFields(
            {name: 'Owner', value: 'Emperor (Emperor#9999)'},
            {name: 'Admin', value: 'lunxr (lunxr#0001) \n VGtable143 (VG𝐭𝐚𝐛𝐥𝐞143#4058) \n Chili (Chili#6319)'},
            {name: 'Moderator', value: 'Amidqst (Amidqst#0001) \n Ozie (Ozie#2469) \n .moon. (.moon.#4810) \n Abby (!~Abby~!🖤🥀#5998) \n baggxD (baggxD#6969)'},
            {name: 'Helper', value: 'Sherb (Sherb#0689) \n Dayguud (Dayguud#5659) \n Fexyees (Fexyees#1399) \n Finley Da Smurf (! Finley Da Smurf#1839)'}
        )
        message.channel.send({embeds: [Embed]})
    }
};