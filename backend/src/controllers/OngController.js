const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
    //lista todas as ONGS
    async index(request, response){ 
        const ongs = await connection('ongs').select('*')
            return response.json({ongs})
    },

    //criar uma ONG
    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body
    
        const id = crypto.randomBytes(4).toString('HEX')//gera id randomico
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
        return response.json({id})
}}