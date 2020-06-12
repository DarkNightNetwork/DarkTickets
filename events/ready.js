module.exports = (client) => {
    console.log(`Name: ${client.user.tag} \nToken: ${client.token} \nVersion: 1.0.0 Alpha testing \nServercount: ${client.guilds.cache.size} \nHave fun! (∞)`);    
    const activities = [ "DarkNight Network", "DarkHosting"];
    setInterval(() => {
        let activity = activities[Math.floor(Math.random() * activities.length)]
        client.user.setActivity(activity, {
            type: "LISTENING",
        })
    }, 2500)
  }