const  connection = require('../db/connection')

module.exports ={
    async create (req , res)  {
        const {title , description , value} = req.body
        const ong_id = req.headers.authorization
        const [id] = await connection("incidents").insert({
            title , description , value, ong_id
        })

        res.status(201).json({id})
    },
    async index (req , res) {

        const {page = 1} = req.query // paginação
        const [count]  = await connection('incidents').count() // paginação

        res.header('X-Total-Count' , count['count(*)']) // paginação devolvendo no cabeçalho da requisição

        const ongs = await connection("incidents")
            .join('ongs' , 'ongs.id' , '=' , 'incidents.ong_id')
            .limit(5) // paginação
            .offset((page -1) * 5) // paginação
            .select([
                'incidents.*',
               ' ongs.name',
                'ongs.email',
                'ongs.whatsapp',
              '  ongs.city',
                'ongs.uf',
            ])
        return res.status(200).json(ongs)

    },

    async deletar (req , res) {

        const {id} = req.params
        const ong_id = req.headers.authorization
        const icidents = await connection('incidents')
            .select('ong_id')
            .where('id' , id)
            .first()
        if(icidents.ong_id != ong_id){
            return res.status(401).json({error: 'Operação Não poermitida!' })
        }else {
            await connection('incidents')
                .where('id' , id)
                .delete()
            return res.status(204).send("Deletado")
        }
    }
}