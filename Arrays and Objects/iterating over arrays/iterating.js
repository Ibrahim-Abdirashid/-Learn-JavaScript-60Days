
// ITERATING OVER ARRAYS: you can loop through the elements of an array using various loop construct

// 1: FOR LOOP
// let fruits = ['banana', 'carrot', 'orange', 'onion']
// for(i=0; i<fruits.length; i++) { //(.length) waxaa laga wadaa inta walax ee ku jirta arraygaaga tiradooda waana 4
//   console.log(fruits[i]);
// }

// 2: FOR OF LOOP:

// let numbers = [1, 2, 3, 4, 5, 6,7,8,9]
// for(let number  of numbers){
//   console.log(number)
// }

// 3: FOR EACH : Waa method execute ku sameyn doona functionka gudeheeda.
// sidoo kale waa functional programming approach

let names = ['ahmed', 'hassan', 'faarah', 'abdow']
 names.forEach(function (name) {
  console.log(name)
 });