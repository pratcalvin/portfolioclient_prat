/*
  Liste des projets du portfolio.
  Pour ajouter / modifier un projet, il suffit d'éditer ce tableau.

  - category : sert au filtrage. Valeurs possibles :
    "Restaurants", "Artisans", "Commerce", "Services", "Sport", "Événementiel", "Autres"
  - sector   : libellé court affiché sur la carte
  - image    : capture d'écran dans assets/img/projects/ (1200 × 750)
  - featured : true = affiché dans « Projets sélectionnés » (le premier est la grande carte)
*/
const PROJECTS = [
  {
    name: "Master Boat Charter",
    url: "https://www.masterboatcharter.com",
    category: "Autres",
    sector: "Nautisme · Seychelles",
    description: "Charter privé et excursions en bateau au départ de La Digue, aux Seychelles.",
    image: "assets/img/projects/master-boat-charter.jpg",
    featured: true
  },
  {
    name: "Rosso Café",
    url: "https://www.rossocafe.com",
    category: "Restaurants",
    sector: "Restaurant · Bali",
    description: "Diner italo-américain à Seseh, Bali : pizza, pasta, brunch et cocktails.",
    image: "assets/img/projects/rosso-cafe.jpg",
    featured: true
  },
  {
    name: "SMRC33",
    url: "https://www.smrc33.fr",
    category: "Sport",
    sector: "Club de rugby",
    description: "Site du Saint-Médard Rugby Club : équipes, calendrier, résultats et vie du club.",
    image: "assets/img/projects/smrc33.jpg",
    featured: true
  },
  {
    name: "Koko Studio",
    url: "https://kokostudio.fr",
    category: "Services",
    sector: "Agence vidéo IA",
    description: "Agence de création vidéo en intelligence artificielle générative.",
    image: "assets/img/projects/koko-studio.jpg",
    featured: false
  },
  {
    name: "Nils Bouchilloux",
    url: "https://www.nilsbouchilloux.fr",
    category: "Sport",
    sector: "Golf · Bordeaux",
    description: "Cours de golf particuliers à Bordeaux avec un professeur diplômé BPJEPS.",
    image: "assets/img/projects/nils-bouchilloux.jpg",
    featured: false
  },
  {
    name: "Castagné Couverture",
    url: "https://castagnecouverture.fr",
    category: "Artisans",
    sector: "Couverture · Gard",
    description: "Couvreur zingueur à Aigues-Mortes : couverture, zinguerie et façades.",
    image: "assets/img/projects/castagne-couverture.jpg",
    featured: false
  },
  {
    name: "ADJADJ Compagnie",
    url: "https://adjadjcompagnie.fr",
    category: "Commerce",
    sector: "E-commerce · Alimentaire",
    description: "Boutique en ligne de produits alimentaires aux formats professionnels.",
    image: "assets/img/projects/adjadj-compagnie.jpg",
    featured: false
  },
  {
    name: "Stars On Stage",
    url: "https://starsonstage.fr",
    category: "Événementiel",
    sector: "Booking d'artistes",
    description: "Booking d'artistes, DJ sets et showcases pour clubs, bars et événements.",
    image: "assets/img/projects/stars-on-stage.jpg",
    featured: false
  },
  {
    name: "Couverture Gironde",
    url: "https://www.couverturegironde.fr",
    category: "Artisans",
    sector: "Couverture · Gironde",
    description: "Couvreur zingueur à Bordeaux et en Gironde depuis 2005.",
    image: "assets/img/projects/couverture-gironde.jpg",
    featured: false
  },
  {
    name: "Westerfield London",
    url: "https://www.westerfieldlondon.com",
    category: "Commerce",
    sector: "Import-export",
    description: "Import-export et intermédiation de produits agroalimentaires.",
    image: "assets/img/projects/westerfield-london.jpg",
    featured: false
  },
  {
    name: "SM Couverture Pau",
    url: "https://www.smcouverturepau.fr",
    category: "Artisans",
    sector: "Couverture · Pau",
    description: "Couvreur zingueur à Pau : pose, rénovation et réparation de toiture.",
    image: "assets/img/projects/sm-couverture-pau.jpg",
    featured: false
  },
  {
    name: "W888",
    url: "https://w888.fr",
    category: "Services",
    sector: "Intermédiation commerciale",
    description: "Intermédiation commerciale dans l'agroalimentaire, entre Europe et Maghreb.",
    image: "assets/img/projects/w888.jpg",
    featured: false
  },
  {
    name: "Bona Bordeaux",
    url: "https://www.bonabordeaux.fr",
    category: "Restaurants",
    sector: "Brasserie · Bordeaux",
    description: "Brasserie bordelaise, cuisine 100 % faite maison et halal.",
    image: "assets/img/projects/bona-bordeaux.jpg",
    featured: false
  },
  {
    name: "CZIR62",
    url: "https://www.czir62.fr",
    category: "Artisans",
    sector: "Couverture · Béthune",
    description: "Entreprise familiale de couverture à Béthune depuis 1995.",
    image: "assets/img/projects/czir62.jpg",
    featured: false
  },
  {
    name: "ADU Pièces Auto",
    url: "https://www.adupiecesauto.fr",
    category: "Commerce",
    sector: "Pièces automobiles",
    description: "Pièces auto, consommables et outillage à Labastide-Saint-Pierre.",
    image: "assets/img/projects/adu-pieces-auto.jpg",
    featured: false
  },
  {
    name: "Casanova Conciergerie",
    url: "https://www.casanova-conciergerie.fr",
    category: "Services",
    sector: "Conciergerie",
    description: "Conciergerie haut de gamme à Bordeaux, Bassin d'Arcachon et Cap Ferret.",
    image: "assets/img/projects/casanova-conciergerie.jpg",
    featured: false
  },
  {
    name: "DDSL Audio",
    url: "https://www.ddslaudio.fr",
    category: "Événementiel",
    sector: "Location son & lumière",
    description: "Location de matériel son, lumière, scène et vidéo à Bordeaux.",
    image: "assets/img/projects/ddsl-audio.jpg",
    featured: false
  },
  {
    name: "LCC Espaces Verts",
    url: "https://www.lcc-espacesverts.fr",
    category: "Artisans",
    sector: "Élagage · Gironde",
    description: "Élagage, abattage et soins aux arbres à Mérignac et Bordeaux Métropole.",
    image: "assets/img/projects/lcc-espaces-verts.jpg",
    featured: false
  }
];
