const {MessageEmbed} = require('discord.js');
const {HelperIDs} =  require('../../config.json');
const { err, ok, Precondition,} = require("@sapphire/framework");
module.exports = class OwnerPrecondition extends Precondition {
	run(message) {
		const isHelper = HelperIDs.includes(message.member.id)
		return isHelper ? ok() : err('You are not in the correct guild');
	}
}