const form = document.querySelector(".form-position");
const selectEl = document.querySelector('#value');
const formInputM = document.querySelector('#mass');
const formInputR = document.querySelector('#amount-of-receptions');
const formInputC = document.querySelector('#amount-of-carbohydrates');
const formBtn = document.querySelector('.btn-style');
const resultBlock = document.querySelector('.result-block')
const resultListItem = document.querySelectorAll('.result-block-list__item');
const resultTitle = document.querySelector('.result-block__title');

const onSelect = () => {
    resultBlock.classList.add('result-block-click');
    let protein = Math.round(1.5 * formInputM.value);
    let fats = Math.round(0.5 * formInputM.value);
    let carbohydrates = Math.round(3 * formInputM.value);
    let numberOfProtein = Math.round(protein / formInputR.value);
    let numberOfFats = Math.round(fats / formInputR.value);
    let numberOfCarbohydrates = Math.round(formInputC.value / formInputR.value);
    resultTitle.textContent = 'Результат';

      if (selectEl.value === '1') {
       resultListItem[0].textContent = `Количество углеводов в день: ${carbohydrates}г. ( ${numberOfCarbohydrates}г. на один приём );`
       resultListItem[1].textContent = `Количество белков в день: ${protein}г. ( ${numberOfProtein}г. на один приём );`
       resultListItem[2].textContent = `Количество жиров в день: ${fats}г. ( ${numberOfFats}г. на один приём );`
      };

      if (selectEl.value === '2') { 
       carbohydrates = Math.round(carbohydrates + carbohydrates * 15 / 100);
       numberOfCarbohydrates = Math.round(carbohydrates / formInputR.value);
       resultListItem[0].textContent = `Количество углеводов в день: ${carbohydrates}г. ( ${numberOfCarbohydrates}г. на один приём );`
       resultListItem[1].textContent = `Количество белков в день: ${protein}г. ( ${numberOfProtein}г. на один приём );`
       resultListItem[2].textContent = `Количество жиров в день: ${fats}г. ( ${numberOfFats}г. на один приём );`
      };

      if (selectEl.value === '3') { 
       carbohydrates = Math.round(carbohydrates - carbohydrates * 15 / 100);
       numberOfCarbohydrates = Math.round(carbohydrates / formInputR.value);
       resultListItem[0].textContent = `Количество углеводов в день: ${carbohydrates}г. ( ${numberOfCarbohydrates}г. на один приём );`
       resultListItem[1].textContent = `Количество белков в день: ${protein}г. ( ${numberOfProtein}г. на один приём );`
       resultListItem[2].textContent = `Количество жиров в день: ${fats}г. ( ${numberOfFats}г. на один приём );`
       };
};



formBtn.addEventListener("click", onSelect);