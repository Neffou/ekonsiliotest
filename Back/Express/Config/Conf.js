const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost', // adresse du serveur
    user: 'root', // le nom d'utilisateur
    password: 'Dobro2323', // le mot de passe
    database: 'eKonsilio', // le nom de la base de données
});
module.exports = connection;