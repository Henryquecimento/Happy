const Database = require('sqlite-async');

//objeto db tem uma função exec(execução) / quero que crie uma tabela, caso não tenha um banco de dados
function execute (db) {
   return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );    
    `)
}
 //id do orfanato será uma chave primária e quero que se autoincrement / elemento + tipo(de dado)
 //return db.exec com tudo dentro para o 'execute' na linha 3, onde ele foi chamado

 module.exports = Database.open(__dirname + '/database.sqlite').then(execute); 
//Database, abra o diretório local(database) e ponha dentro dele um arquivo database.sqlite E DEPOIS (THEN) faça uma função que irá abrir(função execute) o banco de dados (db) que acabou de criar 
// na primeira vez, ele vai criar o arquivo, nas próximas ele ira apenas abrir;

//Por fim estou exportando o resultado do 'Database.open(__dirname + '/database.sqlite').then(execute)' que é o -- db retornado --