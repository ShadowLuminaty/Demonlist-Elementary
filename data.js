// ============================================================
//  DONNÉES DE LA DEMONLIST — c’est le seul fichier à modifier
// ============================================================

const SITE = {
  title: "Demonlist de la communauté Elementary",
  subtitle: "Les démons les plus durs de notre serveur, classés du plus difficile au plus facile.",
  discord: "https://discord.gg/R8WQ6XUh5N", // lien d’invitation de ton Discord
  maxPoints: 350,  // points du niveau n°1
  decay: 0.945     // plus c’est bas, plus les points chutent vite avec le rang
};

// L’ORDRE DE CETTE LISTE = LE CLASSEMENT (le 1er niveau est le n°1).
// Pour déplacer un niveau, déplace simplement son bloc { ... } vers le haut ou le bas.
// - verifier : la personne qui a vérifié le niveau (elle gagne les points du niveau)
// - video    : lien YouTube (laisse "" s’il n’y en a pas)
// - records  : les autres joueurs qui ont battu le niveau, avec leur preuve vidéo
const LEVELS = [
  {
    name: "Crazy",
    creator: "DavJT",
    verifier: "ShadowLuminaty",
    id: "40945673",
    video: "https://www.youtube.com/watch?v=Kk1OtWcCLsA",
    records: [
      { player: "Xxsvn", video: "", date: "2026-11-09" }
    ]
  },
  {
    name: "white women",
    creator: "Heatheryahes",
    verifier: "ShadowLuminaty",
    id: "63075323",
    video: "https://www.youtube.com/watch?v=bHJs0t2WH2U",
    records: [
      { player: "DraNoX", video: "", date: "2026-11-08" },
      { player: "Xxsvn", video: "", date: "2026-11-09" }
    ] 
  }
];

// ============================================================
//  NIVEAUX À VENIR (en cours de vérification)
//  Cette liste n’influence pas le classement ni les points.
//  - status   : texte affiché (ex. "En vérification", "Bientôt sur la liste")
//  - progress : meilleur % du vérificateur (optionnel, tu peux supprimer la ligne)
//  - image    : image du niveau (nom du fichier dans le dépôt, ex. "acu.png", ou lien https)
//  - video    : lien YouTube de la vidéo de démonstration du niveau (laisse "" s’il n’y en a pas)
// ============================================================
const UPCOMING = [
  {
    name: "Acu",
    creator: "neigefeu",
    verifier: "ShadowLuminaty",
    id: "61079355",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpoOJQ1uzDRbZH4UcM7QsXWZQJvKZb8rJ3eY87JyLEuQ&s=10",   // nom du fichier image (ex. "acu.png") ou lien https ; "" = vignette de couleur
    video: "https://www.youtube.com/watch?v=aGHGYClmtJw",
    status: "En vérification",
    progress: "66, 63-100"
  },
    {
    name: "ReVolution Unleashed",
    creator: "WayAway04",
    verifier: "Xxsvn",
    id: "109540067",
    image: "https://cdn.discordapp.com/attachments/1569437323416961145/1569468057628180681/Geometry_Dash_Screenshot_2026.11.09_-_22.45.24.47.png?ex=6af39088&is=6af23f08&hm=b8d608eb9a96d03e673b764e58ac3893272a86ac8e97a520fc8e488a317d80fa&",
    video: "https://www.youtube.com/watch?v=nytoQIh1HXk",
    status: "En vérification",
    progress: "69, 32-100",
  },
  {
    name: "KISMET",
    creator: "ciibule",
    verifier: "Xxsvn",
    id: "144423287",
    image: "https://cdn.discordapp.com/attachments/1569437323416961145/1569467030594125905/Geometry_Dash_Screenshot_2026.11.09_-_22.41.20.58.png?ex=6af38f93&is=6af23e13&hm=5b4812fc5180d4f0b48d50256f124dd5961eb0dd28c8dd7792762056adc55e8e&",
    video: "https://www.youtube.com/watch?v=sLf9Vc02i9k",
    status: "En vérification",
    progress: "48, 50-100",
  },
  {
    name: "Skeletal Shenanigans",
    creator: "YoReid",
    verifier: "Ayolos73",
    id: "118509879",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXQ_D0s_8OJC8KpOiTuGfyhEpgUTkRX602goqGXIuAjw&s",
    video: "https://www.youtube.com/watch?v=mgzTHUKATqo",
    status: "En vérification",
    progress: "28",
  }
];
