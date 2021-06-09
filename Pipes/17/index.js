const myNumber = 42 
// window.localStorage()
// document.localStorage()
 console.log(localStorage.getItem('number'));
 localStorage.setItem('number', myNumber.toString())
//  localStorage.removeItem('number', myNumber  )
 console.log(localStorage.getItem('number'));
 localStorage.setItem('number', myNumber  ) 
//  localStorage.clear() 

const person = {
    name: 'Maxim',
    age: 25,
    greet: function(){
        console.log('Greet!');
    }
}
localStorage.setItem('person', JSON.stringify(person))
const row = localStorage.getItem('person')
console.log(typeof  row);
console.log(row);


window.addEventListener('storage', (event) => {
    console.log(event)
})
// window.onstorage = () => {}

// localStorage.setItem('temp', '45763573.toString()')

// bubbles: false
// cancelBubble: false
// cancelable: false
// composed: false
// currentTarget: Window {window: Window, self: Window, document: document, name: "", location: Location, …}
// defaultPrevented: false
// eventPhase: 0
// isTrusted: true
// key: "temp"
// newValue: "45763573.toString()"
// oldValue: "temp"
// path: [Window]
// returnValue: true
// srcElement: Window {window: Window, self: Window, document: document, name: "", location: Location, …}
// storageArea: Storage
// length: 4
// number: "42"
// numberw45645: "function now() { [native code] }"
// person: "{\"name\":\"Maxim\",\"age\":25}"
// temp: "45763573.toString()"
// __proto__: Storage
// target: Window {window: Window, self: Window, document: document, name: "", location: Location, …}
// timeStamp: 408165.7000000477
// type: "storage"
// url: "http://127.0.0.1:5500/Pipes/17/index.html"
// __proto__: StorageEvent
