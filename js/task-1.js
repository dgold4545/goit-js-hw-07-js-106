"use strict";

const refs = {
  list: document.querySelector("#categories"),
  listItem: document.querySelectorAll(".item"),
};

function setDataFromList(refs) {
  const { list, listItem } = refs;

  console.log(`Number of categories: ${list.childElementCount}`);

  listItem.forEach(elem => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(elem.lastElementChild.children.length);
  });
}

setDataFromList(refs);
