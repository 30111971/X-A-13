const fs = require("fs");
module.exports = {    
    default: message => message.reply("Adicione um novo comando ao BOT, digite: *addcommand function(message) { ... }"),
    execute: (message) => {
        const command = message.content.split(process.env.prefix)[1].split(" ")[0].toLowerCase()
        if(!message.content.split(`${process.env.prefix}${command} `)[1]) {
            message.reply(`a sintaxe correta é: ${process.env.prefix}addcommand <nome> <código>`)
            return;
        }
        const nome = message.content.split(`${process.env.prefix}${command} `)[1].split(" ")[0]
        let content = message.content.split(`${process.env.prefix}${command} `)[1].split(nome + " ")[1]
        content = `module.exports = { execute: ${content}, byUser: true }`

        const path = __dirname + '/' + nome + '.js';
        // fs.exists(path, exists => {
        //     if(exists) {
        //         message.reply("esse comando já existe, ele não pode ser sobrescrito")
        //         return;
        //     } else {
        //         fs.writeFile(`${__dirname}/${nome}.js`, content, err => {
        //             if(err) return console.log(err)

        //             message.reply("comando criado, :)")
        //         })
        //     }
        // })
    }
}