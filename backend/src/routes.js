const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


/**
 * Rota / Recurso
 */

/**
 * Metodos HTTP
 * 
 * GET, POST, PUT, DELETE
 */


/**
 * Tipos de Parâmetros 
 * 
 * Query: Parâmetros nomeados na rota após "?" ( FIltos, paginação)
 * Route: Parâmetros utilizados para identificar recursos
 * Body: Corpo da requisição, utlizado para criar ou alterar recursos
 */

/**
* SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server, NoSQL, MongoDB, CouchDB, etc
*/

/**
 * KNEX.JS (Utilizado para requisições ao banco)
 */

routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
    }) 
}), SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create);


routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentController.delete);


module.exports = routes;