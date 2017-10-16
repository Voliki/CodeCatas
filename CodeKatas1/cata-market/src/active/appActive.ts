
export function sum(price){
    return function (dispath){
    var priceOne = (price.price ^ 0) === price.price ? 
    (price.price > price.count) ? price.price /price.count : ((price.price * 100) / price.count)/100 : 
    parseFloat((((price.price * 100) / price.count)/100).toFixed(2));
    priceOne = price.quantityPurchased > 0? parseFloat((priceOne * price.quantityPurchased).toFixed(2)) : priceOne;
        dispath(getPrice(priceOne));
    }
}

export function getPrice(quantityPurchased){
    return {type: 'ANMOUNT', quantityPurchased};
}