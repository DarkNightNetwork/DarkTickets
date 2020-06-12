const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, argument) => {
const categoryId = "715870460083961866";
const archivecategoryid = "720324147288342559"

if(message.channel.parentID == categoryId || message.channel.parentID == archivecategoryid){
    message.channel.delete();
}else{
    message.reply(", the command 'Close' can only be used in tickets");
}

var embedCloseTicket  = new Discord.MessageEmbed()
    .setTitle(`Ticket Closed`)
    .setFooter(`Ticket ${message.channel.name} has been closed!`);

var logChannel = message.guild.channels.cache.find(channel => channel.id === "720314429996269668");
if (!logChannel) return message.channel.send("Could not logg the ticket");

logChannel.send(embedCloseTicket);

}
