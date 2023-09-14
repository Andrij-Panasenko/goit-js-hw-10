import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_nHeTwtPM99GWmPZ1JlhiGWt0dln534wx7Q0XMmTZ0lkQGgmJkVRTmOy9t0BwA6PS';

  // Breed collection
function fetchBreeds() {
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const url = `${BASE_URL}/breeds`

  return axios.get(url)
    .then((resp) => {
      // console.log('resp fetchBreeds:>> ', resp);
      if (resp.status !== 200) {
        throw new Error('Response failed')
      }

      return resp.data;
     })
}
// fetchBreeds();



//info about Cat
function fetchCatByBreed(breedId) {
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const url = `${BASE_URL}/images/search?breed_ids=${breedId.toString()}`

  return axios.get(url)
    .then((resp) => {
      // console.log('resp fetchCatByBreed :>> ', resp);
      if (resp.status !== 200) {
        throw new Error("Requested cat ain't exist")
      }

      return resp.data
    })
}

// fetchCatByBreed('beng');






export { fetchBreeds, fetchCatByBreed };
