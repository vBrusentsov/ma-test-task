const goodsArray = require('./goods.json');

function mainArray (array) {
    const newArray = array.filter(products => {
        return  typeof products.item === 'string'
            &&  typeof products.type === 'string'
            &&  (typeof products.weight === 'number'
            ||   typeof products.quantity === 'number')
            && (products.pricePerKilo && products.pricePerKilo[0] === '$' && !Number.isNaN(Number(products.pricePerKilo.slice(1)).toFixed(2)))      
            || (products.pricePerItem && products.pricePerItem[0] === '$' && !Number.isNaN(Number(products.pricePerItem.slice(1)).toFixed(2)))
    })
    return newArray
}
function watermelonQuantity (array){
    const filterWatermelon = array.filter(product => {
        return product.item === 'watermelon';
    }).reduce((accumulator, quantityItem) =>  accumulator + quantityItem.quantity, 0);
    
    return filterWatermelon
}

function appleWeight (array)
console.log(watermelonQuantity(goodsArray));
// const finalyResult = mainArray(goodsArray);
// console.log(finalyResult);
// console.log(watermelonQuntity(finalyResult));

