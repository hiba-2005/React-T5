import { useState } from 'react';

function FormulaireInscription() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nom || !email || !motDePasse) {
      setMessage('Veuillez remplir tous les champs.');
      return;
    }

    setMessage(`Inscription réussie pour ${nom} (${email})`);
    setNom('');
    setEmail('');
    setMotDePasse('');
  };

  return (
    <div className="bloc">
      <form onSubmit={handleSubmit} className="formulaire">
        <input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
        />

        <button type="submit">S'inscrire</button>
      </form>

      {message && <p className="resultat">{message}</p>}
    </div>
  );
}

export default FormulaireInscription;
