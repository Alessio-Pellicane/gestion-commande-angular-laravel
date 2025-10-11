# Gestion Client App – Frontend

Ce projet est le frontend de l’application interne de gestion des clients, produits et commandes. Il a été développé avec Angular.

## Objectif

L’application permet de :
- Gérer les fiches clients (création, modification, consultation)
- Gérer le catalogue de produits
- Saisir, suivre et consulter les commandes
- Visualiser un tableau de bord synthétique

## Technologies principales
- Angular (framework principal)
- TypeScript
- SCSS

## Structure du projet
- `src/app/features/dashboard` : Composant du tableau de bord
- `src/app/features/clients` : Gestion des clients
- `src/app/features/produits` : Gestion des produits
- `src/app/features/commandes` : Gestion des commandes

## Installation
1. Cloner le dépôt
2. Se placer dans le dossier `frontend`
3. Installer les dépendances :
   ```bash
   npm install
   ```
4. Lancer le serveur de développement :
   ```bash
   ng s
   ```
5. Accéder à l’application sur [http://localhost:4200](http://localhost:4200)

## Usage
Cette application est destinée à un usage interne. Elle nécessite une connexion au backend Laravel (dossier backend dans le projet) pour fonctionner pleinement (API REST).

## Licence
Usage interne uniquement. Ne pas redistribuer sans autorisation.
