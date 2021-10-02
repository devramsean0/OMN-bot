const {MessageEmbed} = require('discord.js');
const GuildID = process.env.GuildID
const { err, ok, Precondition,} = require("@sapphire/framework");
module.exports = class OwnerPrecondition extends Precondition {
	run(message) {
		const isGuild = GuildID.includes(message.guild.id)
		return isGuild ? ok() : err('You are not in the correct guild');
	}
}