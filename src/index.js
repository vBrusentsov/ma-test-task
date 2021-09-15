const goodsArray = require('./goods.json');
const {
  validateArray,
  getWatermelonQuantity,
  getAppleWeight,
  getSortByAlphbetical,
  sortGoodsByCost,
  getLeastCostOrange,
  getCostGoodsByItem,
} = require('./utils');

const validatedArray = validateArray(goodsArray);
const watermelonQuantity = getWatermelonQuantity(validatedArray);
const appleWeight = getAppleWeight(validatedArray);
const sortItemGoods = getSortByAlphbetical(validatedArray);
const sortCostProducts = sortGoodsByCost(validatedArray);
const leastOrangePrice = getLeastCostOrange(validatedArray);
const costGoods = getCostGoodsByItem(validatedArray);

console.log('Sorted goods by alphabetical', sortItemGoods);
console.log('Sortet goods by cost', sortCostProducts);
console.log(`Apples - ${appleWeight}`);
console.log(`Watermelon - ${watermelonQuantity}`);
console.log('Least orange price', leastOrangePrice);
console.log('Cost goods by item', costGoods);
console.log(validatedArray);
