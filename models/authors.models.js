// const { Pool } = require('pg');
const queries = require('../queries/authors.queries')
const pool = require("../config/db_pgsql")

// GET
const getAllAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllAuthors)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// GET
const getAuthorsByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAuthorsByEmail, [email])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// let newAuthor = {
//    "name"="Antonio",
//    "surname"="Mangado",
//    "email"="miemail@gmail.com",
//    "image"="https://weareallaboutcats.com/wp-content/uploads/2021/10/Is-My-Kitty-Depressed-Signs-to-Look-For-in-a-Sad-Cat.jpg" 
// }

// POST
const createAuthor = async (entry) => {
    const { name, surname, email, image } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createAuthor,[name, surname, email, image])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result 
}

// UPDATE
const updateAuthors = async (entry) => {
    const { name, surname, email, image, oldEmail } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateAuthor,[name, surname, email, image, oldEmail])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// DELETE
const deleteAuthors = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteAuthors, [email])
        result = email
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const entries = {
    getAllAuthors,
    getAuthorsByEmail,
    createAuthor,
    updateAuthors,
    deleteAuthors
}

module.exports = entries;