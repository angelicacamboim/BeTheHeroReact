const express = require('express')
const cors = require('cors')

const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(3333)


// Rota / Recurso 

// Metodos HTTP 
//GET - busca uma informação do backend
//POST - criar uma informação no backend
//PUT - alterar uma informação
//DELETE - deletar uma informação

//tipos de parâmetros
//query params: parametros nomeados e enviados na rota após "?" {filtros, paginação} - request.query {metodo get}
//routes params: parametros utilizados para identificar recursos {:id} - request.params {metodo get}
//request body: corpo da requisição utilizado para criar ou alterar recursos - request.body {metodo post}

//SQL: mysql, sqlite, postgres, oracle, sql server
//NoSQL: mongoDB, couchDB - não relacionais

//driver: select * from users
//query builder: table('users'). select('*') - knex
//npx executa o pacote
//npm instala pacote