const {MessageEmbed} = require('discord.js');
const {ModIDs} =  require('../../config.json');
const { err, ok, Precondition,} = require("@sapphire/framework");
module.exports = class OwnerPrecondition extends Precondition {
	run(message) {
		const isMod = ModIDs.includes(message.member.id)
		return isMod ? ok() : err('You are not in the correct guild');
	}
}