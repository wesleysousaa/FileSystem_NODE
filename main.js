const chalk = require('chalk')
const fs = require('fs')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Digite o nome do arquivo TXT -> ", (titulo) => {
    readline.question("Digite o conteúdo -> ", (conteudo) => {
        console.log(chalk.green('Arquivo gerado com sucesso!'), chalk.bgGreenBright.white(titulo+'.txt'))
        fs.writeFileSync(titulo + '.txt', conteudo)
        readline.close()
    })
})