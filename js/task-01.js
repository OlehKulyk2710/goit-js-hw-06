const listOfCategoriesRef = document.getElementById('categories');
const itemsOfTheCatList = listOfCategoriesRef.querySelectorAll('.item');
const quantityOfCategories = itemsOfTheCatList.length;
console.log('Number of categories:', quantityOfCategories);
console.log('--------');

// ------Method #1 ------
for (let i = 0; i < quantityOfCategories; i += 1) {
  const titleOfTheCatRef = itemsOfTheCatList[i].querySelector('h2');
  const nameOfTheCat = titleOfTheCatRef.textContent;
  console.log(`Category #${i + 1}: ${nameOfTheCat}`);

  const elementsOfTheCatRef = itemsOfTheCatList[i].querySelectorAll('li');
  const quantityOfTheCat = elementsOfTheCatRef.length;
  console.log(`Elements: ${quantityOfTheCat}`);
  console.log('--------');
}

// ------Method #2 ------

// // ------The first category ------
// const titleOfTheFirstCatRef = itemsOfTheCatList[0].querySelector('h2');
// const nameOfTheFirstCat = titleOfTheFirstCatRef.textContent;
// console.log('Category #1:', nameOfTheFirstCat);

// const elementsOfTheFirstCatRef = itemsOfTheCatList[0].querySelectorAll('li');
// const quantityOfTheFirstCat = elementsOfTheFirstCatRef.length;
// console.log('Elements:', quantityOfTheFirstCat);
// console.log('--------');

// // ------The second category ------
// const titleOfTheSecondCatRef = itemsOfTheCatList[1].querySelector('h2');
// const nameOfTheSecondCat = titleOfTheSecondCatRef.textContent;
// console.log('Category #2:', nameOfTheSecondCat);

// const elementsOfTheSecondCatRef = itemsOfTheCatList[1].querySelectorAll('li');
// const quantityOfTheSecondCat = elementsOfTheSecondCatRef.length;
// console.log('Elements:', quantityOfTheSecondCat);
// console.log('--------');

// // ------The third category ------
// const titleOfTheThirdCatRef = itemsOfTheCatList[2].querySelector('h2');
// const nameOfTheThirdCat = titleOfTheThirdCatRef.textContent;
// console.log('Category #3:', nameOfTheThirdCat);

// const elementsOfTheThirdCatRef = itemsOfTheCatList[2].querySelectorAll('li');
// const quantityOfTheThirdCat = elementsOfTheThirdCatRef.length;
// console.log('Elements:', quantityOfTheThirdCat);
