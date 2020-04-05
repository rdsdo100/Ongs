

const express = require('express')
const rota = require('./src/rotas/Rotas')
const cors = require('cors')
const {errors} = require( "celebrate")
const app = express()
const porta = 3003
app.use(cors())
app.use(express.json())

/*
* Tipos de paremetros
*
* Query: parametro nomeads e enviados na  rota apos o simbolo de "?" (filtros, paginação ,etc)
* params: paremtros utlizados para indentificar  recursos
* body:  Corpo da requisição, utilizado para criar ou altrerar recursos
*
*
* BNACO
*
* DRIVER : select * from  users
* query buider: table('users').select('*').where()
*
*
* */
app.use(rota)

app.use(errors()); // celebrates
app.listen(porta , ()=>{
    console.log(`Executando na porta ${porta}`)
})