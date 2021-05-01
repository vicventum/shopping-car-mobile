export const $id = document.getElementById.bind(document),
  $qs = document.querySelector.bind(document),
  $all = document.querySelectorAll.bind(document),

  rootStyles = document.documentElement.style,
  rootStylesGet = window.getComputedStyle(document.documentElement),
  root = $id('root'),

  cards = [...$all('.card')],
  cardsBack = [...$all('.card__back')],
  btnsBack = [...$all('.card__btn--back')],
  btnsPlus = [...$all('.card__btn--plus')]