# 📘 TP 5 : Gestion de l’état et structuration des composants React

## 🎯 Objectif

Ce TP a pour but de découvrir les concepts fondamentaux de React :

* Création de formulaires (contrôlés et non contrôlés)
* Gestion de l’état avec `useState`
* Partage des données entre composants (Lifting State Up)
* Utilisation du **Context React** pour gérer des données globales

---

## 🛠️ Technologies utilisées

* React JS
* JavaScript (ES6)
* HTML / CSS
* Hooks React (`useState`, `useRef`, `useContext`)

---

## 🚀 Installation et lancement

### 1. Créer le projet

```bash
npx create-react-app tp-react-debutant
cd tp-react-debutant
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer l’application

```bash
npm start
```

---

## 📁 Structure du projet

```
src/
│
├── App.js
├── App.css
├── FormulaireControle.js
├── FormulaireNonControle.js
├── FormulaireInscription.js
├── TemperatureConvertor.js
├── TemperatureInput.js
├── UtilisateurContext.js
├── Profil.js
```

---

## 🧩 Fonctionnalités réalisées

### 1. Formulaire contrôlé

* Utilisation de `useState`
* Les champs sont liés à l’état React
* Mise à jour en temps réel

✔ Exemple :

```js
const [nom, setNom] = useState('');
```

---

### 2. Formulaire non contrôlé

* Utilisation de `useRef`
* Lecture directe des valeurs depuis le DOM

✔ Exemple :

```js
nomRef.current.value
```

---

### 3. Formulaire d’inscription

* Champs : Nom, Email, Mot de passe
* Validation simple
* Message de confirmation

---

### 4. Convertisseur de température

* Conversion Celsius ↔ Fahrenheit
* Synchronisation de deux champs
* Calcul dynamique

✔ Formules utilisées :

* °F = (°C × 9/5) + 32
* °C = (°F − 32) × 5/9

---

### 5. Lifting State Up

* L’état est stocké dans le composant parent
* Transmission via props à l’enfant

✔ Objectif :
Partager les données entre composants

---

### 6. Context React

* Création d’un contexte utilisateur
* Partage global des données

✔ Exemple :

```js
const { utilisateur } = useContext(UtilisateurContext);
```

---

### 7. Profil utilisateur

* Affichage du nom
* Déconnexion / reconnexion
* Modification dynamique du nom

---

## 🎨 Améliorations UI

* Interface moderne avec CSS
* Cartes (cards)
* Boutons stylisés
* Responsive design

---

## 🧠 Concepts appris

* useState
* useRef
* useContext
* Props
* Lifting State Up
* Gestion des formulaires
* Architecture des composants

---

## 📊 Résultat final

L’application contient :

* ✔ Formulaire contrôlé
* ✔ Formulaire non contrôlé
* ✔ Formulaire d’inscription
* ✔ Convertisseur de température
* ✔ Gestion utilisateur avec Context


https://github.com/user-attachments/assets/659212a6-a9b2-4b8c-a6af-215b3286e8e2


---


## ✅ Conclusion

Ce TP permet de maîtriser les bases essentielles de React :

* gestion de l’état
* communication entre composants
* structuration d’une application

Ces notions sont indispensables pour développer des applications modernes avec React.

---
