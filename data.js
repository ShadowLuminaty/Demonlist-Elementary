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
    name: "Lost Love",
    creator: "TheBlackHell",
    verifier: "Xxsvn",
    id: "85933508",
    video: "https://youtu.be/LDjPvTSE638",
    minPercent: 72,
    records: [
    ]
  },
  {
    name: "Acu",
    creator: "neigefeu",
    verifier: "ShadowLuminaty",
    id: "61079355",
    video: "https://youtu.be/l8gNDidE6Mc",
    minPercent: 62,
    records: [
      { player: "Xxsvn", percent: 97, video: "", date: "" }
    ]
  },
    {
    name: "Nilscapes",
    creator: "L413",
    verifier: "ShadowLuminaty",
    id: "126213470",
    video: "https://youtu.be/GQWyOCZKtmY",
    minPercent: 63,
    records: [
    ]
  },
  {
    name: "2005landshark",
    creator: "landosharku",
    verifier: "Xxsvn",
    id: "105281590",
    video: "https://youtu.be/6BVoOv5yqwI",
    minPercent: 62,
    records: [
    ]
  },
  {
    name: "fishbass",
    creator: "fishbass",
    verifier: "ShadowLuminaty",
    id: "86565813",
    video: "https://youtu.be/8fcUwSYHYuQ",
    minPercent: 68,
    records: [
      { player: "Xxsvn", percent: 73, video: "", date: "" }
    ]
  },
  {
    name: "Grief Processing",
    creator: "VerdinGD",
    verifier: "ShadowLuminaty",
    id: "149583267",
    video: "https://youtu.be/Hqd7jR7P59o",
    minPercent: 66,
    records: [
    ]
  },  
  {
    name: "Poltergeist",
    creator: "Andromeda GMD",
    verifier: "ShadowLuminaty",
    id: "7054561",
    video: "https://youtu.be/loT9SdM_zuc",
    minPercent: 65,
    records: [
    ]
  }, 
  {
    name: "Fairydust",
    creator: "mkComic",
    verifier: "ShadowLuminaty",
    id: "84815242",
    video: "https://youtu.be/_tiucA8i1mY",
    minPercent: 66,
    records: [
    ]
  }, 
  {
    name: "U L T R A   W I D E",
    creator: "J27Blaze",
    verifier: "Xxsvn",
    id: "84815242",
    video: "https://youtu.be/3Zm4r-71fgw",
    minPercent: 52,
    records: [
      { player: "ShadowLuminaty", video: "", date: "" }
    ]
  },
  {
    name: "Azure",
    creator: "eEddy",
    verifier: "ShadowLuminaty",
    id: "123141568",
    video: "  https://youtu.be/2WHDW-i9thQ",
    minPercent: 63,
    records: [
    ]
  },
  {
    name: "Crazy",
    creator: "DavJT",
    verifier: "ShadowLuminaty",
    id: "40945673",
    video: "https://www.youtube.com/watch?v=Kk1OtWcCLsA",
    minPercent: 65,
    records: [
      { player: "Xxsvn", video: "", date: "2026-11-09" }
    ]
  },
  {
    name: "Nine Circles",
    creator: "Zobros",
    verifier: "ShadowLuminaty",
    id: "4284013",
    video: "https://youtu.be/J21j9ZfAHCI",
    minPercent: 72,
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
    minPercent: 69,
    records: [
      { player: "DraNoX", video: "", date: "2026-11-08" },
      { player: "Xxsvn", video: "", date: "2026-11-09" }
    ] 
  },
  {
    name: "Mechanical RootS",
    creator: "stanstanmansan",
    verifier: "ShadowLuminaty",
    id: "85143676",
    video: "https://youtu.be/Ggahg0ZgPbQ",
    minPercent: 70,
    records: [
      { player: "Xxsvn", video: "", date: "2026-11-28" },
    ] 
  },
  {
    name: "Gy",
    creator: "An Gyung",
    verifier: "Xxsvn",
    id: "76158198",
    video: "https://youtu.be/i9QJPDfGCys",
    minPercent: 74,
    records: [
    ]
  },
  {
    name: "Scarlet Smog",
    creator: "ToastLord",
    verifier: "DraNoX",
    id: "67113181",
    video: "https://www.youtube.com/watch?v=CpTjj2gVEbY",
    minPercent: 68,
    records: [
      { player: "Xxsvn", video: "", date: "2026-11-10" },
    ] 
  },
  {
    name: "Verity",
    creator: "Serponge",
    verifier: "Xxsvn",
    id: "18834999",
    video: "https://youtu.be/-r9mGV7nGDQ",
    minPercent: 73,
    records: [
    ]
  },
  {
    name: "Brainpower",
    creator: "BrainETR",
    verifier: "Xxsvn",
    id: "79238456",
    video: "https://youtu.be/zjdg0GbU8K4",
    minPercent: 69,
    records: [
    ]
  },
  {
    name: "Sakupen Egg",
    creator: "Sivlol",
    verifier: "DraNoX",
    id: "58002670",
    video: "https://youtu.be/RhMVHFjzPbk",
    minPercent: 66,
    records: [
      { player: "ShadowLuminaty", video: "", date: "2026-11-12" },
      { player: "Xxsvn", video: "https://youtu.be/JKr37EAAZ98", date: "2026-11-15" },
    ]
  },
  {
    name: "System32",
    creator: "oleki",
    verifier: "Xxsvn",
    id: "76280532",
    minPercent: 65,
    video: "https://youtu.be/qDAl3UY2ZIg",
    records: [
      { player: "ShadowLuminaty", video: "", date: "2026-11-26" }
    ]
  },
  {
    name: "Red Dart",
    creator: "4chairs",
    verifier: "Xxsvn",
    id: "77614559",
    video: "https://www.youtube.com/watch?v=xblP95vz03s",
    minPercent: 65,
    records: [
      { player: "ShadowLuminaty", video: "", date: "2026-11-12" },
    ] 
  },
  {
    name: "B",
    creator: "motleyorc",
    verifier: "Ayolos73",
    id: "34085027",
    video: "https://youtu.be/G02VM9Po50I",
    minPercent: 72,
    records: [
     { player: "Xxsvn", video: "", date: "2026-11-25" },
     { player: "ShadowLuminaty", video: "", date: "2026-11-25" },
     { player: "DraNoX", video: "", date: "2026-11-25" },
    ]
  }, 
  {
    name: "Taimiri",
    creator: "Jayuff",
    verifier: "Xxsvn",
    id: "35305816",
    minPercent: 66,
    video: "https://www.youtube.com/watch?v=PQ2YxfaZDrc",
    records: [
      { player: "DraNoX", video: "", date: "2026-11-26" },
    ]
  },
  {
    name: "Neuf Cercles",
    creator: "Gesponi4",
    verifier: "Xxsvn",
    id: "110959028",
    video: "https://youtu.be/2xd-NymjUz8",
    minPercent: 57,
    records: [
      { player: "ShadowLuminaty", video: "", date: "2026-11-15" },
    ]
  },
  {
    name: "Azure Apex",
    creator: "Lebi06",
    verifier: "Xxsvn",
    id: "87655831",
    video: "https://youtu.be/JquC-mqugOY",
    minPercent: 66,
    records: [
    ]
  },
  {
    name: "Skeletal Shenanigans",
    creator: "YoReid",
    verifier: "Ayolos73",
    id: "118509879",
    video: "https://youtu.be/N5kJR-Y9IZk",
    minPercent: 71,
    records: [
      { player: "Xxsvn", video: "", date: "2026-11-15" },
      { player: "ShadowLuminaty", video: "", date: "2026-11-15" },
    ]
  },
  {
    name: "Netrunner",
    creator: "Optation",
    verifier: "Xxsvn",
    id: "102566420",
    video: "https://youtu.be/4HFJ4CHoQpk",
    minPercent: 67,
    records: [
    ]
  },
  {
    name: "Kingdom",
    creator: "Cyanboi",
    verifier: "DraNoX",
    id: "127838029",
    video: "https://youtu.be/NVN-KDZ9kJI",
    minPercent: 64,
    records: [
      { player: "Xxsvn", video: "", date: "2026-11-27" },
    ]
  },
  {
    name: "Kickback",
    creator: "Wolvyy",
    verifier: "Xxsvn",
    id: "145755012",
    video: "https://youtu.be/QcirYYbDYMo",
    minPercent: 70,
    records: [
    ]
  },
  {
    name: "Netrunner",
    creator: "ivyteal",
    verifier: "Xxsvn",
    id: "76853359",
    video: "https://youtu.be/L8HSiG2qysI",
    minPercent: 65,
    records: [
    ]
  },
  {
    name: "Luminox Core",
    creator: "Cerez",
    verifier: "Xxsvn",
    id: "147199745",
    video: "https://youtu.be/pSL7kwao2p0",
    minPercent: 72,
    records: [
      { player: "ShadowLuminaty", video: "", date: "2026-11-27" },
    ]
  },
  {
    name: "Oxidize",
    creator: "The Goola",
    verifier: "Xxsvn",
    id: "96978035",
    video: "https://youtu.be/TtBadoZdhOQ",
    minPercent: 67,
    records: [
      { player: "ShadowLuminaty", video: "", date: "2026-11-27" },
    ]
  },
  {
    name: "White Space",
    creator: "Xender Game",
    verifier: "Xxsvn",
    id: "77292103",
    video: "https://youtu.be/DYzs09IQqpM",
    minPercent: 63,
    records: [
      { player: "ShadowLuminaty", video: "", date: "2026-11-12" },
      { player: "DraNoX", video: "https://youtu.be/T8jLjjnh3WU?si=bUd2mTkHBI5rhXe2", date: "2026-11-19" },
    ]
  },
  {
    name: "Nebula",
    creator: "SouneX",
    verifier: "Xxsvn",
    id: "151561213",
    video: "https://youtu.be/iYOEr5AiBV8",
    minPercent: 65,
    records: [
      { player: "ShadowLuminaty", video: "https://youtu.be/HnNOKLCFhBo", date: "2026-11-11" },
      { player: "DraNoX", video: "https://youtu.be/5gcVp7-eRGk", date: "2026-11-11" },
    ] 
  },
  {
    name: "Shiver",
    creator: "SpKale",
    verifier: "Ayolos73",
    id: "56210242",
    video: "https://youtu.be/pTWrZw1r0xY?si=rKWRUq0BF29dRNVs",
    minPercent: 56,
    records: [
      { player: "Xxsvn", video: "", date: "2026-11-16" },
      { player: "ShadowLuminaty", video: "", date: "2026-11-16" },
      { player: "DraNoX", video: "", date: "2026-11-19" },
    ]
  },
  {
    name: "Platinum Adventure",
    creator: "Jerry4",
    verifier: "Ayolos73",
    id: "5904109",
    video: "https://www.youtube.com/watch?v=_ptU9vDpyu0",
    minPercent: 59,
    records: [
      { player: "ShadowLuminaty", date: "2026-11-15" },
      { player: "Xxsvn", video: "https://youtu.be/diulw1_0nPY", date: "2026-11-15" },
      { player: "DraNoX", date: "2026-11-18" },
    ] 
  },
  {
    name: "The Nightmare",
    creator: "Jax",
    verifier: "Ayolos73",
    id: "13519",
    video: "https://youtu.be/mbam7PekNVA",
    minPercent: 72,
    records: [
      { player: "Xxsvn", video: "", date: "2026-11-17" },
      { player: "ShadowLuminaty", video: "", date: "2026-11-17" },
      { player: "DraNoX", date: "2026-11-18" },
    ]
  },
  {
    name: "THE LIGHTNING ROAD",
    creator: "Timeless Real",
    verifier: "Ayolos73",
    id: "55520",
    video: "https://youtu.be/YmvQBgRmkfU",
    minPercent: 75,
    records: [
      { player: "Xxsvn", video: "", date: "2026-11-20" },
      { player: "ShadowLuminaty", video: "", date: "2026-11-20" },
      { player: "DraNoX", date: "2026-11-26" },
    ]
  },  
];

