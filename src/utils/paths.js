const path = require('path')

const root = path.join(__dirname, '..', '..')

const src = path.join(root, 'src')

const controllers = path.join(src, 'controllers')
const controllerPaths = {
    users: path.join(controllers, 'usersController')
}

const services = path.join(src, 'services')
const servicePaths = {
    users: path.join(services, 'usersService'),
}

const models = path.join(src, 'models')
const modelsPaths = {
    users: path.join(models, 'usersModel'),

}

const routes = path.join(src, 'routes')
const routePaths = {
    users: path.join(routes, 'usersRoutes'),
}

const utils = path.join(src, 'utils')
const utilsPaths = {
    authentication: path.join(utils, 'authentication'),
    common: path.join(utils, 'common'),
}

const config = path.join(src, 'config')
const configPaths = {
    db: path.join(config, 'db'),
    dbconfig: path.join(config, 'db.config'),
}


module.exports = {
    src,
    servicePaths,
    modelsPaths,
    configPaths,
    controllerPaths,
    routePaths,
    utilsPaths
}