
const fs = require('fs')

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('Le fichier welcome.txt a été créé avec succès !');
});
