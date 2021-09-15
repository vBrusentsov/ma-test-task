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
function getSortItemGoods(array) {
  const sortProducts = array.sort((a, b) => a.item.localeCompare(b.item));
  return sortProducts;
}
function sortGoodsByCost(array) {
  const sortProducts = array.sort((firstItem, secondItem) => {
    const firstCost = firstItem.weight ? firstItem.weight * firstItem.pricePerKilo : firstItem.quantity * firstItem.pricePerItem;
    const secondCost = secondItem.weight ? secondItem.weight * secondItem.pricePerKilo : secondItem.quantity * secondItem.pricePerItem;
    return firstCost - secondCost;
  });
  return sortProducts;
}
function getLeastCostOrange(array) {
  const filterOrange = array.filter((product) => product.item === 'orange');
  let leastPrice = null;
  let leastProduct = null;
  filterOrange.forEach((product) => {
    const numRelease = product.pricePerKilo.replace(',', '.').slice(1) * product.weight;

    if (leastPrice === null || leastPrice > numRelease) {
      leastPrice = numRelease;
      leastProduct = product;
    }
  });
  return leastProduct;
}

const finalyResult = mainArray(goodsArray);
const watermelonQuantity = getWatermelonQuantity(finalyResult);
const appleWeight = getAppleWeight(finalyResult);
const sortItemGoods = getSortItemGoods(finalyResult);
const sortCostProducts = sortGoodsByCost(finalyResult);
const typeOrangePrice = getLeastCostOrange(finalyResult);
console.log(sortItemGoods);
console.log(sortCostProducts);
console.log(`Apples - ${appleWeight}`);
console.log(`watermelon - ${watermelonQuantity}`);
console.log(typeOrangePrice);
console.log(finalyResult);
