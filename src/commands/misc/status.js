const {embedcolor, botname, prefix} = require('../../../config.json');
const { Command } = require('@sapphire/framework');
const {MessageEmbed} = require('discord.js');
const Nodeactyl = require('nodeactyl');
const Extrapteroclient = new Nodeactyl.NodeactylClient("https://witherpanel.com", process.env.ExtraServerApiKey);
const Mainpteroclient = new Nodeactyl.NodeactylClient("https://witherpanel.com", process.env.MainServerApiKey);
module.exports = class StatusCommand extends Command {
	constructor(context) {
        super(context, {
			description: 'commands.misc.status',
		});
	}
    async run (message) {
        // ids
        const MainServer = await Mainpteroclient.getServerDetails('1f823100');
        const ExtraServer = await Extrapteroclient.getServerDetails('5b3e0a0a');
        console.log(MainServer)
        console.log(ExtraServer)
        // main server status indicator if files
        
        // embed
        const Embed = new MessageEmbed()
        .setColor(embedcolor)
        .setTitle(`${botname} Status CMD`)
        .setDescription('Status Of The Server')

        .setFooter(`Prefix = ${prefix}`)
    }
};