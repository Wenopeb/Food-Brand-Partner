# Food Brand Partner - Landing Page Firebase Hosting

Site web de landing page pour Food Brand Partner, optimisé pour Firebase Hosting.

## 🚀 Déploiement Firebase Hosting

### Prérequis
- Node.js (version 14 ou supérieure)
- Compte Firebase
- Firebase CLI installé globalement : `npm install -g firebase-tools`

### Étapes de déploiement

#### 1. Configuration Firebase

```bash
# Se connecter à Firebase
firebase login

# Initialiser le projet Firebase
firebase init hosting

# Choisir le projet existant ou créer un nouveau
```

#### 2. Configuration du projet

1. **Modifier `.firebaserc`** :
   ```json
   {
     "projects": {
       "default": "VOTRE_PROJET_FIREBASE_ID"
     }
   }
   ```

2. **Configurer Firebase Hosting** :
   - Répertoire public : `public`
   - Configurer comme Single Page App (SPA) : **Oui**
   - Fichier index.html : `index.html`

#### 3. Déploiement

```bash
# Construire le projet (si nécessaire)
npm run build  # ou votre commande de build

# Déployer sur Firebase Hosting
firebase deploy
```

#### 4. URL de votre site

Après déploiement, votre site sera disponible à :
`https://VOTRE_PROJET_FIREBASE_ID.web.app`

## 📁 Structure du projet

```
firebase-hosting/
├── public/                     # Fichiers statiques pour Firebase Hosting
│   ├── index.html             # Page principale
│   ├── styles/
│   │   └── app.css           # Styles personnalisés
│   ├── scripts/
│   │   └── app.js            # JavaScript personnalisé
│   ├── assets/
│   │   └── logo.png          # Logo de l'entreprise
│   └── tailwind-config.js    # Configuration Tailwind
├── firebase.json              # Configuration Firebase
├── .firebaserc               # Configuration projet Firebase
└── README.md                 # Ce fichier
```

## 🎨 Fonctionnalités

- **Design responsive** avec Tailwind CSS
- **Navigation fluide** avec scroll automatique
- **FAQ interactif** avec accordion
- **Formulaire de contact** fonctionnel
- **Animations au scroll** pour l'engagement
- **Optimisé SEO** avec meta tags appropriés
- **Performance optimisée** avec caching headers

## 📱 Sections de la landing page

1. **Bannière d'alerte** - Call-to-action urgent
2. **Navigation** - Menu principal et mobile
3. **Section Hero** - Présentation principale
4. **Section Problems** - Identification des problèmes
5. **Section Benefits** - Solutions proposées
6. **Marques virtuelles** - Explication du concept
7. **Processus** - Comment ça marche (5 étapes)
8. **Raisons du succès** - 4 facteurs clés
9. **Bénéfices clés** - 5 avantages principaux
10. **Modèle gagnant-gagnant** - Explication du business model
11. **Garantie zéro risque** - Sécurisation client
12. **Formulaire de contact** - Lead generation
13. **FAQ** - Questions fréquentes
14. **Footer** - Liens et informations

## 🔧 Personnalisation

### Couleurs
Les couleurs sont définies dans `tailwind-config.js` avec la palette violette de la marque :
- Violet principal : `#5B21B6`
- Violet clair : `#6A2E9F`
- Violet card : `#C8B6E0`

### Contenu
Modifiez directement les sections dans `public/index.html` pour personnaliser :
- Textes et descriptions
- Images et logos
- Liens et boutons
- Informations de contact

### Styles
Ajoutez des styles personnalisés dans `public/styles/app.css`

### Fonctionnalités JavaScript
Modifiez ou ajoutez des fonctionnalités dans `public/scripts/app.js`

## 📊 Métriques et Analytics

Pour suivre les performances, ajoutez Google Analytics ou autre solution dans la section `<head>` du fichier `index.html`.

## 🔐 Sécurité

- Headers de sécurité configurés dans `firebase.json`
- HTTPS forcé par Firebase Hosting
- Protection XSS et autres vulnérabilités

## 📞 Support

Pour toute question technique ou modification du site, contactez l'équipe de développement.

## 📄 Licence

© 2025 Food Brand Partner. Tous droits réservés.

---

**Site optimisé pour Firebase Hosting | Responsive Design | Performance Optimisée**