const connection = require('../db/connection')
module.exports ={
    async created (req , res) {
const {id} = req.body

        const ong = await connection('ongs')
            .where('id' , id)
            .select('id')
            .first()

        if (!ong){
            return res.status(400).json({error: "Ong não existe!"})
        }
        return res.json(ong)


    }
}

