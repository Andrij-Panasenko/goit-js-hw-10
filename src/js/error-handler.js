import Notiflix from 'notiflix';

export function errorHandler() {
  Notiflix.Notify.warning('Oops! Something went wrong! Try reloading the page!');
}
