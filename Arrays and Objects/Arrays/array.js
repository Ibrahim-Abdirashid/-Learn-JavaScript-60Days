
/* ARRAY and OBJECT: are fundmental data structure in JAVASCRIPT
  array: used to store ordered collection of data.
=> arraygu wuxuu objectiga kaga duwanyahay, arraygu wuxuu ina siiyaa (index) in macnaha hal value keydin karno
  oo aanan value-gaas si detail ah u sii dhex gali karin.

=> objectigu isagu wuxuu isticmaalaa marka uu datada keydinayo wax loo yaqaan (key-value pairs), each(key)waxaa loo yaqaan property
*/






//  let fruit = ['banan', 'carrot', 'apple']
//  console.log(fruit)

//  //ACCESSING ARRAY ELEMENTS: Array elements are accessed using their index, which starts at 0

//  let names = ['Sekeriye', 'hussein', 'Ali']
//  console.log(names[2]) // output is: Ali

//  // MODIFIES ARRAY ELEMENTS: inaad elements-ka arrayga kugu jira wax ka bad badashid sida
//    // inaad laba elements isku badashid
// let clothes = ['buste', 'shaadh' , 'surwaal', 'macawis']

// console.log(clothes)

// clothes[2]='garan' // waa modifies, index two waxaa markii hore ku jiray 'surwaal' , markii
//                    // danbena waxaa lagu baddalay 'garan'.
// console.log(clothes)

// ARRAY METHODS:
// 1:PUSH: Adding Array element at last position or element

// let fruits =['banana', 'carrot', 'salad']
// console.log(fruits)

// fruits.push('orange') // push: waa array method kaasoo elements-kii ama arraygi aad heysatay
//                    //ku soo daraya xog dheeri ah weliba xagga danbe ayuu kaga soo darayaa 
// console.log(fruits)

// 2: POP: removing your element at last position or element

// let names = ['ahmed','Hassan', 'abdi']
// console.log(names)
// names.pop()  // POP: waxay deledeysaa elementigaagi ugu danbeeyay ee arrayga ku jiray
// console.log(names)

// // 3: SHIFT: removes the first element of array

// let fruits=['banana', 'cabage', 'onion', 'garlic']
// console.log(fruits)

// fruits.shift() //SHIFT: Waa inuu xagga hore ama elementigaga ugu horreeya uu dhillido
// console.log(fruits)

//4: UNSHIFT: Adding the first elements of array

// let schools =['ubaya', 'omer', 'aayatiin','alaqsa']
// console.log(schools);
// schools.unshift('shiikh clai')// UNSHIFT: Wuxuu sameeyay inuu xagga ugu horreysa uu kaga soo daray shiikh cali
// console.log(schools)


// 5: INDEXOF(): Waxaa lagu ogaadaa elements-kaaga index numberka uu yahay

// let friuts = ['banana', 'melon', 'mango', 'apple']
// console.log(friuts.indexOf('melon')) // waxay sheegaysaa index numberka uu yahay 

// 6: SLICE : Waa qaabka aad u copy gareyn karto ARRAY horey u jirtay

// let friuts = ['banana', 'melon', 'mango', 'apple']
// console.log(friuts)
// let newFruits = friuts.slice() // markaad qorto slice oo kaliya wuxuu soo wada coppy gareyn arraygii hore oo dhan
// console.log(newFruits)
// let new1Fruits = friuts.slice(2, 3) // marka aad qaabkan u qorto waxay kuu soo copy gareyneysaa indexs-ka aad dooratay oo kaliya
//                         // hadda wuxuu inoo soosaarya (mango) oo kaliya, sababtoo ah waxaad dhahday ka bilow 2 ilaa 3 markaa 3 lama gaadhina
// console.log(new1Fruits)