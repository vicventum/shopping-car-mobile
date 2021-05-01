export const $id = document.getElementById.bind(document),
  $qs = document.querySelector.bind(document),
  $all = document.querySelectorAll.bind(document),

  rootStyles = document.documentElement.style,
  rootStylesGet = window.getComputedStyle(document.documentElement),
  root = $id('root'),

  btnsBack = [...$all('.card__btn--back')],
  btnsPlus = [...$all('.card__btn--plus')],
  btnsClose = [...$all('.card__close')]
  