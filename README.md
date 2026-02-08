# 💸 SalaireCalcul

> **Combien d'heures de vie coûte réellement cet achat ?**

SalaireCalcul est une application web moderne qui vous permet de convertir le prix de n'importe quel produit en heures de travail, basées sur votre salaire horaire ou le SMIC. Elle inclut également des données d'inflation en temps réel pour vous donner le "vrai" coût de la vie.

![SalaireCalcul Demo](./public/screenshot.png)

## ✨ Fonctionnalités

- **Calcul du "Coût Véritable"** : Entrez un prix et un salaire horaire pour voir combien de temps il faut travailler pour se l'offrir.
- **Conversion Temporelle** : Visualisez le coût en jours, semaines et mois de travail.
- **Inflation en Temps Réel** : Récupère automatiquement les dernières données d'inflation depuis l'API de l'INSEE.
- **Messages Humoristiques** : Des petites phrases pour dédramatiser (ou pas !) vos achats.
- **Design Moderne** : Interface soignée avec TailwindCSS v4, animations fluides et mode sombre par défaut.

## 🛠️ Stack Technique

- **Framework** : [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [TailwindCSS v4](https://tailwindcss.com/)
- **API** : [INSEE](https://api.insee.fr/) pour les données économiques
- **Icônes** : Emojis natifs pour la légèreté

## 🚀 Installation et Démarrage

1. **Cloner le projet**

   ```bash
   git clone https://github.com/votre-username/salairecalcul.git
   cd salairecalcul
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**

   ```bash
   npm run dev
   ```

4. **Modifier les données**
   Ouvrez `http://localhost:5173` dans votre navigateur.

## 🗂️ Structure du Projet

```text
src/
├── components/      # Composants React (Calculator, Results, etc.)
├── services/        # Appels API (ex: inflationAPI.ts)
├── types/           # Définitions TypeScript
├── utils/           # Fonctions utilitaires (messages d'humour)
├── App.tsx          # Composant principal
└── main.tsx         # Point d'entrée
```

## 🤝 Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une Pull Request si vous avez des idées pour rendre l'application encore plus déprimante (ou utile !).

