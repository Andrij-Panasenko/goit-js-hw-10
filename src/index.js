import SlimSelect from 'slim-select';

import { fetchBreeds, fetchCatByBreed, errorHandler } from './cat-api';

const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');

select.addEventListener('change', onCatSelect);

function onCatSelect() {
  const selectedBreedId = select.value;

  fetchCatByBreed(selectedBreedId)
    .then(data => {
      const img = data[0].url;
      fetchBreeds()
        .then(breeds => {
          const breedDesc = breeds.find(breed => breed.id === selectedBreedId);
          catInfo.innerHTML = `
          <div class="js-cat-info">
            <img src="${img}" alt="Img" class="js-img">
            <div>
              <h1>${breedDesc.name}</h1>
              <p class="js-cat-descr">${breedDesc.description}</p>
              <p class="js-temperament"><span class="js-temp-head">Temperament:</span> ${breedDesc.temperament}</p>
            </div>
          </div>`;
        })
        .catch(errorHandler);
    })
    .catch(errorHandler);
}

function selectOption(breeds) {
  const option = breeds
    .map(breed => {
      return `<option value="${breed.id}">${breed.name}</option>`;
    })
    .join('');

  return option;
}

fetchBreeds()
  .then(breeds => {
    const options = selectOption(breeds);
    select.innerHTML = options;
  })
  .catch(errorHandler);



