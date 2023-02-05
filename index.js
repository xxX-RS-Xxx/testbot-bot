const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "Guilds",
        "GuildMessages"
    ]
})

client.on("ready", (message) => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "Hi"){
        message.reply("Hello World!")
    }
})

client.login(process.nextTick.TOKEN)