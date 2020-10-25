const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

//vou utilizar o async para não SUJAR meu code com vários '.then()'
//Ao usar o async, significa que estou preparado para usar uma keyword - AWAIT. Ele fará com que eu não precise mais pôr um '.then' no final do db.run / TEM uma IDEIA de esperar - vai executar a função then, ao chegar no 'db.run' ele vai AGUARDAR ser executada e trazer o retorno, em seguida parte para a próxima linha.

Database.then(async (db) => {
  //inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-8.7441609",
    lng: "-63.8883502",
    name: "Lar dos meninos",
    about: "Presta assistência a crianças de 04 a 17 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "(69) 99259-5842",
    images: [
      "https://images.unsplash.com/photo-1582848150946-4fc75071505b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

      "https://images.unsplash.com/photo-1547496613-4e19af6736dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      "https://images.unsplash.com/photo-1576294840466-abc350eb0f48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      "https://images.unsplash.com/photo-1556804091-64871a2a962d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
      "https://images.unsplash.com/photo-1473655551229-a39d1a982885?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
      "https://images.unsplash.com/photo-1485783522162-1dbb8ffcbe5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80",

    ].toString(),
    instructions: "Dê amor e carinho ao próximo da mesma maneira como gostaria. Venha visitar o abrigo.",
    opening_hours: "Horário de visitas das 08h até 18h",
    open_on_weekends: "0"
});
  //consultar dados na tabela

  const selectedOrphanages = await db.all("SELECT *  FROM orphanages");
  /* selecione + Todas as linhas e colunas(*) + da + tabela X(orphanages)
    Se eu quisesse apenas todos os nomes -> SELECT name  FROM orphanages*/

  console.log(selectedOrphanages);

   // consultar somente 1 orphanage, pelo id
  /* const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
  console.log(orphanage);
 */
  //deletar dado da tabela
  //console.log(await db.run('DELETE FROM orphanages'));

});
