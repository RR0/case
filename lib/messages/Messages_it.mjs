const messages_it = {
  question: {
    true: `Vero <span class="ufo">ufo</span>`,
    or: `o`,
    false: `Falso <span class="ufo">ufo</span>`,
    pick: `Un altro ↺`,
    between: (from, to) => `${from} a ${to}`,
    circa: (date) => "intorno a " + date
  },
  answer: {
    correct: "✔ Giusto !",
    incorrect: "✘ Sbagliato",
    conclusion: {
      hoax: "Era una bufala",
      misinterpretation: "È stato un errore",
      unknown: "Questo caso rimane non identificato per il momento"
    },
    result: (good, total) => {
      const percentage = good / total * 100
      return `<b>${percentage.toLocaleString("it", {
        maximumFractionDigits: 1,
        useGrouping: false
      })}%</b> di risposte corrette<br>(${good} su ${total})`
    }
  },
  case: {
    classification: {
      hynek: {
        NL: {
          title: "Luce Notturna",
          image: "/science/crypto/ufo/observation/classification/hynek/ln/Logo.jpg"
        },
        DD: {
          title: "Disco Diurno",
          image: "/science/crypto/ufo/observation/classification/hynek/dd/Logo.jpg"
        },
        RV: {
          title: "Radar-Visivo",
          image: "/science/crypto/ufo/observation/classification/hynek/rv/Logo.jpg"
        },
        CE1: {
          title: "Incontro ravvicinato del 1° tipo (vista da vicino)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/1/Logo.jpg"
        },
        CE2: {
          title: "Incontro ravvicinato del 2° tipo (stretta interazione)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/2/Logo.jpg"
        },
        CE3: {
          title: "Incontro ravvicinato del 3° tipo (entità osservata)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/3/Logo.jpg"
        },
        CE4: {
          title: "Rapimento",
          image: "/time/1/9/3/5/06/AstoundingStories.jpg"
        },
        CE5: {
          title: "Contatto",
          image: "/people/v/VorilhonClaude/rael1.jpg"
        }
      }
    }
  }
}
export default messages_it
