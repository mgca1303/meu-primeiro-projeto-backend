const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: "Simana Conceição",
        imagem: "https://github.com/simaraconceicao.png",
        minibio: "Desenvolvedora e Instrutora"
    },
    {
        nome: "Maria Gabriela",
        imagem: "https://avatars.githubusercontent.com/u/94992848?v=4",
        minibio: "Estudante"
    },
    {
        nome: "Nina da Hora",
        imagem: "https://avatars.githubusercontent.com/u/94992848?v=4",
        minibio: "Hacker antirracista"
    }   
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)