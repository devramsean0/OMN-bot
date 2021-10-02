const {embedcolor, botname, prefix} = require('../../../config.json');
const { Command } = require('@sapphire/framework');
const {MessageEmbed} = require('discord.js');
module.exports = class HelpCommand extends Command {
	constructor(context) {
        super(context, {
			description: 'commands.fun.sus',
		});
	}
    async run (message) {
        const imgarray = new Array("https://s3.amazonaws.com/media.thecrimson.com/photos/2020/11/06/010534_1346719.gif", "https://www.icegif.com/wp-content/uploads/among-us-icegif-53.gif", "https://thumbs.gfycat.com/IllegalGlumAtlasmoth-size_restricted.gif", "https://i.giphy.com/media/RtdRhc7TxBxB0YAsK6/giphy.webp", "https://www.icegif.com/wp-content/uploads/among-us-icegif-47.gif")
        var Num = Math.floor(Math.random() * imgarray.length);
        const Embed = new MessageEmbed()
        .setColor(embedcolor)
        .setTitle(`${botname} Sus CMD`)
        .setDescription(`You are SUS`)
        .setImage(imgarray[Num])
        .setFooter(`Prefix = ${prefix} Gif number = ${Num}/${imgarray.length}`)
        message.channel.send({embeds: [Embed]})
    }
};