function validateArray(array) {
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

module.exports = {
  validateArray,
  getWatermelonQuantity,
  getAppleWeight,
  getSortByAlphbetical,
  sortGoodsByCost,
  getLeastCostOrange,
  getCostGoodsByItem,
};
