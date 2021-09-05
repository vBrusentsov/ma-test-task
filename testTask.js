const goodsArray = require('./goods.json');

function mainArray(array) {
  const newArray = array.filter(
    (products) =>
      (typeof products.item === 'string' &&
        typeof products.type === 'string' &&
        (typeof products.weight === 'number' || typeof products.quantity === 'number') &&
        products.pricePerKilo &&
        products.pricePerKilo[0] === '$' &&
        !Number.isNaN(Number(products.pricePerKilo.slice(1)).toFixed(2))) ||
      (products.pricePerItem && products.pricePerItem[0] === '$' && !Number.isNaN(Number(products.pricePerItem.slice(1)).toFixed(2))),
  );
  return newArray;
}
function watermelonQuantity(array) {
  const filterWatermelon = array
    .filter((product) => product.item === 'watermelon')
    .reduce((accumulator, quantityItem) => accumulator + quantityItem.quantity, 0);
  return filterWatermelon;
}
function getAppleWeight(array) {
  const filterApples = array
    .filter((product) => product.item === 'apple')
    .reduce((accumulator, weightItem) => accumulator + weightItem.weight, 0);
  return filterApples;
}

const finalyResult = mainArray(goodsArray);
// const we
const appleWeight = getAppleWeight(finalyResult);

console.log(`Apples - ${appleWeight}`);
console.log(watermelonQuantity(finalyResult));

// console.log(finalyResult);
// console.log(watermelonQuntity(finalyResult));
