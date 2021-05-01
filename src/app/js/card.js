import { btnsBack, btnsPlus, $id, btnsClose } from "./utilities/variables";


btnsPlus.forEach(btnPlus => btnPlus.addEventListener('click', activeFlip))
btnsBack.forEach(btnBack => btnBack.addEventListener('click', desactiveFlip))
btnsClose.forEach(btnClose => btnClose.addEventListener('click', closeCard))



function activeFlip({target}) {

  let item = null
  if (target.classList.contains('card__btn--plus'))
    item = target
  else if (target.parentElement.classList.contains('card__btn--plus'))
    item = target.parentElement


  const card = $id(`card${item.dataset.position}`)
  const cardBack = $id(`cardBack${item.dataset.position}`)
  const maxHeight = cardBack.scrollHeight
  
  card.style.height = `${maxHeight}px`
  card.classList.toggle('card--flip')
  
}

function desactiveFlip({target}) {
  let item = null
  if (target.classList.contains('card__btn--back'))
  item = target
  else if (target.parentElement.classList.contains('card__btn--back'))
  item = target.parentElement
  
  const card = $id(`card${item.dataset.position}`)
  const cardFront = $id(`cardFront${item.dataset.position}`)
  const maxHeight = cardFront.scrollHeight
  console.log(maxHeight);

  card.style.height = `${maxHeight}px`
  card.classList.toggle('card--flip')

}


function closeCard({target}) {
  let item = null
  if (target.classList.contains('card__close'))
    item = target
  else if (target.parentElement.classList.contains('card__close'))
    item = target.parentElement

  const card = $id(`card${item.dataset.position}`)
  card.style.display = 'none'

  console.log(item);
}