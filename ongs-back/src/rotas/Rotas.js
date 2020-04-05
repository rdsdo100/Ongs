const express = require('express')
const ongController = require('../controller/OngsController')
const incidentController = require('../controller/IncidentController')
const profileController = require('../controller/ProfileController')
const sessionController = require("../controller/SessionController")
const {celebrate , Joi , Segments} = require("celebrate")

const route = express.Router()

route.post('/sessions',sessionController.created )




route.post('/ongs',celebrate({
     [Segments.BODY]:Joi.object().keys({
         name: Joi.string().required(),
         email: Joi.string().required().email(),
         whatsapp: Joi.number().required().min(10).max(11),
         city: Joi.string().required(),
         ug: Joi.string().required().length(2)
     })
}), ongController.create)


route.post('/incidents' , incidentController.create)
route.get('/ongs',ongController.index)
route.get('/incidents' , incidentController.index)
route.get('/profile' , profileController.index)
route.delete('/incidents/:id' , incidentController.deletar)

module.exports = route