'use strict';

/**
 * Class Product
 * @param {String} name 
 * @param {Number} price 
 * @param {Number} category
 * @param {Number} discount  
 * @param {Date} createdAt 
 */
function Product(
    name = "Defaulte product",
    price = 0,
    category = 1,
    discount=0,
    createdAt = new Date()
) {
    //2)  Сохранение контекста вызова через .bind(this)
    let getPriceWithDiscount = function (discount) {
        const price = this.price * (100 - discount) / 100;
        return price;
    }
        getPriceWithDiscount = getPriceWithDiscount.bind(this)

    /**
     * 1) Сохранение контекста вызова через self
     * const self = this 
     * self -> Product
     */
       
    // Публичные переменные 
    this.name = name;
    this.price = price;
    this.category = category;
    this.priceWithDiscount = getPriceWithDiscount(discount)

    // Защищённая переменная
    const createdDate = createdAt;
    
    /**
     * 1) Сохранение контекста вызова через self
        function getPriceWithDiscount(discount) {
            const price = self.price * (100 - discount) / 100;
            return price;
        }
    */

    /**
     * Method for update product
     * @param {String} name 
     * @param {Number} price 
     * @param {Number} category 
     * @param {Number} discount 
     * @returns this
     */
    this.updateProduct = function name(name, price, category, discount=0) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.priceWithDiscount = getPriceWithDiscount(discount)
        return this
    }

    /**
     * Method for get createdDate
     * @returns {Date} createdDate
     */
    this.gatCreatedDAte = function () {
        return createdDate;
    }
}

let product = new Product("Coffe", 55, 1)
console.log(product);
