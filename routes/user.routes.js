

const {Router} = require('express');
const { getUsers, 
        postUser, 
        putUser, 
        deleteUser, 
        patchUser } = require('../controllers/users.controllers');

const routes = Router();


routes.get('/', getUsers);

routes.post('/', postUser);

routes.put('/:id', putUser);

routes.delete('/', deleteUser);

routes.patch('/', patchUser);




module.exports = routes;