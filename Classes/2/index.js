// function Person( first_name, last_name) {
//     this.first_name = first_name, 
//     this.last_name = last_name
//     // всегда возвращает объект если мы 
//     // принудительно не возвращаем свой объект 
//     // return {
//     //     first_name: first_name,
//     //     last_name: this.last_name
//     // }

//     this.full_name = function () {
//         return this.first_name + this.last_name
//     }
// }

// let user = new Person('Denis', "Ivanov")
// console.log(user);

class Person{
    // В конструкторе мы объявляем
    //  все публичные переменные 
    constructor(first_name = Person.defaultName(), last_name){
        this.first_name = first_name, 
        this.last_name = last_name
        this._isLogIn = true
    }

    get isLogIn(){
        return this._isLogIn ? "Log in " : "Log out"
    }
    set isLogIn(value){
        this._isLogIn = value
    }

    //  Не пишем     this
    full_name() {
        return this.first_name + " " + this.last_name
    }
    static defaultName(){
        return "User";
    }
    
}

let user = new Person('Denis', "Ivanov")
let user2 = new Person()
console.log(user);
console.log(user2);