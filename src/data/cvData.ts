import { CVData } from '../types';

export const cvData: CVData = {
  personalInfo: {
    name: "Elmostafa JILIT",
    title: "Cartographe, Géomaticien, Enquêteur, Aménagement territoire",
    photoUrl: "https://blogger.googleusercontent.com/img/a/AVvXsEiP-b9vyIVDzGHFHBLHxqvAqei8Hh3_g1_HjLxUHPaB37JlIRKBOElasxancwYZjqKqwD9eMsLlDPr3B-DoAEsy1hPlqzXuNAFwsvRoNnGXRFuaXcE_9BQQnBJz0dcz3YTRATJ7dRqN-xCGIRwY1cgElJk9uYG_znjCisIQRtin8HrhmIoUUMM9FdLIbQ",
    phones: ["+212 668 09 02 85", "+33 7 46 37 21 08"],
    email: "jilitelmostafa@gmail.com",
    address: "3 rue de la gainerie, 79000 Niort, France",
    linkedin: {
      label: "JILIT Elmostafa",
      url: "https://www.linkedin.com/in/jilitelmostafa/"
    },
    license: "Permis B"
  },

  coreSkills: [
    "ArcGIS / QGIS",
    "Python (ArcPy, PyQGIS)",
    "PostgreSQL / PostGIS",
    "Google Earth Engine (GEE)",
    "Télédétection: Geomatica pci, Envi, erdass",
    "Webmapping (Leaflet, OpenLayers)",
    "Analyses Statistiques (SPSS, STATA, Sphinx)",
    "Photoshop & Illustrator",
    "Autocad"
  ],

  languages: [
    { name: "Arabe", level: "Maternelle" },
    { name: "Français", level: "Professionelle" },
    { name: "Anglais", level: "Professionelle" }
  ],

  softSkills: [
    "Gestion de projet",
    "Résolution de problèmes",
    "Communication efficace",
    "Capacité d’analyse et de synthèse",
    "Gestion du temps"
  ],

  interests: [
    "gastronomi Italienne",
    "Photographie",
    "Voyage",
    "Musique",
    "Lecture",
    "Cinéma",
    "Sports",
    "Recherche scientifique"
  ],

  objective: "Cartographe et géomaticien (+5 ans d'expérience), spécialisé en modélisation spatiale, gestion des risques et études de terrain. Fort d'une solide expertise dans l'intégration des technologies SIG (ArcGIS, QGIS, GEE) et du développement de solutions Web-SIG (PostGIS, Leaflet), je souhaite mettre mes compétences techniques et scientifiques au service de projets durables d'aménagement du territoire et d'aide à la décision.",

  techSkills: [
    {
      numberTitle: "1. Géomatique & SIG Advanced (Desktop & Cloud) :",
      bullets: [
        "Expertise Logicielle : Maîtrise avancée de ArcGIS Pro/Desktop et QGIS (Analyse spatiale complexe, sémiologie graphique, et modélisation 3D).",
        "Cloud Computing : Analyse de données géospatiales massives (Big Data) via Google Earth Engine (GEE) pour le suivi environnemental et climatique.",
        "Automatisation : Développement de scripts Python (ArcPy, PyQGIS) pour l'optimisation des workflows et le géotraitement automatisé.",
        "Administration de Données : Conception et gestion de bases de données spatiales (PostgreSQL/PostGIS, SQL Server, Access).",
        "Expertise Outils : Utilisation intensive de Grass GIS, Global Mapper, MapInfo, ArcView et Canva."
      ]
    },
    {
      numberTitle: "2. Télédétection & Geo-AI (Intelligence Artificielle Spatiale) :",
      bullets: [
        "Traitement d’Images : Analyse d'imagerie optique et radar (Sentinel-1 & 2, Landsat) via SNAP, ENVI, Erdas Imagine, et PCI Geomatica.",
        "Analyse de Pointe : Classification avancée (Object-based), reconnaissance de formes, segmentation, et études diachroniques haute résolution.",
        "Innovation : Initiation aux techniques de Deep Learning (Geo-AI) pour l'extraction automatique de caractéristiques et traitement des données LiDAR."
      ]
    },
    {
      numberTitle: "3. Webmapping & Plateformes Interactives :",
      bullets: [
        "Conception de plateformes de Data Visualization automatisées pour le suivi des indicateurs socio-économiques et de genre.",
        "Développement Frontend : Création de cartes interactives dynamiques avec Leaflet.js, OpenLayers.",
        "Dashboards & DataViz : Conception de tableaux de bord interactifs pour l'aide à la décision (ArcGIS Dashboards, Streamlit).",
        "Web GIS : Maîtrise de la diffusion de flux de données standards (WMS, WFS, WMTS) et architecture de plateformes géographiques web."
      ]
    },
    {
      numberTitle: "4. Urbanisme, Aménagement & Ingénierie :",
      bullets: [
        "Planification Territoriale : Suivi technique et analyse des documents d'urbanisme (SDAU, PA, PDAR, SRAT, SNAT).",
        "Études Thématiques : Réalisation d'études statistiques et cartographiques (Habitat, population, foncier, scolaire) et analyses de risques.",
        "Expertise Métier : Maîtrise des techniques de levés topographiques, de photogrammétrie."
      ]
    },
    {
      numberTitle: "5. Data Science & Statistiques :",
      bullets: [
        "Analyse Quantitative : Traitement et analyse de données d'enquêtes complexes via STATA, SPSS, et Sphinx.",
        "Modélisation : Validation d'hypothèses statistiques et réalisation de livrables d'aide à la décision.",
        "Bureautique : Maîtrise experte de la suite Office, particulièrement Excel (VBA/Power Query)."
      ]
    },
    {
      numberTitle: "6. Design, Infographie & Communication Visuelle :",
      bullets: [
        "Design Graphique : Conception de supports professionnels (Affiches, Flyers, Dépliants, Cartes de visite) avec Adobe Illustrator, Photoshop et Canvas.",
        "Production Vidéo : Montage et motion design pour la vulgarisation de données spatiales (After Effects, Camtasia Studio, Magix Video Pro)."
      ]
    }
  ],

  experiences: [
    {
      id: "exp-1",
      date: "Juillet 2025 - Février 2026",
      title: "Géomaticien / Cartographe (Études topographiques et Fiscalité Locale - TNB)",
      company: "Ste Briconninja & Engineering and Business Leaders",
      bullets: [
        "Actualisation et gestion des bases de données géographiques relatives à la Taxe sur les Terrains Non Bâtis (TNB), incluant le calcul des superficies et l'identification des zones non bâties.",
        "Découpage technique par zones à tarification fiscale différenciée pour plusieurs collectivités territoriales (ex: Lalla Mimouna, Sidi Taibi, Al Hoceima, etc.).",
        "Mise à jour des limites administratives et territoriales des communes en conformité avec les documents d'urbanisme et les plans d'aménagement en vigueur (ex: Mokrissat, El Beddouza, Oued Laou, Lakhssas, etc.).",
        "Conception et déploiement de cartes thématiques et de plateformes Web-SIG interactives destinées aux collectivités territoriales pour l'optimisation de la gestion spatiale et foncière."
      ]
    },
    {
      id: "exp-2",
      date: "Mai 2025 - Juin 2025",
      title: "Chargé de mission SIG / Enquêteur",
      company: "AGRI INVEST DÉVELOPPEMENT",
      bullets: [
        "Réalisation des enquêtes et collecte des données sur le terrain dans toute la région de l'Oriental.",
        "Structuration des données de la filière laitière (éleveurs, centres de collecte et coopératives) au profit de la Direction Régionale de l’Agriculture (DRA).",
        "Modélisation spatiale de la chaîne de valeur du lait (de l'amont à l'aval) pour optimiser l'analyse territoriale.",
        "Transformation des bases de données en plateformes Web-SIG interactives et tableaux de bord géographiques pour l'aide à la décision."
      ]
    },
    {
      id: "exp-3",
      date: "Juillet 2024 - Août 2024",
      title: "Coordinateur de Terrain & Contrôleur SIG / Données Socio-Démographiques",
      company: "Global for Survey and Consulting (GSC) - Réf: N°01/CIO/2024",
      bullets: [
        "Supervision et Management de Terrain : Encadrement, coordination et suivi des équipes d'enquêteurs sur le terrain pour garantir la fiabilité des données collectées.",
        "Contrôle Qualité et Apurement des Données : Vérification rigoureuse, validation et apurement des questionnaires socio-démographiques complexes (enquêtes panels de ménages) pour le compte de l’Observatoire National de Développement Humain (ONDH).",
        "Traitement et Analyse Statistique : Traitement statistique des données quantitatives en lien direct avec l'inclusion socio-économique, le développement humain et le genre.",
        "Reporting et Restitution : Élaboration des rapports de synthèse et des indicateurs de performance pour évaluer la qualité de la collecte avant validation finale."
      ]
    },
    {
      id: "exp-4",
      date: "Déc. 2023 – Mai 2024",
      title: "Expert / Opérateur SIG - Cartographie Statistique",
      company: "Haut-Commissariat au Plan du Maroc (HCP) - Réf: N°01/2023/DRRSK/RGPH",
      bullets: [
        "Mise à jour avancée des repères géographiques et découpage sectoriel automatisé (Districts de recensement) via QGIS pour le RGPH 2024 (milieux urbain et rural).",
        "Contrôle de la qualité spatiale, vérification et correction rigoureuse de la topologie pour garantir la fiabilité des entités géographiques.",
        "Préparation, structuration et analyse des bases de données spatiales relatives à la population générale et aux établissements économiques.",
        "Élaboration de supports cartographiques et thématiques pour affiner l'analyse des indicateurs territoriaux (notamment le genre et la vulnérabilité)."
      ]
    },
    {
      id: "exp-5",
      date: "Mars 2023 - Déc. 2023",
      title: "Chargé de mission Contrôleur Cartographe",
      company: "Haut-Commissariat au Plan (HCP) - Réf: N°01/2023/DRRSK/RGPH",
      bullets: [
        "Coordination efficace avec les agents d’autorité et les équipes sur le terrain pour assurer une collecte précise et géoréférencée des données cartographiques préparatoires du RGPH 2024."
      ]
    },
    {
      id: "exp-6",
      date: "Août 2022 - Mars 2023",
      title: "Enquêteur de terrain",
      company: "PCM Consulting",
      bullets: [
        "Collecte des données de l'Enquête Nationale pour l'établissement d'une situation de référence des effets des politiques publiques sur l'inclusion sociale et économique de la petite agriculture (PAF2022)."
      ]
    },
    {
      id: "exp-7",
      date: "Juin 2021 - Août 2022",
      title: "Enquêteur de terrain",
      company: "MAROC INGENOV",
      bullets: [
        "Inventaire des points d'eau et de leurs usages en milieu urbain, auprès des propriétaires des établissements à caractère commercial (Pour le compte de l'ABHBC)."
      ]
    },
    {
      id: "exp-8",
      date: "Nov. 2019 – Mars 2020",
      title: "Stagiaire Bibliothécaire & Gestionnaire d'Événements",
      company: "Faculté des Sciences Appliquées Ait Melloul",
      bullets: [
        "Classement, archivage numérique, et organisation/animation d’événements scientifiques (conférences, workshops, congrès)."
      ]
    }
  ],

  education: [
    {
      id: "edu-1",
      date: "2017 - 2019",
      title: "Master Spécialisé en SIG, Télédétection et Cartographie Appliquée à l’Aménagement du Territoire",
      institution: "Université Hassan II Casablanca, Maroc",
      bullets: [
        "Théorie et pratique des SIG - Cartographie - Aménagement et collectivités locales - Base de données - Télédétection - GPS - Réalisation de projets."
      ]
    },
    {
      id: "edu-2",
      date: "2014 - 2017",
      title: "Licence Fondamentale en Géographie",
      institution: "Université Ibn Zohr d'Agadir, Maroc",
      bullets: [
        "Acquisition de connaissances et compétences en géographie, urbanisme et cartographie - Utilisation de divers outils théoriques et pratiques : statistiques, Système d’information géographique, démographie, aménagement territoriale, travaux pratiques."
      ]
    },
    {
      id: "edu-3",
      date: "2014 - 2016",
      title: "Diplôme d’Études Universitaires Générales (DEUG) en Géographie",
      institution: "Université Ibn Zohr d'Agadir, Maroc",
      bullets: [
        "Acquisition des bases fondamentales en géographie humaine, géographie physique, cartographie de base et techniques d'analyse spatiale."
      ]
    },
    {
      id: "edu-4",
      date: "2013 - 2014",
      title: "Baccalauréat en Lettres et Sciences Humaines",
      institution: "Lycée Sidi Moussa Lhamri, Taroudant, Maroc"
    }
  ],

  workshops: [
    {
      id: "ws-1",
      date: "Du 22/10/2025 au 29/10/2025",
      title: "Animation d’une formation spécialisée en Systèmes d’Information Géographique (SIG)",
      institution: "AFRICAN TALENT SKILL & LADES (Mohammedia, Maroc)",
      bullets: [
        "Intitulée : « SIG : Techniques d’Acquisition et de Traitement des Données »."
      ]
    },
    {
      id: "ws-2",
      date: "Déc. 2024 à Fév. 2025",
      title: "Professeur vacataire",
      institution: "Faculté des Sciences Humaines et Sociales Kénitra",
      bullets: [
        "Au sein du Master « Géo IA et Gestion des Risques Naturels ». Conception et animation de séances théoriques et pratiques liées aux SIG."
      ]
    }
  ],

  webSigProjects: [
    {
      id: "proj-1",
      tag: "Topoma SIG",
      title: "Plateforme Cloud d'Extraction de Données Géographiques",
      accessLabel: "topoma.vercel.app",
      url: "https://topoma.vercel.app",
      bullets: [
        "Plateforme Web-SIG professionnelle dédiée à la préparation et au téléchargement de fonds de cartes géo-référencés.",
        "Permet l'extraction multi-formats (GeoTIFF, SHP, KML, DXF, GeoJSON) pour optimiser le travail des topographes et géomaticiens.",
        "Intégration de données GPS (import Excel X, Y) facilitant le traitement rapide sur le terrain."
      ]
    },
    {
      id: "proj-2",
      tag: "Système TNB-GIS",
      title: "Gestion Numérique & Fiscale (Commune d'Oulad Sghir)",
      accessLabel: "geotoposig.com",
      url: "https://geotoposig.com",
      bullets: [
        "Solution géospatiale basée sur une architecture PostGIS/PostgreSQL et Leaflet.js, conçue pour la digitalisation de la Taxe sur les Terrains Non Bâtis (TNB).",
        "Identification automatisée des terrains non bâtis et calcul précis des redevances fiscales.",
        "Mise en place de tableaux de bord interactifs dédiés à l'aide à la décision pour les collectivités territoriales."
      ]
    }
  ]
};
