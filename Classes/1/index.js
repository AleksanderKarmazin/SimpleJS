'use strict';

function getName() {
    return this.name
}

let item = {
    name:"Intel Cors i7",
    type: "Processor",
    price:200,
    getPrice: function(){
        console.log(this);
        // Для этой фунции окружение (контекст) === item2
        return this.price
    },
    getName: getName,
}  

let item2 = {
    name:"Intel Cors i3",
    type: "Processor",
    price:100,
    // Для этой фунции окружение (контекст) === item2
    getPrice: function(){
        console.log(this);
        return item2.price
    },
    getName: getName,
} 

// Для этой фунции окружение (контекст) === window 
// окно браузера
function foo() {
   
}

/* 
Когда мы вызывали функцию внутри объекта 
то контекстом для этой функции 
будет объект в котором функцию создана 

*/
console.log(item.getPrice());
console.log(item2.getPrice());


let itemA = {
    name:"Intel Cors i7",
    type: "Processor",
    price:200,
    getPrice: ()=>{
        console.log(this);
        return itemA.price
    },
    getName: getName,
} 

let itemA2 = {
    name:"Intel Cors i3",
    type: "Processor",
    price:100,
    // Для этой фунции окружение (контекст) === item2
    getPrice: ()=>{
        console.log(this);
        return itemA2.price
    }
} 


console.log(itemA.getPrice());
console.log(itemA2.getPrice());
 