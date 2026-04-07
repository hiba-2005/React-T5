import { useState } from 'react';
import './App.css';

import { UtilisateurContext } from './UtilisateurContext';
import FormulaireControle from './FormulaireControle';
import FormulaireNonControle from './FormulaireNonControle';
import FormulaireInscription from './FormulaireInscription';
import TemperatureConvertor from './TemperatureConvertor';
import Profil from './Profil';

function App() {
  const [utilisateur, setUtilisateur] = useState({
    nom: 'Hiba',
    connecte: true
  });

  return (
    <UtilisateurContext.Provider value={{ utilisateur, setUtilisateur }}>
      <div className="app">
        <h1>TP React débutant</h1>

        <section className="carte">
          <h2>Formulaire Contrôlé</h2>
          <FormulaireControle />
        </section>

        <section className="carte">
          <h2>Formulaire Non-Contrôlé</h2>
          <FormulaireNonControle />
        </section>

        <section className="carte">
          <h2>Formulaire d'inscription</h2>
          <FormulaireInscription />
        </section>

        <section className="carte">
          <h2>Convertisseur de température</h2>
          <TemperatureConvertor />
        </section>

        <section className="carte">
          <h2>Profil Utilisateur</h2>
          <Profil />
        </section>
      </div>
    </UtilisateurContext.Provider>
  );
}

export default App;