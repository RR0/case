const messages_en = {
  question: {
    true: `True <span class="ufo">ufo</span>`,
    or: `or`,
    false: `False <span class="ufo">ufo</span>`,
    pick: `Another ↺`,
    between: (from, to) => `${from} to ${to}`,
    circa: (date) => "circa " + date
  },
  answer: {
    correct: "✔ Correct !",
    incorrect: "✘ Wrong",
    conclusion: {
      hoax: "This was a hoax",
      misinterpretation: "This was a misinterpretation",
      unknown: "This case remains unidentified for now"
    },
    result: (good, total) => {
      const percentage = good / total * 100
      return `<b>${percentage.toLocaleString("en", {
        maximumFractionDigits: 1,
        useGrouping: false
      })}%</b> of good answers<br>(${good} of ${total})`
    }
  },
  case: {
    classification: {
      hynek: {
        NL: {
          title: "Nocturnal Light",
          image: "/science/crypto/ufo/observation/classification/hynek/ln/Logo.jpg"
        },
        DD: {
          title: "Daylight Disc",
          image: "/science/crypto/ufo/observation/classification/hynek/dd/Logo.jpg"
        },
        RV: {
          title: "Radar-Visual",
          image: "/science/crypto/ufo/observation/classification/hynek/rv/Logo.jpg"
        },
        CE1: {
          title: "Close Encounter of the 1st kind (close sight)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/1/Logo.jpg"
        },
        CE2: {
          title: "Close Encounter of the 2nd kind (close interaction)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/2/Logo.jpg"
        },
        CE3: {
          title: "Close Encounter of the 3rd kind (entity sighted)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/3/Logo.jpg"
        },
        CE4: {
          title: "Abduction",
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
export default messages_en
