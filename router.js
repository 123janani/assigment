const routes = require('express').Router();
const controller = require('./dependancies_controller');

routes.get('/:pkgName', controller.getAll);

module.exports = routes;
