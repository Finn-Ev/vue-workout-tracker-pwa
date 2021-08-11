export default [
  // {
  //   plan: "planche",
  //   id: "PLANCHE1",
  //   name: "Planche Einheit 1",
  //   exercises: [
  //     {
  //       name: "Planche Push-Ups",
  //       sets: 4,
  //       reps: 10,
  //       pause: "3",
  //       isBodyweight: true
  //     },
  //     {
  //       name: "Planche Hold",
  //       sets: 4,
  //       reps: 15,
  //       pause: "2",
  //       isBodyweight: true
  //     },
  //     {
  //       name: "Dips",
  //       sets: 4,
  //       reps: 12,
  //       pause: "2",
  //       isBodyweight: true
  //     },
  //     {
  //       name: "Planche Lean",
  //       sets: 3,
  //       reps: 15,
  //       pause: "2",
  //       isBodyweight: false
  //     }
  //   ]
  // },
  // {
  //   plan: "planche",
  //   id: "PLANCHE2",
  //   name: "Planche Einheit 2",
  //   exercises: [
  //     {
  //       name: "Planche Hold (mit Band)",
  //       sets: 4,
  //       reps: 15,
  //       pause: "3",
  //       isBodyweight: true
  //     },
  //     {
  //       name: "Planche Push-Ups (mit Band)",
  //       sets: 4,
  //       reps: 10,
  //       pause: "2",
  //       isBodyweight: true
  //     },
  //     {
  //       name: "SB-Dips",
  //       sets: 4,
  //       reps: 12,
  //       pause: "2",
  //       isBodyweight: true
  //     },
  //     {
  //       name: "Planche Lean",
  //       sets: 3,
  //       reps: 15,
  //       pause: "2",
  //       isBodyweight: false
  //     }
  //   ]
  // },
  // {
  //   plan: "front-lever",
  //   id: "FRONTLEVER1",
  //   name: "Front-Lever Einheit 1",
  //   exercises: [
  //     {
  //       name: "Front-Lever Raises",
  //       sets: 4,
  //       reps: 12,
  //       pause: "3",
  //       isBodyweight: true
  //     },
  //     {
  //       name: "Isometric Front-Lever Hold",
  //       sets: 4,
  //       reps: 30,
  //       pause: "2",
  //       isBodyweight: true
  //     },
  //     {
  //       name: "Klimmzüge",
  //       sets: 4,
  //       reps: 12,
  //       pause: "2",
  //       isBodyweight: true
  //     },
  //     {
  //       name: "Scapula Pull Ups",
  //       sets: 3,
  //       reps: 15,
  //       pause: "2",
  //       isBodyweight: true
  //     }
  //   ]
  // },
  // {
  //   plan: "front-lever",
  //   id: "FRONTLEVER2",
  //   name: "Front-Lever Einheit 2",
  //   exercises: [
  //     {
  //       name: "Isometric Front-Lever Hold",
  //       sets: 4,
  //       reps: 15,
  //       pause: "3",
  //       isBodyweight: true
  //     },
  //     {
  //       name: "Front-Lever Raises",
  //       sets: 4,
  //       reps: 10,
  //       pause: "2",
  //       isBodyweight: true
  //     },
  //     {
  //       name: "Chin Ups",
  //       sets: 4,
  //       reps: 12,
  //       pause: "2",
  //       isBodyweight: true
  //     },
  //     {
  //       name: "Body Rows",
  //       sets: 3,
  //       reps: 15,
  //       pause: "2",
  //       isBodyweight: true
  //     }
  //   ]
  // }
  {
    plan: "ppl",
    planName: "Push Pull Legs",
    id: "PPLA1",
    name: "Push Tag A (PPL)",
    exercises: [
      {
        name: "Bankdrücken",
        sets: 4,
        reps: "6",
        pause: "3",
        intervall: "2, 1, 1, 1",
        isBodyweight: false
      },
      {
        name: "Schrägbankdrücken KH",
        sets: 3,
        reps: "8",
        pause: "2",
        intervall: "2, 1, 1, 1",
        isBodyweight: false
      },
      {
        name: "Cable Flyes",
        sets: 3,
        reps: "12",
        pause: "1",
        intervall: "1, 1, 1, 1",
        isBodyweight: false
      },
      {
        name: "Überkopfdrücken",
        sets: 4,
        reps: "6",
        pause: "2",
        intervall: "2, 0, 1, 1",
        isBodyweight: false
      },
      {
        name: "Seitheben",
        sets: 3,
        reps: "12",
        pause: "1",
        intervall: "1, 0, 1, 1",
        isBodyweight: false
      },
      {
        name: "Frenchpress",
        sets: 3,
        reps: "10",
        pause: "1.5",
        intervall: "1, 1, 1, 0",
        isBodyweight: false
      },
      {
        name: "Trizpesdrücken einarmig",
        sets: 4,
        reps: "12",
        pause: "1",
        intervall: "2, 0, 1, 1",
        isBodyweight: false
      }
    ]
  },
  {
    plan: "ppl",
    planName: "Push Pull Legs",
    id: "PPLB1",
    name: "Pull Tag A (PPL)",
    exercises: [
      {
        name: "Pendlay Rows",
        sets: 4,
        reps: "6",
        pause: "2",
        intervall: "2, 0, 1, 1",
        isBodyweight: false
      },
      {
        name: "Klimmzug",
        sets: 3,
        reps: "6",
        pause: "2",
        intervall: "2, 1, 1, 1",
        isBodyweight: true
      },
      {
        name: "Kabelrudern eng",
        sets: 3,
        reps: "8",
        pause: "1.5",
        intervall: "2, 1, 1, 1",
        isBodyweight: false
      },
      {
        name: "Reverse Butterfly",
        sets: 3,
        reps: "12",
        pause: "1.5",
        intervall: "2, 0, 1, 0",
        isBodyweight: false
      },
      {
        name: "Preacher Curls",
        sets: 3,
        reps: "10",
        pause: "1.5",
        intervall: "2, 0, 1, 1",
        isBodyweight: false
      },
      {
        name: "Bizepscurls KH (eindrehend)",
        sets: 3,
        reps: "10",
        pause: "1",
        intervall: "1, 0, 1, 1",
        isBodyweight: false
      }
    ]
  },
  {
    plan: "ppl",
    planName: "Push Pull Legs",
    id: "PPLC1",
    name: "Legs Tag A (PPL)",
    exercises: [
      {
        name: "Kreuzheben",
        sets: 4,
        reps: "6",
        pause: "3",
        intervall: "2, 1, 1, 0",
        isBodyweight: false
      },
      {
        name: "Beinpresse",
        sets: 3,
        reps: "10",
        pause: "2",
        intervall: "2, 1, 1, 0",
        isBodyweight: false
      },
      {
        name: "Beinbeuger liegend",
        sets: 3,
        reps: "12",
        pause: "1.5",
        intervall: "2, 0, 1, 0",
        isBodyweight: false
      },
      {
        name: "Beinstrecker (splitted)",
        sets: 3,
        reps: "10",
        pause: "1",
        intervall: "1, 0, 1, 1",
        isBodyweight: false
      },
      {
        name: "Ausfallschritte",
        sets: 2,
        reps: "10",
        pause: "1.5",
        intervall: "1, 0, 1, 0",
        isBodyweight: false
      },
      {
        name: "Wadenheben (stehend)",
        sets: 3,
        reps: "6",
        pause: "2",
        intervall: "2, 1, 1, 1",
        isBodyweight: false
      }
    ]
  },
  {
    plan: "ppl",
    planName: "Push Pull Legs",
    id: "PPLA2",
    name: "Push Tag B (PPL)",
    exercises: [
      {
        name: "Schrägbankdrücken",
        sets: 4,
        reps: "6",
        pause: "3",
        intervall: "2, 1, 1, 1",
        isBodyweight: false
      },
      {
        name: "Brustpresse",
        sets: 3,
        reps: "10",
        pause: "2",
        intervall: "2, 1, 1, 1",
        isBodyweight: false
      },
      {
        name: "Butterfly",
        sets: 3,
        reps: "12",
        pause: "1",
        intervall: "1, 1, 1, 1",
        isBodyweight: false
      },
      {
        name: "Schulterdrücken KH",
        sets: 3,
        reps: "8",
        pause: "1.5",
        intervall: "2, 0, 1, 0",
        isBodyweight: false
      },
      {
        name: "Seitheben (Maschine)",
        sets: 4,
        reps: "10",
        pause: "1.5",
        intervall: "1, 0, 1, 1",
        isBodyweight: false
      },
      {
        name: "Trizeps Pushdowns (Seil)",
        sets: 3,
        reps: "10",
        pause: "1.5",
        intervall: "1, 0, 1, 1",
        isBodyweight: false
      },
      {
        name: "Überkopf Trizpesdrücken SZ ",
        sets: 4,
        reps: "12",
        pause: "1",
        intervall: "2, 0, 1, 1",
        isBodyweight: false
      }
    ]
  },
  {
    plan: "ppl",
    planName: "Push Pull Legs",
    id: "PPLB2",
    name: "Pull Tag B (PPL)",
    exercises: [
      {
        name: "Latzug",
        sets: 4,
        reps: "8",
        pause: "2",
        intervall: "2, 1, 1, 1",
        isBodyweight: false
      },
      {
        name: "T-Bar Rudern",
        sets: 3,
        reps: "8",
        pause: "2",
        intervall: "1, 0, 1, 1",
        isBodyweight: false
      },
      {
        name: "Überzüge",
        sets: 2,
        reps: "15",
        pause: "1.5",
        intervall: "2, 0, 1, 1",
        isBodyweight: false
      },
      {
        name: "Facepulls",
        sets: 4,
        reps: "12",
        pause: "1",
        intervall: "1, 0, 1, 0",
        isBodyweight: false
      },
      {
        name: "Hammer Curls",
        sets: 3,
        reps: "10",
        pause: "1.5",
        intervall: "1, 0, 1, 1",
        isBodyweight: false
      },
      {
        name: "Bizepscurls KH",
        sets: 4,
        reps: "12",
        pause: "1",
        intervall: "1, 0, 1, 1",
        isBodyweight: false
      }
    ]
  },
  {
    plan: "ppl",
    planName: "Push Pull Legs",
    id: "PPLC2",
    name: "Legs Tag B (PPL)",
    exercises: [
      {
        name: "Kniebeuge",
        sets: 4,
        reps: "6",
        pause: "3",
        intervall: "2, 1, 1, 1",
        isBodyweight: false
      },
      {
        name: "Beinpresse",
        sets: 3,
        reps: "8",
        pause: "2",
        intervall: "2, 1, 1, 0",
        isBodyweight: false
      },
      {
        name: "Rum. Kreuzheben",
        sets: 3,
        reps: "10",
        pause: "1.5",
        intervall: "2, 1, 1, 1",
        isBodyweight: false
      },
      {
        name: "Hyperextension (Maschine)",
        sets: 3,
        reps: "10",
        pause: "1",
        intervall: "1, 0, 1, 0",
        isBodyweight: false
      },
      {
        name: "Bulg. Split Squats",
        sets: 2,
        reps: "10",
        pause: "1.5",
        intervall: "1, 0, 1, 0",
        isBodyweight: false
      },
      {
        name: "Wadenheben (sitzend)",
        sets: 4,
        reps: "12",
        pause: "1.5",
        intervall: "1, 0, 1, 0",
        isBodyweight: false
      }
    ]
  },
  {
    plan: "okuk",
    planName: "Oberkörper / Unterkörper",
    id: "OKUKA1",
    name: "Oberkörper Tag A (OKUK)",
    exercises: [
      {
        name: "Bankdrücken",
        sets: 4,
        reps: "6",
        pause: "3",
        intervall: "2, 1, 1, 1",
        isBodyweight: false
      },
      {
        name: "Klimmzug ",
        sets: 4,
        reps: "6",
        pause: "3",
        intervall: "2, 1, 1, 1",
        isBodyweight: false
      },
      {
        name: "Schrägbankdrücken KH",
        sets: 4,
        reps: "8",
        pause: "2",
        intervall: "2, 1, 1, 1",
        isBodyweight: false
      },
      {
        name: "Kabelrudern breit",
        sets: 4,
        reps: "8",
        pause: "2",
        intervall: "1, 0, 1, 0",
        isBodyweight: false
      },
      {
        name: "Butterfly",
        sets: 3,
        reps: "12",
        pause: "1.5",
        intervall: "1, 1, 1, 1",
        isBodyweight: false
      },
      {
        name: "Facepulls",
        sets: 3,
        reps: "12",
        pause: "1.5",
        intervall: "1, 1, 1, 1",
        isBodyweight: false
      },
      {
        name: "Seitheben (Maschine)",
        sets: 4,
        reps: "12",
        pause: "1",
        intervall: "1, 0, 1, 0",
        isBodyweight: false
      }
    ]
  },
  {
    plan: "okuk",
    planName: "Oberkörper / Unterkörper",
    id: "OKUKB2",
    name: "Unterkörper Tag A (OKUK)",
    exercises: [
      {
        name: "Kniebeuge",
        sets: 4,
        reps: "6",
        pause: "3",
        intervall: "2, 1, 1, 1",
        isBodyweight: false
      },
      {
        name: "Beinpresse",
        sets: 3,
        reps: "8",
        pause: "2",
        intervall: "2, 1, 1, 0",
        isBodyweight: false
      },
      {
        name: "Rum. Kreuzheben",
        sets: 3,
        reps: "10",
        pause: "1.5",
        intervall: "2, 1, 1, 1",
        isBodyweight: false
      },
      {
        name: "Hyperextension (Maschine)",
        sets: 3,
        reps: "10",
        pause: "1",
        intervall: "1, 0, 1, 0",
        isBodyweight: false
      },
      {
        name: "Bulg. Split Squats",
        sets: 2,
        reps: "10",
        pause: "1.5",
        intervall: "1, 0, 1, 0",
        isBodyweight: false
      },
      {
        name: "Wadenheben (sitzend)",
        sets: 4,
        reps: "10",
        pause: "1.5",
        intervall: "1, 0, 1, 0",
        isBodyweight: false
      }
    ]
  },
  {
    plan: "okuk",
    planName: "Oberkörper / Unterkörper",
    id: "OKUKA2",
    name: "Oberkörper Tag B (OKUK)",
    exercises: [
      {
        name: "Schulterdrücken",
        sets: 4,
        reps: "6",
        pause: "3",
        intervall: "2, 1, 1, 1",
        isBodyweight: false
      },
      {
        name: "Kabelrudern eng ",
        sets: 4,
        reps: "6",
        pause: "3",
        intervall: "2, 1, 1, 1",
        isBodyweight: false
      },
      {
        name: "Brustpresse",
        sets: 4,
        reps: "10",
        pause: "2",
        intervall: "2, 1, 1, 1",
        isBodyweight: false
      },
      {
        name: "Latzug",
        sets: 4,
        reps: "8",
        pause: "2",
        intervall: "2, 1, 1, 1",
        isBodyweight: false
      },
      {
        name: "Trizepsdrücken",
        sets: 3,
        reps: "12",
        pause: "1.5",
        intervall: "2, 1, 1, 1",
        isBodyweight: false
      },
      {
        name: "Bizepscurls (eindrehend)",
        sets: 3,
        reps: "12",
        pause: "1.5",
        intervall: "2, 1, 1, 1",
        isBodyweight: false
      },
      {
        name: "Seitheben KH",
        sets: 3,
        reps: "8",
        pause: "1.5",
        intervall: "1, 0, 1, 1",
        isBodyweight: false
      }
    ]
  },
  {
    plan: "okuk",
    planName: "Oberkörper / Unterkörper",
    id: "OKUKC2",
    name: "Unterkörper Tag B (OKUK)",
    exercises: [
      {
        name: "Kreuzheben",
        sets: 4,
        reps: "6",
        pause: "3",
        intervall: "2, 1, 1, 0",
        isBodyweight: false
      },
      {
        name: "Beinpresse",
        sets: 3,
        reps: "10",
        pause: "2",
        intervall: "2, 1, 1, 0",
        isBodyweight: false
      },
      {
        name: "Beinbeuger liegend",
        sets: 3,
        reps: "12",
        pause: "1.5",
        intervall: "2, 0, 1, 0",
        isBodyweight: false
      },
      {
        name: "Beinstrecker (splitted)",
        sets: 3,
        reps: "10",
        pause: "1",
        intervall: "1, 0, 1, 1",
        isBodyweight: false
      },
      {
        name: "Ausfallschritte",
        sets: 2,
        reps: "10",
        pause: "1.5",
        intervall: "1, 0, 1, 0",
        isBodyweight: false
      },
      {
        name: "Wadenheben (stehend)",
        sets: 3,
        reps: "6",
        pause: "2",
        intervall: "2, 1, 1, 1",
        isBodyweight: false
      }
    ]
  },

  // bodyweight start
  //bodyweight level 1
  {
    plan: "bw1",
    planName: "Bodyweight Level 1",
    id: "BW1A1",
    name: "Push Tag A",
    exercises: [
      {
        name: "Dips",
        sets: 4,
        reps: "8",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Squats",
        sets: 4,
        reps: "12",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Breite Liegestütz",
        sets: 4,
        reps: "8",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Jumping Lunges (alternierend)",
        sets: 4,
        reps: "12",
        pause: "1.5",
        isBodyweight: true
      },
      {
        name: "Liegestütz",
        sets: 3,
        reps: "12",
        pause: "1.5",
        isBodyweight: true
      },
      {
        name: "Wadenheben (ggf. mit BFR-Band)",
        sets: 3,
        reps: "15-30",
        pause: "0.5",
        isBodyweight: true
      }
    ]
  },
  {
    plan: "bw1",
    planName: "Bodyweight Level 1",
    id: "BW1B1",
    name: "Pull Tag A",
    exercises: [
      {
        name: "Negative Klimmzüge",
        sets: 4,
        reps: "8",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Reverse Plank Lifts",
        sets: 4,
        reps: "12",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "BW Rows",
        sets: 4,
        reps: "8",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Reverse Plank Holds",
        sets: 4,
        reps: "1 min.",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Chin-Up oben halten",
        sets: 3,
        reps: "Max Sek",
        pause: "1",
        isBodyweight: true
      },
      {
        name: "Supermans",
        sets: 3,
        reps: "15",
        pause: "1",
        isBodyweight: true
      }
    ]
  },
  {
    plan: "bw1",
    planName: "Bodyweight Level 1",
    id: "BW1A2",
    name: "Push Tag B",
    exercises: [
      {
        name: "Push Ups (Decline)",
        sets: 4,
        reps: "8",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Squats",
        sets: 4,
        reps: "12",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Enge Liegestütz",
        sets: 4,
        reps: "8",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Jumping Lunges (alternierend)",
        sets: 4,
        reps: "12",
        pause: "1.5",
        isBodyweight: true
      },
      {
        name: "Liegestütz",
        sets: 3,
        reps: "12",
        pause: "1.5",
        isBodyweight: true
      },
      {
        name: "Wadenheben (ggf. mit BFR-Band)",
        sets: 3,
        reps: "15-30",
        pause: "0.5",
        isBodyweight: true
      }
    ]
  },
  {
    plan: "bw1",
    planName: "Bodyweight Level 1",
    id: "BW1B2",
    name: "Pull Tag B",
    exercises: [
      {
        name: "Chin Ups",
        sets: 4,
        reps: "6",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Reverse Plank Lifts",
        sets: 4,
        reps: "12",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Negative Klimmzüge",
        sets: 4,
        reps: "8",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Reverse Plank Holds",
        sets: 4,
        reps: "1 min.",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "BW Rows",
        sets: 3,
        reps: "8",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Supermans",
        sets: 3,
        reps: "15",
        pause: "1",
        isBodyweight: true
      }
    ]
  },
  //bodyweight level 2
  {
    plan: "bw2",
    planName: "Bodyweight Level 2",
    id: "BW2A1",
    name: "Bodyweight Push A",
    exercises: [
      {
        name: "Planche Hold",
        sets: 4,
        reps: "20",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Pike Push-Ups",
        sets: 4,
        reps: "8",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Dips",
        sets: 4,
        reps: "8",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Enge Push-Ups",
        sets: 3,
        reps: "10",
        pause: "1.5",
        isBodyweight: true
      },
      {
        name: "Push-Ups",
        sets: 3,
        reps: "15",
        pause: "1",
        isBodyweight: true
      }
    ]
  },
  {
    plan: "bw2",
    planName: "Bodyweight Level 2",
    id: "BW2B1",
    name: "Bodyweight Pull A",
    exercises: [
      {
        name: "Tuck Frontlever Hold",
        sets: 4,
        reps: "20 Sek.",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Klimmzüge",
        sets: 4,
        reps: "8",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Chin-Ups",
        sets: 4,
        reps: "8",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Commando Pull-Ups",
        sets: 4,
        reps: "8",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "BW Rows",
        sets: 4,
        reps: "12",
        pause: "1.5",
        isBodyweight: true
      }
    ]
  },
  {
    plan: "bw2",
    planName: "Bodyweight Level 2",
    id: "BW2C1",
    name: "Bodyweight Legs A",
    exercises: [
      {
        name: "(Assisted) Pistol Squats",
        sets: 4,
        reps: "je 6",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Jumping Squats",
        sets: 4,
        reps: "12",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Bulg. Splitsquats",
        sets: 3,
        reps: "12 pro Seite",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Reverse Plank Lifts",
        sets: 4,
        reps: "12",
        pause: "1.5",
        isBodyweight: true
      },
      {
        name: "Wadenheben (mit BFR-Band)",
        sets: 3,
        reps: "15-30",
        pause: "0.5",
        isBodyweight: true
      }
    ]
  },
  {
    plan: "bw2",
    planName: "Bodyweight Level 2",
    id: "BW2A2",
    name: "Bodyweight Push B",
    exercises: [
      {
        name: "Pseudo Planche Push-Ups",
        sets: 4,
        reps: "10",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Push-Ups (Decline)",
        sets: 4,
        reps: "8",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Dips",
        sets: 4,
        reps: "8",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Enge Push-Ups",
        sets: 3,
        reps: "10",
        pause: "1.5",
        isBodyweight: true
      },
      {
        name: "Scapula Push-Ups",
        sets: 3,
        reps: "12",
        pause: "1",
        isBodyweight: true
      }
    ]
  },
  {
    plan: "bw2",
    planName: "Bodyweight Level 2",
    id: "BW2B2",
    name: "Bodyweight Pull B",
    exercises: [
      {
        name: "Ice Cream Makers",
        sets: 4,
        reps: "8",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Klimmzüge",
        sets: 4,
        reps: "8",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Chin-Ups",
        sets: 4,
        reps: "8",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "BW Rows",
        sets: 4,
        reps: "8",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Scapula Pull Ups",
        sets: 3,
        reps: "12",
        pause: "1",
        isBodyweight: true
      }
    ]
  },
  {
    plan: "bw2",
    planName: "Bodyweight Level 2",
    id: "BW2C2",
    name: "Bodyweight Legs B",
    exercises: [
      {
        name: "(Assisted) Single Leg Squats",
        sets: 3,
        reps: "6",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Jumping Squats",
        sets: 4,
        reps: "12",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Bulg. Splitsquats",
        sets: 3,
        reps: "12 pro Seite",
        pause: "2",
        isBodyweight: true
      },
      {
        name: "Reverse Plank Lifts",
        sets: 4,
        reps: "12",
        pause: "1.5",
        isBodyweight: true
      },
      {
        name: "Wadenheben (mit BFR-Band)",
        sets: 3,
        reps: "15-30",
        pause: "0.5",
        isBodyweight: true
      }
    ]
  }
];
