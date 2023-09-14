import Notiflix from 'notiflix';

export function errorHandler() {
  Notiflix.Notify.failure('Requested resource is not avialable');
}
