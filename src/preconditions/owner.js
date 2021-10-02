const {MessageEmbed} = require('discord.js');
const OwnerID = process.env.OwnerID
const { err, ok, Precondition,} = require("@sapphire/framework");
module.exports = class OwnerPrecondition extends Precondition {
	run(message) {
		const isOwner = OwnerID.includes(message.author.id)
		return isOwner ? ok() : err('You are not the bot owner');
	}
}