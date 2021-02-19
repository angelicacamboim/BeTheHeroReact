const connection = require('../database/connection')

module.exports = {
    //lista todos os incidentes das ONGs
    //contador de página 5 a 5 registros
    //exibe o total de paginas no response do header

    async listAllOngsIncidents (request, response){ 
        const{ page = 1 } = request.query

        const [count] = await connection('incidents').count()

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1 ) * 5)
        .select(['incidents.*', 
        'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf'])

        response.header('x-total-count', count['count(*)'])

        return response.json({incidents})
    },

    //lista somente os incidentes de uma ONG
    async listSpecificOngIncidents (request, response){ 
        const ong_id = request.headers.authorization

        const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*')

        
        return response.json({incidents})
    },

    //Criar incidentes para a ONG
    async create(request, response){
        const { title, description, value} = request.body
        const ong_id = request.headers.authorization
        
       const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
           
        })
    
        return response.json({id})
    },

    //deleta o incidente
    async delete(request, response){
        const {id} = request.params
        const ong_id = request.headers.authorization
        console.log(ong_id)

        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first()

        if(incident.ong_id !== ong_id){
            return response.status(401).json({error: 'Operation not permitted!'})
        }

        await connection('incidents').where('id', id).delete()

        return response.status(204).send()

    }
}