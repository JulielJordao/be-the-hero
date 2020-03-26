const express = require('express');
const cors = require('cors');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

app.use(cors());
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

routes.post('/sessions', SessionController.create);

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;