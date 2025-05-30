const messages_no = {
  question: {
    true: `Ekte <span class="ufo">ufo</span>`,
    or: `eller`,
    false: `Falsk <span class="ufo">ufo</span>`,
    pick: `En annen ↺`,
    between: (from, to) => `${from} til ${to}`,
    circa: (date) => "rundt " + date
  },
  answer: {
    correct: "✔ Nøyaktig",
    incorrect: "✘ Å nei",
    conclusion: {
      hoax: "Det var en bløff",
      misinterpretation: "Det var en feil",
      unknown: "Denne saken forblir uidentifisert for øyeblikket"
    },
    result: (good, total) => {
      const percentage = good / total * 100
      return `<b>${percentage.toLocaleString("no", {
        maximumFractionDigits: 1,
        useGrouping: false
      })}%</b> riktige svar<br>(${good} av ${total})`
    }
  },
  case: {
    classification: {
      hynek: {
        NL: {
          title: "Nattlys",
          image: "/science/crypto/ufo/observation/classification/hynek/ln/Logo.jpg"
        },
        DD: {
          title: "Daglig plate",
          image: "/science/crypto/ufo/observation/classification/hynek/dd/Logo.jpg"
        },
        RV: {
          title: "Radar-Visuell",
          image: "/science/crypto/ufo/observation/classification/hynek/rv/Logo.jpg"
        },
        CE1: {
          title: "Nærmøte av den første typen (nær observasjon)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/1/Logo.jpg"
        },
        CE2: {
          title: "Nærmøte av den andre typen (nær interaksjon)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/2/Logo.jpg"
        },
        CE3: {
          title: "Nærmøte av den tredje typen (enhetsobservasjon)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/3/Logo.jpg"
        },
        CE4: {
          title: "kidnapping",
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
export default messages_no
