const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, argument) => {
        const categoryId = "715870460083961866";
        let UserName = message.author.username
        
        var bool = false;

        message.guild.channels.cache.forEach((channels) => {
            
            if(channels.name == "Ticket - " + UserName.toLowerCase()){
                message.reply(", You already have a ticket");
                bool = true;
            }

        })
        
        if(bool == true) return;

        var embedCreateTicket  = new Discord.MessageEmbed()
            .setTitle(`Hey ${message.author.username}`)
            .setFooter("Your ticket has been created!");

        var embedOpenTicket  = new Discord.MessageEmbed()
            .setTitle(`Ticket Opened`)
            .setFooter(`Ticket ticket-${UserName} has been openend!`);
        
        var logChannel = message.guild.channels.cache.find(channel => channel.id === "720314429996269668");
        if (!logChannel) return message.channel.send("Could not logg the ticket");

        logChannel.send(embedOpenTicket);

        message.channel.send(embedCreateTicket);

        message.guild.channels.create(`Ticket-${UserName}`, "text").then((createdChan) =>{

            createdChan.setParent(categoryId).then((settedParent) => {

                settedParent.overwritePermissions([
                    {
                        id: message.guild.id,
                        deny: ['VIEW_CHANNEL'],
                    },
                    {
                        id: message.author.id,
                        allow: ['VIEW_CHANNEL'],
                    },
                    {
                        id: message.author.id,
                        allow: ['READ_MESSAGE_HISTORY'],
                    },
                    {
                        id: message.author.id,
                        allow: ["SEND_MESSAGES"],
                    },
                    {
                        id: message.author.id,
                        allow: ["ATTACH_FILES"],
                    },
                    {
                        id: message.author.id,
                        allow: ["CONNECT"],
                    },
                    {
                        id: message.author.id,
                        deny: ["CREATE_INSTANT_INVITE"],
                    },
                    {
                        id: message.author.id,
                        allow: ["ADD_REACTIONS"],
                    },
                  ], 'Setting up ticket permissions');

                var embedParent  = new Discord.MessageEmbed()
                  .setTitle(`Hey ${message.author.username}`)
                  .setDescription("Ask your question.");

                settedParent.send(embedParent);

            }).catch(err => {
                message.reply(", there is a error sorry for the inconvenience")
            })

        }).catch(err => {
            message.reply(", there is a error sorry for the inconvenience")
        })

    }
