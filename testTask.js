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
function getWatermelonQuantity(array) {
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
function getSortGoods(array) {
  const sortProducts = array.sort((a, b) => a.item.localeCompare(b.item));
  return sortProducts;
}
const finalyResult = mainArray(goodsArray);
// const watermelonQuantity = getWatermelonQuantity(finalyResult);
// const appleWeight = getAppleWeight(finalyResult);
const sortGoods = getSortGoods(finalyResult);
console.log(sortGoods);
// console.log(`Apples - ${appleWeight}`);
// console.log(`watermelon - ${watermelonQuantity}`);

// console.log(finalyResult);
// console.log(watermelonQuntity(finalyResult));
