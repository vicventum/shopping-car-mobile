export default function observer(func, option, targets) {
  const observer = new IntersectionObserver(func, option)

  // Creando los observadores para cada elemento
  Array.isArray(targets) 
    ? targets.forEach(target => observer.observe(target))
    : observer.observe(targets)
}

// function functionObserver(entries) {
//   entries.forEach(entry => {
//     // Detectando si la seccion esta visible en el viewport
//     if (entry.isIntersecting) entry.target.classList.add('show-animation')
//     else entry.target.classList.remove('show-animation')
//   })
// }