// ============================================================
//  VÉRIFICATIONS (niveaux en cours de vérification)
//  Cette liste n’influence pas le classement ni les points.
//  - status   : texte affiché (ex. "En vérification", "Bientôt sur la liste")
//  - progress : meilleur % du vérificateur (optionnel, tu peux supprimer la ligne)
//  - image    : image du niveau (nom du fichier dans le dépôt, ex. "acu.png", ou lien https)
//  - video    : lien YouTube de la vidéo de démonstration du niveau (laisse "" s’il n’y en a pas)
// ============================================================
const UPCOMING = [
    {
    name: "ReVolution Unleashed",
    creator: "WayAway04",
    verifier: "Xxsvn",
    id: "109540067",
    image: "https://cdn.discordapp.com/attachments/1569437323416961145/1569468057628180681/Geometry_Dash_Screenshot_2026.11.09_-_22.45.24.47.png?ex=6af39088&is=6af23f08&hm=b8d608eb9a96d03e673b764e58ac3893272a86ac8e97a520fc8e488a317d80fa&",
    video: "https://www.youtube.com/watch?v=nytoQIh1HXk",
    status: "En vérification",
    progress: "69%, 32-100",
  },
  {
    name: "KISMET",
    creator: "ciibule",
    verifier: "Xxsvn",
    id: "144423287",
    image: "https://cdn.discordapp.com/attachments/1569437323416961145/1569467030594125905/Geometry_Dash_Screenshot_2026.11.09_-_22.41.20.58.png?ex=6af38f93&is=6af23e13&hm=5b4812fc5180d4f0b48d50256f124dd5961eb0dd28c8dd7792762056adc55e8e&",
    video: "https://www.youtube.com/watch?v=sLf9Vc02i9k",
    status: "En vérification",
    progress: "50%, 50-100",
  },
  {
    name: "Take my Hand",
    creator: "LewinGD",
    verifier: "Ayolos73",
    id: "146273838",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQteAJITATpxQppUEPwXWhGxMWTq0x_JpFlk1-W12K5oA&s=10",
    video: "https://www.youtube.com/watch?v=h_8U2W0pAJs",
    status: "En vérification",
    progress: "52"
  },
  {
    name: "MikuMikuMikuMiku",
    creator: "OddMod",
    verifier: "ShadowLuminaty",
    id: "82824219",
    image: "https://i.ytimg.com/vi/VQOJ_SZ0Nto/maxresdefault.jpg",
    video: "https://www.youtube.com/watch?v=VQOJ_SZ0Nto",
    status: "En vérification",
    progress: "53, 51-100"
  }, 
  {
    name: "Mariana",
    creator: "bv57",
    verifier: "ShadowLuminaty",
    id: "144448963",
    image: "https://i.ytimg.com/vi/YYJkU_rd6yQ/maxresdefault.jpg",
    video: "https://www.youtube.com/watch?v=ol-8e55kESM",
    status: "En vérification",
    progress: "12, 29-44, 75-100"
  }, 
];

