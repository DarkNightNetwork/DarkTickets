const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, argument) => {
    if(argument[1] == null || argument[0] == ''){
        message.reply(", You need to tell me who you wanna add to this channel");
    }else{
        message.channel.overwritePermissions([
            {
                id: argument[0].id,
                allow: ['VIEW_CHANNEL'],
            },
            {
                id: argument[0].id,
                allow: ['READ_MESSAGE_HISTORY'],
            },
            {
                id: argument[0].id,
                allow: ["SEND_MESSAGES"],
            },
            {
                id: argument[0].id,
                allow: ["ATTACH_FILES"],
            },
            {
                id: argument[0].id,
                allow: ["CONNECT"],
            },
            {
                id: argument[0].id,
                deny: ["CREATE_INSTANT_INVITE"],
            },
            {
                id: argument[0].id,
                allow: ["ADD_REACTIONS"],
            },
        ], 'Setting up ticket permissions')
    }
}