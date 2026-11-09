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
    ]
  },
  {
    name: "white women",
    creator: "Heatheryahes",
    verifier: "ShadowLuminaty",
    id: "63075323",
    video: "https://www.youtube.com/watch?v=bHJs0t2WH2U",
    records: [
    ]
  }
];
