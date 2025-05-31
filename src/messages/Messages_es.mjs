const messages_es = {
  question: {
    true: `<span class="ufo">Ovni</span> real`,
    or: `o`,
    false: `<span class="ufo">Ovni</span> falso`,
    pick: `Otro ↺`,
    between: (from, to) => `${from} a ${to}`,
    circa: (date) => "alrededor de " + date
  },
  answer: {
    correct: "✔ ¡Exacto!",
    incorrect: "✘ Oh, no !",
    conclusion: {
      hoax: "Fue un engaño",
      misinterpretation: "Fue un error",
      unknown: "Este caso permanece sin identificar en este momento"
    },
    result: (good, total) => {
      const percentage = good / total * 100
      return `<b>${percentage.toLocaleString("es", {
        maximumFractionDigits: 1,
        useGrouping: false
      })}%</b> respuestas correctas<br>(${good} de ${total})`
    }
  },
  case: {
    classification: {
      hynek: {
        NL: {
          title: "Luz de Noche",
          image: "/science/crypto/ufo/observation/classification/hynek/ln/Logo.jpg"
        },
        DD: {
          title: "Disco Diurno",
          image: "/science/crypto/ufo/observation/classification/hynek/dd/Logo.jpg"
        },
        RV: {
          title: "Radar-Visual",
          image: "/science/crypto/ufo/observation/classification/hynek/rv/Logo.jpg"
        },
        CE1: {
          title: "Encuentro cercano del 1er tipo (observación cercana)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/1/Logo.jpg"
        },
        CE2: {
          title: "Encuentro cercano del segundo tipo (interacción cercana)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/2/Logo.jpg"
        },
        CE3: {
          title: "Encuentro cercano del tercer tipo (observación de entidad)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/3/Logo.jpg"
        },
        CE4: {
          title: "Secuestro",
          image: "/time/1/9/3/5/06/AstoundingStories.jpg"
        },
        CE5: {
          title: "Contacto",
          image: "/people/v/VorilhonClaude/rael1.jpg"
        }
      }
    }
  }
}
export default messages_es
