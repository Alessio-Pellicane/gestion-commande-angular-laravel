# Gestion Client App – Backend

Ce projet est le backend de l’application interne de gestion des clients, produits et commandes. Il est développé avec Laravel (PHP) et fournit une API REST sécurisée pour le frontend Angular.

## Objectif

L’application backend permet de :
- Gérer les données clients (création, modification, suppression, consultation)
- Gérer le catalogue de produits
- Enregistrer et suivre les commandes
- Fournir des endpoints API pour l’interface utilisateur
- Assurer la sécurité et la validation des accès

## Technologies principales
- Laravel (framework PHP)
- MySQL ou MariaDB (base de données)
- Composer (gestionnaire de dépendances PHP)

## Structure du projet
- `app/Models` : Modèles Eloquent (Client, Produit, Commande, etc.)
- `app/Http/Controllers` : Contrôleurs API
- `database/migrations` : Migrations de la base de données
- `database/seeders` : Données de test
- `routes/web.php` : Définition des routes

## Installation
1. Cloner le dépôt
2. Se placer dans le dossier `backend`
3. Installer les dépendances :
	```bash
	composer install
	```
4. Copier le fichier `.env.example`, renommer en `.env` et configurer la base de données
5. Générer la clé d’application :
	```bash
	php artisan key:generate
	```
6. Lancer les migrations et les seeders :
	```bash
	php artisan migrate --seed
	```
7. Démarrer le serveur de développement :
	```bash
	php artisan serve
	```

## Usage
Ce backend est destiné à un usage interne et doit être utilisé avec le frontend Angular associé. Il expose des endpoints API pour toutes les opérations de gestion.

## Licence
Usage interne uniquement. Ne pas redistribuer sans autorisation.
