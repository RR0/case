const messages_de = {
  question: {
    true: `Echtes <span class="ufo">ufo</span>`,
    or: `ou`,
    false: `Gefälschtes <span class="ufo">ufo</span>`,
    pick: `ein anderer ↺`,
    between: (from, to) => `${from} bis ${to}`,
    circa: (date) => "etwa im " + date
  },
  answer: {
    correct: "✔ Genau !",
    incorrect: "✘ Ach nein !",
    conclusion: {
      hoax: "Es war ein Scherz",
      misinterpretation: "Es war ein Fehler",
      unknown: "Dieser Fall ist derzeit noch nicht identifiziert"
    },
    result: (good, total) => {
      const percentage = good / total * 100
      return `<b>${percentage.toLocaleString("de", {
        maximumFractionDigits: 1,
        useGrouping: false
      })}%</b> richtige Antworten<br>(${good} von ${total})`
    }
  },
  case: {
    classification: {
      hynek: {
        NL: {
          title: "Nachtlicht",
          image: "/science/crypto/ufo/observation/classification/hynek/ln/Logo.jpg"
        },
        DD: {
          title: "Tagesscheibe",
          image: "/science/crypto/ufo/observation/classification/hynek/dd/Logo.jpg"
        },
        RV: {
          title: "Radarvisuell",
          image: "/science/crypto/ufo/observation/classification/hynek/rv/Logo.jpg"
        },
        CE1: {
          title: "Unheimliche Begegnung des 1. Typs (nahe Beobachtung)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/1/Logo.jpg"
        },
        CE2: {
          title: "Enge Begegnung der 2. Art (enge Interaktion)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/2/Logo.jpg"
        },
        CE3: {
          title: "Unheimliche Begegnung des 3. Typs (Entitätsbeobachtung)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/3/Logo.jpg"
        },
        CE4: {
          title: "Entführung",
          image: "/time/1/9/3/5/06/AstoundingStories.jpg"
        },
        CE5: {
          title: "Kontakt",
          image: "/people/v/VorilhonClaude/rael1.jpg"
        }
      }
    }
  }
}
export default messages_de
