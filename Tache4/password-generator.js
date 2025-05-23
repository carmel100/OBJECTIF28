 function genererMotDePasse(longueur = 15) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  let motDePasse = '';

  for (let i = 0; i < longueur; i++) {
    const index = Math.floor(Math.random() * caracteres.length);
    motDePasse += caracteres[index];
  }

  console.log('Mot de passe généré :', motDePasse);
  return motDePasse;
}

genererMotDePasse()