
/* OBJECT: Used to store data in key-value pairs.
  sidoo kale object waxa weeye wixii aanan ahayn (primitive data type)

   ARRAY and OBJECT: are fundmental data structure in JAVASCRIPT
  array: used to store ordered collection of data.
=> arraygu wuxuu objectiga kaga duwanyahay, arraygu wuxuu ina siiyaa (index) in macnaha hal value keydin karno
  oo aanan value-gaas si detail ah u sii dhex gali karin.

=> objectigu isagu wuxuu isticmaalaa marka uu datada keydinayo wax loo yaqaan (key-value pairs), each(key)waxaa loo yaqaan property
*/



// waa marka objec la sameynayo
// const person ={
//   name :"ahmed",
//   age : 22,
//   city : "boorama"
// }
// console.log(person) // markan wuxuu soo wada daabacay wixii Variable-ka (person) uu hayay

// (ACCESSING) Laba qaab ayaa loo sameeyaa oo kala mar la isticmaalayo dot(.) iyo mar la isticmaalayo bracket([])
// console.log(person.name) // markana waa qaabka (accessing)loo sameeyo adigoo isticmaalaya (dot(.)) sababtoo ah wixii ku siineysaa name-ka wixii ku jiray
// console.log(person["age"]) // markana waa qaabka 2aad adigoo isticmaalaya bracket([]) labadaba waxay qabanayaan isku shaqo
// console.log(person.city)

//OBJECT LITERALS


/*1: markaad rabto inaad modifying ku sameyso objectigaaga oo aad wax kale ku soo dartid adigoo (adding) sameynaya
 2: sidoo kale markaad rabto inaad sameyso (changing) laba (values) isku baddashid sidan same */

// const animalInfo ={
//   name :"adhi",
//   number:100,
// }
// animalInfo.age = "2 jir" // waxaan ku sameeyay modify anigoo ku soo daray age
// animalInfo.name ="geel" // markaan waxan sameeyay (changing) oo markii hore (valuegeygu) wuxuu ahaa (adhi) haddana waxaan kadhigay(geel)

// console.log(animalInfo.name)
// console.log(animalInfo.number)
// console.log(animalInfo.age) // markana waxaan soo daabay age-kii aan gadaal kaga soo daray


// 3: Markaad rabto inaad objectigaaga wax ka dhillido 
// const personName ={
//   name:"ahmed",
//   age:33,
//   email:"ahmadow@gmail.com"
// }
// console.log(personName)
// delete personName.name // markan waa markaad rabto inaad (delete gareyso) key kamida values-kaaga
// console.log(personName)


//4: DESTRUCTIN OBJECT : waxay kuu ogolaanaysaa inaad kala baxdo properties ka shay (object) adigoo isticmaalaya magaca property-ga.
// const person ={
//   name:"ibrahim abdi",
//   age:22,
//   email:"abraham@gmail.com"
// }
// waxaan sameyn (DESTRUCTING) oo waxaan kala dhex baxayaa objecs gaara si uu iigu soo saaro kuwaas gaarka ah ee aan doortay
// const{name, age} = person
// console.log(name);
// console.log(age);

//4.1: DESTRUCTIN DEFAULT VALUE: Haddii property-ga uusan jirin, waxaad siin kartaa qiime default.

// const userProfile ={
//   name: "ahmed"
// }
// const{name, age=20} =userProfile
// console.log(userProfile )


const names ={
  name:"abdow",
  age: 22,
  email:"abdow@gmail.com"
}
console.log(names)
names.addres="amoud university"
console.log(names)
delete names.name
console.log(names)
