const entry = require("../models/authors.models")

// GET http://localhost:3000/api/authors --> ALL
// GET http://localhost:3000/api/authors?email=alejandru@thebridgeschool.es

const getAuthors = async (req, res) => {
    let authors;
    if (req.query.email) {
        authors = await entry.getAuthorsByEmail(req.query.email);
    }
    else {
        authors = await entry.getAllAuthors();
    }
    res.status(200).json(authors); // [] con las entries encontradas
}

const createAuthors = async (req, res) => {
    const newAuthor = req.body; // {title,content,email,category}
    const response = await entry.createAuthor(newAuthor);
    res.status(201).json({
        message: "Usuario creado: " + newAuthor.email,
    });
}

// updateAuthor
// PUT http://localhost:3000/api/authors
// let updatedEntry = {
//     "name":"Usuario",
//     "surname":"Actualizado",
//     "email":"emailactualizado@gmail.com",
//     "image":"imagenactualizada.jpg"
//     "oldEmail":"miemail@gmail.com"
//     }

// Updatear entry por title
const updateAuthor = async (req, res) => {
    const updatedAuthor = req.body; // {name,surname,email,image,oldEmail}
    const response = await entry.updateAuthors(updatedAuthor);
    res.status(200).json({
        message: "Usuario actualizado: " + updatedAuthor.oldEmail
    });
}

// deleteEntry
// DELETE http://localhost:3000/api/authors
// let deletedAuthor = {
//     "email":"unemail@gmail.com",   
//     }

// deletear autor por email
const deleteAuthor = async (req, res) => {
    const deletedAuthor = req.body; // {title}
    const response = await entry.deleteAuthors(deletedAuthor.email);
    res.status(200).json({
        message: `Se ha borrado ${deletedAuthor.email}`,
    });
}

module.exports = {
    getAuthors,
    createAuthors,
    updateAuthor,
    deleteAuthor
}