import portfolioImage from '../assets/portfolio.png';
import mrsImage from '../assets/mrs.png';
import bombermanImage from '../assets/bomberman.png';
import loldleImage from '../assets/loldle.png';
import ncloudImage from '../assets/ncloud.png';
import pianoImage from '../assets/piano.png';
import timerImage from '../assets/minuteur.png';
import puissance4Image from '../assets/puissance4-gameplay.png';

const projectsData = [
    {
        id: 1,
        Title: "Portfolio Website",
        Description: "Un site portfolio personnel pour présenter mes projets et compétences en développement web front-end et back-end. Construit avec React, Tailwind et Flowbite React pour une expérience moderne et responsive.",
        Img: portfolioImage,
        Link: "https://noaperu.fr/",
        Github: "https://github.com/nezzeur/portfolio_noa",
        Features: [
            "Page d'accueil avec animation Lottie et typing effect.",
            "Sections About, Portfolio et Contact intégrées.",
            "Affichage des projets avec cartes interactives et détails dynamiques.",
            "Technologies affichées dynamiquement et filtrables.",
            "Responsive sur mobile, tablette et desktop."
        ],
        TechStack: ["React", "Tailwind", "Flowbite React", "JavaScript"]
    },
    {
        id: 2,
        Title: "MRS - Menu Resto Semaine",
        Description: "Un site web pour afficher le menu hebdomadaire d’un petit restaurant. Construit avec Hugo, il permet de mettre à jour facilement les menus par semaine et offre une navigation simple et claire pour les clients.",
        Img: mrsImage,
        Link: "https://mrss-33d14.web.app/",
        Github: "https://github.com/nezzeur/Site_Restaurant", // si disponible
        Features: [
            "Affichage du menu par semaine pour le restaurant.",
            "Navigation simple et rapide entre les différentes sections.",
            "Optimisé pour mobile et desktop.",
            "Facilement modifiable grâce au générateur statique Hugo.",
            "Mise à jour du menu simple et rapide via fichiers Markdown."
        ],
        TechStack: ["Hugo", "HTML", "CSS", "JavaScript"]
    },
    {
        id: 3,
        Title: "Bomberman - Jeu Java/JavaFX",
        Description: "Un jeu Bomberman développé en Java avec JavaFX sous architecture MVC. Permet de gérer les personnages, les explosions et la logique du jeu séparément du rendu graphique.",
        Img: bombermanImage,
        Github: "https://github.com/nezzeur/Bomberman", // si disponible
        Features: [
            "Jeu inspiré de Bomberman avec grille de jeu dynamique.",
            "Personnages et ennemis contrôlés via clavier.",
            "Explosion et obstacles interactifs.",
            "Architecture MVC pour séparer modèle, vue et contrôleur.",
            "Facilement extensible pour ajouter de nouvelles fonctionnalités."
        ],
        TechStack: ["Java", "JavaFX", "MVC", "OOP"]
    },
    {
        id: 4,
        Title: 'Loldle - Jeu en ligne',
        Description: 'Un jeu de type Wordle où le joueur doit deviner des mots liés à l’univers de League of Legends.',
        Img: loldleImage,
        Link: 'https://loldle.noaperu.fr/',
        Github: 'https://github.com/nezzeur/Loldle-online',
        Features: [
            'Jeu de devinettes interactif inspiré de Wordle',
            'Interface simple et intuitive',
            'Réalisé entièrement en HTML, CSS et JavaScript',
            'Système de score et suivi des tentatives',
            'Design responsive et animations légères pour l’expérience utilisateur'
        ],
        TechStack: ['HTML', 'CSS', 'JavaScript']
    },
    {
        id: 5,
        Title: "Piano en ligne",
        Description: "Un piano interactif développé en JavaScript permettant de jouer des notes au clavier ou à la souris.",
        Img: pianoImage,
        Link: "https://nezzeur.github.io/Piano/",
        Github: "https://github.com/nezzeur/Piano",
        Features: [
            "Clavier interactif jouable avec la souris ou le clavier de l’ordinateur",
            "Affichage des touches et sons correspondants",
            "Design responsive et simple à utiliser",
            "Animations légères pour le rendu des notes",
            "Possibilité d’ajouter facilement de nouvelles notes ou sons"
        ],
        TechStack: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 6,
        Title: "NCloud - Cloud Personnel",
        Description: "Une plateforme cloud personnelle permettant de stocker et gérer vos fichiers en ligne. Conçue avec HTML, CSS et JavaScript, elle est hébergée sur Google Cloud Platform (GCP) pour une disponibilité et fiabilité optimales.",
        Img: ncloudImage,
        Link: "https://cloud.noaperu.fr/",
        Github: "https://github.com/nezzeur/NCloud", // si dispo
        Features: [
            "Stockage et gestion de fichiers en ligne",
            "Interface intuitive pour upload, téléchargement et organisation",
            "Compte test disponible : test@test.com / test62",
            "Hébergement et gestion via Google Cloud Platform (GCP)",
            "Responsive sur mobile et desktop"
        ],
        TechStack: ["HTML", "CSS", "JavaScript", "GCP"]
    },
    {
        id: 7,
        Title: "Minuteur en ligne",
        Description: "Un minuteur développé en JavaScript permettant de régler des compteurs et alertes visuelles et sonores.",
        Img: timerImage,
        Github: "https://github.com/nezzeur/Minuteur",
        Features: [
            "Réglage du temps facilement via interface utilisateur",
            "Alertes sonores et visuelles à la fin du compte à rebours",
            "Design simple et responsive",
            "Compatible sur mobile et desktop",
            "Possibilité de sauvegarder des minuteries personnalisées"
        ],
        TechStack: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 8,
        Title: "Puissance 4 - Jeu Java/JavaFX",
        Description: "Un jeu Puissance 4 développé en Java avec JavaFX sous architecture MVC. Permet à deux joueurs de s’affronter en ligne avec une interface graphique fluide et interactive.",
        Img: puissance4Image,
        Features: [
            "Jeu Puissance 4 pour deux joueurs",
            "Développé avec Java et JavaFX",
            "Architecture MVC pour séparer modèle, vue et contrôleur",
            "Interface graphique interactive et responsive",
            "Possibilité de jouer en ligne ou en local",
            "Animations et effets visuels pour une meilleure expérience utilisateur"
        ],
        TechStack: ["Java", "JavaFX", "MVC"]
    }


];
export default projectsData;
