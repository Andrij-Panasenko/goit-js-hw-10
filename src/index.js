import { fetchBreeds, fetchCatByBreed } from './cat-api';

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
          console.log(breedDesc.description);
          catInfo.innerHTML = `
          <div>
            <img src="${img}" alt="Img">
            <p>${breedDesc.description}</p>
          </div>`;
        })
        .catch(err => console.log(err));
    })
    .catch(err => {console.log(err)});
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
  .catch(err => {
    console.log('err :>> ', err);
  });
