function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputElem: document.querySelector("[type='number']"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesElem: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", () => {
  createBoxes(refs.inputElem.value);
});

function createBoxes(amount) {
  let markup = "";

  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i += 1) {
      const size = 30;
      markup += `<div style="background-color: ${getRandomHexColor()}; width: ${
        size + i * 10
      }px; height:${size + i * 10}px;"></div>`;
    }
  }
  refs.boxesElem.innerHTML = markup;

  refs.inputElem.value = "";
  markup = "";
}

refs.destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  refs.boxesElem.innerHTML = "";
}
