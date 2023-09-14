import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_nHeTwtPM99GWmPZ1JlhiGWt0dln534wx7Q0XMmTZ0lkQGgmJkVRTmOy9t0BwA6PS';

import Notiflix from 'notiflix';



  // Breed collection
function fetchBreeds() {
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const url = `${BASE_URL}/breeds`

  return axios.get(url)
    .then((resp) => {
      if (resp.status !== 200) {
        throw new Error(errorHandler);
      }

      return resp.data;
     })
}



//info about Cat
function fetchCatByBreed(breedId) {
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const url = `${BASE_URL}/images/search?breed_ids=${breedId}`

  return axios.get(url)
    .then((resp) => {
      if (resp.status !== 200) {
        throw new Error(errorHandler);
      }

      return resp.data
    })
}

function errorHandler() {
  Notiflix.Notify.failure('Requested resource is not avialable');
}

export { fetchBreeds, fetchCatByBreed, errorHandler };