const CHANGELOG = [
  // { date: "2026-11-21", level: "Nom du niveau", to: 1 },             // ajouté à la place n°1
  // { date: "2026-11-21", level: "Nom du niveau", from: 12, to: 2 },   // monté (ou descendu si "to" est plus grand)
  // { date: "2026-11-21", level: "Nom du niveau", from: 5 },           // retiré de la liste
  { date: "2026-11-28", level: "Mechanical RootS", to:  14, above: "Gy", below: "white women" },  
  { date: "2026-11-27", level: "Kingdom", to:  27, above: "Kickback", below: "Netrunner" },
  { date: "2026-11-27", level: "Kickback", to:  27, above: "Netrunner", below: "Netrunner" },
  { date: "2026-11-26", level: "Luminox Core", to:  28, above: "Oxidize", below: "Netrunner" },
  { date: "2026-11-25", level: "Oxidize", to:  28, above: "White Space", below: "Netrunner" },
  { date: "2026-11-25", level: "B", to:  21},  
  { date: "2026-11-25", level: "Netrunner", to: 26, above: "White Space", below: "Netrunner" },
  { date: "2026-11-24", level: "Netrunner", to: 25 },
  { date: "2026-11-23", level: "fishbass", to: 5 },
  { date: "2026-11-22", level: "Fairydust", to: 7 },
  { date: "2026-11-21", level: "Grief Processing", to: 5 },
  { date: "2026-11-21", level: "Skeletal Shenanigans", from: 19, to: 21 },
];
