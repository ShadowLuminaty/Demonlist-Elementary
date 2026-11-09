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
//  - bestRuns : meilleurs runs des autres joueurs, triés automatiquement par %
// ============================================================
const UPCOMING = [
  {
    name: "Acu",
    creator: "neigefeu",
    verifier: "ShadowLuminaty",
    id: "61079355",
    video: "",
    status: "En vérification",
    progress: "29%, 68-100%",
    bestRuns: [

    ]
  }
];
