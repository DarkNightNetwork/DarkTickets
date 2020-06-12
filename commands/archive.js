const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, argument) => {
const categoryId = "720324147288342559";
const ticketcategoryid = "715870460083961866"

if(message.channel.parentID == ticketcategoryid){
    message.channel.setParent(categoryId).then((settedParent) => {
        settedParent.overwritePermissions([
            {
                id: message.guild.id,
                deny: ['VIEW_CHANNEL'],
            },  
        ], 'Setting up ticket permissions');
    });
}else{
    message.reply(", the command 'Archive' can only be used in tickets");
}

var embedCloseTicket  = new Discord.MessageEmbed()
    .setTitle(`Ticket Archived`)
    .setFooter(`Ticket ${message.channel.name} has been closed!`);

var logChannel = message.guild.channels.cache.find(channel => channel.id === "720314429996269668");
if (!logChannel) return message.channel.send("Could not logg the ticket");

logChannel.send(embedCloseTicket);

}