# Projet Frontend Deliveroo

## Description

Ce projet est une application front-end utilisant React et configurée avec Vite. Il comprend une gestion des catégories et des articles, ainsi qu'un panier.

## Structure du projet

- **index.html** : Fichier HTML principal.
- **tailwind.config.js** : Configuration de Tailwind CSS.
- **vite.config.js** : Configuration de Vite.
- **package.json** : Fichier de configuration de npm avec les dépendances et scripts.
- **postcss.config.js** : Configuration de PostCSS.
- **src/** : Dossier contenant les fichiers source de l'application.
  - **App.css** : Styles globaux de l'application.
  - **index.css** : Styles d'index.
  - **main.jsx** : Point d'entrée principal de l'application React.
  - **App.jsx** : Composant principal de l'application.
  - **components/** : Dossier contenant les composants React.
    - **Header.jsx** : Composant de l'en-tête.
    - **Restaurant.jsx** : Composant pour afficher les informations d'un restaurant.
    - **Categories/** : Dossier contenant les composants liés aux catégories.
      - **Categories.jsx** : Composant pour afficher les catégories.
      - **Category.jsx** : Composant pour une catégorie individuelle.
      - **Cart/** : Dossier contenant les composants liés au panier.
        - **Cart.jsx** : Composant pour afficher le panier.
        - **Articles.jsx** : Composant pour afficher les articles du panier.
        - **MinusCart.jsx** : Composant pour afficher le panier en bas de l'écran sur un appareil mobile
- **assets/** : Dossier contenant les ressources (icônes, polices, etc.).

## Installation

1. Clonez le dépôt : `git clone <URL_du_dépôt>`
2. Accédez au dossier du projet : `cd frontend`
3. Installez les dépendances : `npm install`

## Développement

Pour lancer le serveur de développement :

```
npm run dev
```

## Production

Pour construire le projet pour la production :

```
npm run build
```

## Linting

Pour analyser le code avec ESLint :

```
npm run lint
```

## Tests

Pour exécuter les tests :

```
npm run test
```

## Contribution

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commitez vos modifications (`git commit -m 'Add some AmazingFeature'`)
4. Poussez votre branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus d'informations.
