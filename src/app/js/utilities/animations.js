import mq from './mq'
import observer from './observer'
import {
  hero,
  titleHero,
  subtitleHero,
  btnsHero,
  about,
  knowledge,
  portfolio,
  contact
} from './variables'

let option = {
  root: null,
  rootMargin: '0px',
  threshold: .2
}

// Legacy ---------
// Media Querys
// const bp = matchMedia(`(min-width: 1024px)`)
// bp.addListener(optionChange)
// const optionChange = (mql) => {if (mql.matches) option.threshold = .4}
// optionChange(bp)

const optionChange = (mql) => { if (!mql.matches) option.threshold = .2 }
mq(1024, optionChange)


// -----------------------


function functionObserver(entries) {
  entries.forEach(entry => {
    // Detectando si la seccion esta visible en el viewport
    if (entry.isIntersecting) entry.target.classList.add('show-animation')
    else entry.target.classList.remove('show-animation')
  })
}
observer(functionObserver, option, [about, knowledge, portfolio, contact])

// Legacy -------

// const observer = new IntersectionObserver(functionObserver, option)

// // Creando los observadores para cada elemento
// observer.observe(about)
// observer.observe(knowledge)
// observer.observe(portfolio)
// observer.observe(contact)


// Listeners ----------------------------------------------------
addEventListener('load', animationHero)

function animationHero() {
  titleHero.classList.add('show-animation')
  subtitleHero.classList.add('show-animation')
  btnsHero.classList.add('show-animation')
}
