const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "MTA3MTg4MjE0NTU5NDg2NzgyMw.GpWqE3.WJjAlApE6wj6GsSn2l0rMgJZLAdR4NCewHxKr0"

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