const messages_fr = {
  question: {
    true: `Vrai <span class="ufo">ovni</span>`,
    or: `ou`,
    false: `Faux <span class="ufo">ovni</span>`,
    pick: `Un autre ↺`,
    between: (from, to) => `${from} à ${to}`,
    circa: (date) => "vers " + date
  },
  answer: {
    correct: "✔ Exact !",
    incorrect: "✘ Eh non !",
    conclusion: {
      hoax: "C'était un canular",
      misinterpretation: "C'était une méprise",
      unknown: "Ce cas reste non-identifié pour l'instant"
    },
    result: (good, total) => {
      const percentage = good / total * 100
      return `<b>${percentage.toLocaleString("fr", {
        maximumFractionDigits: 1,
        useGrouping: false
      })}%</b> de bonnes réponses<br>(${good} sur ${total})`
    }
  },
  case: {
    classification: {
      hynek: {
        NL: {
          title: "Lumière Nocturne",
          image: "/science/crypto/ufo/observation/classification/hynek/ln/Logo.jpg"
        },
        DD: {
          title: "Disque Diurne",
          image: "/science/crypto/ufo/observation/classification/hynek/dd/Logo.jpg"
        },
        RV: {
          title: "Radar-Visuel",
          image: "/science/crypto/ufo/observation/classification/hynek/rv/Logo.jpg"
        },
        CE1: {
          title: "Rencontre Rapprochée du 1er type (observation proche)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/1/Logo.jpg"
        },
        CE2: {
          title: "Rencontre Rapprochée du 2ᵉ type (interaction proche)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/2/Logo.jpg"
        },
        CE3: {
          title: "Rencontre Rapprochée du 3ᵉ type (observation d'entité)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/3/Logo.jpg"
        },
        CE4: {
          title: "Enlèvement",
          image: "/time/1/9/3/5/06/AstoundingStories.jpg"
        },
        CE5: {
          title: "Contact",
          image: "/people/v/VorilhonClaude/rael1.jpg"
        }
      }
    }
  }
}
export default messages_fr
