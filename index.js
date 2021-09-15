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
  return array
    .filter((product) => product.item === 'watermelon')
    .reduce((accumulator, quantityItem) => accumulator + quantityItem.quantity, 0);
}
function getAppleWeight(array) {
  return array.filter((product) => product.item === 'apple').reduce((accumulator, weightItem) => accumulator + weightItem.weight, 0);
}
function getSortByAlphbetical(array) {
  return [...array].sort((a, b) => a.item.localeCompare(b.item));
}
function sortGoodsByCost(array) {
  return [...array].sort((firstItem, secondItem) => {
    const firstItemPrice = +(firstItem.pricePerKilo || firstItem.pricePerItem).slice(1).replace(',', '.');
    const secondItemPrice = +(secondItem.pricePerKilo || secondItem.pricePerItem).slice(1).replace(',', '.');
    const firstCost = firstItem.weight ? firstItem.weight * firstItemPrice : firstItem.quantity * firstItemPrice;
    const secondCost = secondItem.weight ? secondItem.weight * secondItemPrice : secondItem.quantity * secondItemPrice;
    return firstCost - secondCost;
  });
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

function getCostGoodsByItem(array) {
  const totalCostGoods = {};

  array.forEach((product) => {
    totalCostGoods[product.item] =
      (totalCostGoods[product.item] || 0) + +(product.pricePerItem || product.pricePerKilo).slice(1).replace(',', '.');
  });

  return totalCostGoods;
}

const finalyResult = mainArray(goodsArray);
const watermelonQuantity = getWatermelonQuantity(finalyResult);
const appleWeight = getAppleWeight(finalyResult);
const sortItemGoods = getSortByAlphbetical(finalyResult);
const sortCostProducts = sortGoodsByCost(finalyResult);
const leastOrangePrice = getLeastCostOrange(finalyResult);
const costGoods = getCostGoodsByItem(finalyResult);

console.log('sorted goods by alphabetical', sortItemGoods);
console.log('sortet goods by cost', sortCostProducts);
console.log(`Apples - ${appleWeight}`);
console.log(`watermelon - ${watermelonQuantity}`);
console.log('least orange price', leastOrangePrice);
console.log(finalyResult);
console.log('cost goods by item', costGoods);
