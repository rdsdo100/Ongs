const crypto = require('crypto')
const  connection = require('../db/connection')

module.exports ={
    async create (req , res)  {
        const {name,email,whatsapp,city ,uf} = req.body

        console.log (
            name,
            email,
            whatsapp,
            city,
            uf)

        const id = crypto.randomBytes(4).toString('HEX')
        console.log(id)
        await connection('ongs').insert({
            id ,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        res.status(201).json({id})
    },
    async index (req , res) {

        const ongs = await connection("ongs").select("*")
        return res.status(200).json(ongs)
    }
}