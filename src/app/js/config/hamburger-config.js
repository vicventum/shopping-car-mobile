import { $id, $all } from '../utilities/variables'

// Look for .hamburger
const hamburger = $id('iconHamburger')
  // menu = $id('menu'),
  // root = $id('root'),
  // links = $all('.navbar__links')

// On click
hamburger.addEventListener("click", () => {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // root.classList.toggle("no-scroll")
  // menu.classList.toggle("open");
});

hamburger.classList.remove("is-active");
// links.forEach(link => {
//   link.addEventListener('click', () => {
//     hamburger.classList.remove("is-active");
//     // root.classList.remove("no-scroll")
//     // menu.classList.remove("open");
//   })
// })
