# Made by JD — maquette du site

Site statique (HTML + CSS + un peu de JavaScript) pour la boutique de céramiques et de bougies faites main de Julie.
Vente via JD Capital SRL (BE0829201035), en Belgique et en français. Nom provisoire : **Made by JD**.

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | Accueil : héros, catégories, couleurs, dernières fournées, bougies, atelier, newsletter |
| `boutique.html` | Tous les produits, avec filtres par type d'objet et par couleur |
| `produit.html` | Exemple de fiche produit (Tasse Lagon) avec galerie photo |
| `infos.html` | Livraison, entretien, CGV, mentions légales, confidentialité (textes à rédiger) |
| `css/style.css` | Toute la mise en page et les couleurs (variables en haut du fichier) |
| `js/` | Filtres de la boutique, galerie de la fiche produit, formulaire de démonstration |
| `img/` | Photos (basse définition, à remplacer) |
| `favicon.svg` | Icône de l'onglet (monogramme JD) |

Tout fonctionne avec des liens relatifs : le dossier peut être ouvert tel quel ou mis sur n'importe quel hébergement statique.

## Voir le site en local

Ouvrir `index.html` dans un navigateur. Ou, pour un rendu identique à un vrai site :

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

## Mettre le site sur GitHub (GitHub Pages)

1. Créer un dépôt sur GitHub (par exemple `made-by-jd`).
2. Y envoyer tous les fichiers de ce dossier, avec `index.html` à la racine du dépôt.
3. Dans le dépôt : **Settings → Pages → Build and deployment → Source : Deploy from a branch**, branche `main`, dossier `/ (root)`.
4. Après une ou deux minutes, le site est en ligne sur `https://<votre-compte>.github.io/made-by-jd/`.
5. Plus tard, pour un nom de domaine à vous : **Settings → Pages → Custom domain**.

## Changer les couleurs et les polices

Tout est en haut de `css/style.css`, dans le bloc `:root` (fond, texte, vert d'accent, polices).
Les polices (Instrument Serif et Jost) sont chargées depuis Google Fonts dans le `<head>` de chaque page.

## Ce qui reste à remplir

Les textes entre crochets, par exemple : `[Prix]` de la bougie, description, dimensions et entretien des pièces, délais de livraison,
détails des bougies (cire, parfums, durée), présentation de Julie, adresse e-mail de contact, siège social, CGV, politique de confidentialité.
Les noms de pièces, les prix et le seuil de livraison offerte (60 €) sont des exemples.

## Ce que ce site ne fait pas (encore)

C'est une vitrine : le panier, le paiement (Bancontact, carte, PayPal…), la gestion du stock et des commandes
ne sont **pas** inclus, et le formulaire de newsletter n'envoie rien.
Pour vendre en ligne, ces pages servent de modèle de design à reprendre dans une boutique (Shopify, par exemple),
ou à relier à un service de paiement et de panier.

## Photos

Les photos actuelles sont des extraits de photos de test en basse définition : elles paraissent floues en grand.
Pour le vrai site : photos au téléphone, en lumière du jour, sur fond neutre, une photo d'ensemble et 2 à 3 détails par pièce.
Remplacer les fichiers de `img/` en gardant les mêmes noms, ou modifier les `src` dans les pages.
