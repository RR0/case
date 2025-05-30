const messages_sv = {
  question: {
    true: `Riktig <span class="ufo">ufo</span>`,
    or: `eller`,
    false: `Falska <span class="ufo">ufo</span>`,
    pick: `Annan ↺`,
    between: (from, to) => `${from} till ${to}`,
    circa: (date) => "runt " + date
  },
  answer: {
    correct: "✔ Exakt !",
    incorrect: "✘ Felaktig",
    conclusion: {
      hoax: "Det var en bluff",
      misinterpretation: "Det var ett misstag",
      unknown: "Detta fall förblir oidentifierat för tillfället"
    },
    result: (good, total) => {
      const percentage = good / total * 100
      return `<b>${percentage.toLocaleString("sv", {
        maximumFractionDigits: 1,
        useGrouping: false
      })}%</b> rätt svar<br>(${good} av ${total})`
    }
  },
  case: {
    classification: {
      hynek: {
        NL: {
          title: "Nattlampa",
          image: "/science/crypto/ufo/observation/classification/hynek/ln/Logo.jpg"
        },
        DD: {
          title: "Dagskiva",
          image: "/science/crypto/ufo/observation/classification/hynek/dd/Logo.jpg"
        },
        RV: {
          title: "Visuell-radar",
          image: "/science/crypto/ufo/observation/classification/hynek/rv/Logo.jpg"
        },
        CE1: {
          title: "Nära möte av 1:a typen (nära observation)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/1/Logo.jpg"
        },
        CE2: {
          title: "Nära möte av den andra typen (nära interaktion)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/2/Logo.jpg"
        },
        CE3: {
          title: "Nära möte av den tredje typen (observerad enhet)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/3/Logo.jpg"
        },
        CE4: {
          title: "Kidnappning",
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
export default messages_sv
