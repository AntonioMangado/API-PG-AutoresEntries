const entry = require('../models/entries.models'); // Importar el modelo de la BBDD

//getEntries
// if(hay email)
//     busca por mail
// else
//     busca todo


// GET http://localhost:3000/entries --> ALL
// GET http://localhost:3000/entries?email=hola@gmail.com --> por email
const getEntries = async (req, res) => {
    let entries;
    if (req.query.email) {
        entries = await entry.getEntriesByEmail(req.query.email);
    }
    else {
        entries = await entry.getAllEntries();
    }
    res.status(200).json(entries); // [] con las entries encontradas
}

//createEntry
// POST http://localhost:3000/api/entries
// let newEntry = {
//     title:"noticia desde Node",
//     content:"va a triunfar esto2",
//     email:"alejandru@thebridgeschool.es",
//     category:"sucesos"}

// Crear entry por email
const createEntry = async (req, res) => {
    const newEntry = req.body; // {title,content,email,category}
    const response = await entry.createEntry(newEntry);
    res.status(201).json({
        "items_created": response,
        data: newEntry
    });
}

// updateEntry
// PUT http://localhost:3000/api/entries
// let updatedEntry = {
//     title:"Noticia updateada, llueve en Madrid",
//     content:"Si sale esto, es que se ha updateado la noticia y no queda mas tortillita por inundación",
//     category:"pasanCosas",
//     oldTitle:"Noticia: SOL en Madrid"
//     }

// Updatear entry por title
const updateEntry = async (req, res) => {
    const updatedEntry = req.body; // {title,content,category,email}
    const response = await entry.updateEntry(updatedEntry);
    res.status(201).json({
        "items_updated": response,
        data: updatedEntry
    });
}

// deleteEntry
// DELETE http://localhost:3000/api/entries
// let deletedEntry = {
//     title:"El rayo gana la champions",   
//     }

// deletear entry por title
const deleteEntry = async (req, res) => {
    const deletedEntry = req.body; // {title}
    const response = await entry.deleteEntriesByTitle(deletedEntry.title);
    res.status(200).json({
        message: `Se ha borrado la entry ${response.title}`,
    });
}

module.exports = {
    getEntries,
    createEntry,
    updateEntry,
    deleteEntry
}