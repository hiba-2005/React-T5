import { useContext } from 'react';
import { UtilisateurContext } from './UtilisateurContext';

function Profil() {
  const { utilisateur, setUtilisateur } = useContext(UtilisateurContext);

  const deconnexion = () => {
    setUtilisateur({ nom: '', connecte: false });
  };

  const reconnexion = () => {
    setUtilisateur({ nom: 'Hiba', connecte: true });
  };

  return (
    <div className="bloc">
      {utilisateur.connecte ? (
        <>
          <p className="resultat">Bienvenue, {utilisateur.nom} 👋</p>

          <input
            type="text"
            placeholder="Changer le nom"
            value={utilisateur.nom}
            onChange={(e) =>
              setUtilisateur({ ...utilisateur, nom: e.target.value })
            }
          />

          <button onClick={deconnexion}>Se déconnecter</button>
        </>
      ) : (
        <>
          <p className="resultat">Veuillez vous connecter.</p>
          <button onClick={reconnexion}>Se reconnecter</button>
        </>
      )}
    </div>
  );
}

export default Profil;