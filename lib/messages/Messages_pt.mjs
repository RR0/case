const messages_pt = {
  question: {
    true: `<span class="ufo">Ovni</span> real`,
    or: `ou`,
    false: `<span class="ufo">Ovni</span> falso`,
    pick: `Outro ↺`,
    between: (from, to) => `${from} a ${to}`,
    circa: (date) => "por volta de " + date
  },
  answer: {
    correct: "✔ Exato!",
    incorrect: "✘ Oh não!",
    conclusion: {
      hoax: "Foi uma farsa",
      misinterpretation: "Isso foi um erro",
      unknown: "Este caso permanece não identificado no momento"
    },
    result: (good, total) => {
      const percentage = good / total * 100
      return `<b>${percentage.toLocaleString("pt", {
        maximumFractionDigits: 1,
        useGrouping: false
      })}%</b> de respostas corretas<br>(${good} de ${total})`
    }
  },
  case: {
    classification: {
      hynek: {
        NL: {
          title: "Luz Noturna",
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
          title: "Encontro Imediato do 1º tipo (observação atenta)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/1/Logo.jpg"
        },
        CE2: {
          title: "Encontro próximo do 2º tipo (interação próxima)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/2/Logo.jpg"
        },
        CE3: {
          title: "Encontro Imediato do 3º tipo (observação de entidade)",
          image: "/science/crypto/ufo/observation/classification/hynek/rr/3/Logo.jpg"
        },
        CE4: {
          title: "Sequestro",
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
export default messages_pt
