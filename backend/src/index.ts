import express from 'express'

const app = express()

app.get('/', (request, response) => {
    return response.send('ola')
})

app.listen(3333)