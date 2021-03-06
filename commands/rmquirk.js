const quirkController = require('../App/controllers/quirkController.js')
module.exports = {
    PERMISSIONS: ["ADMINISTRATOR"],
    default: message => message.reply("Remova uma quirk, sintaxe: *rmquirk <nome_da_quirk>"),
    execute: async message => {
        await quirkController.rm(message.content.split(" ")[1]).then(res => message.react("👍"))
            .catch(err => message.reply(err.message))
    }
}