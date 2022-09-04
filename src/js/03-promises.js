import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onClickSubmit);

function onClickSubmit(event) {
  event.preventDefault();


  
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
