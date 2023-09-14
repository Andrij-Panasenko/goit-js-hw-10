import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_nHeTwtPM99GWmPZ1JlhiGWt0dln534wx7Q0XMmTZ0lkQGgmJkVRTmOy9t0BwA6PS';

  const BASE_URL = 'https://api.thecatapi.com/v1';

  // Breed collection
export function fetchBreeds() {
  const url = `${BASE_URL}/breeds`

  return axios.get(url)
    .then((resp) => resp.data)
}

//info about Cat
export function fetchCatByBreed(breedId) {
  const url = `${BASE_URL}/images/search?breed_ids=${breedId}`

  return axios.get(url)
    .then((resp) => resp.data)
}



