const { response, request } = require('express');

const getUsers = (req = request, res = response) => {

    const {page, limit} = req.query;

    res.status('200').send({
        msg: 'get API - Controller',
        page,
        limit,
    })
}

const postUser = (req = request, res = response) => {

    const {nombre, edad} = req.body;

    res.status('201').send({
        msg: 'post API - Controller',
        nombre,
        edad,
    })
}

const putUser = (req = request, res = response) => {

    const {id} = req.params;

    res.status('201').send({
        msg: 'put API - Controller',
        id,
    })
}

const deleteUser = (req = request, res = response) => {
    res.status('204').send({
        msg: 'delete API - Controller',
    })
}

const patchUser = (req = request, res = response) => {
    res.status('201').send({
        msg: 'patch API - Controller',
    })
}


module.exports = {
    getUsers,
    postUser,
    putUser,
    deleteUser,
    patchUser,
}