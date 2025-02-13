//(MATH OBJECT:) waa mid kamida BUILT IN OBJECTS IN JAVASCRIPT
//Common methods-ka (MAATH) ugu horreeya waxa weeye :

/*1.Math.round(): Wuxuu u shaqeeyaa in numberka (pointiga wata) hadii uu (POINTIGU) uu ka yaraado .5 
 sidan oo kale (5.4) wuxuu u duubi (5). Hadiise uu pointigu uu noqdo ama ka bato .5 sidan oo kale (5.6 / 5.5) wuxuu u duubayaa (6) */

//  console.log(Math.round(5.6)); // output : 6


//  console.log(Math.round(5.5)); // output: 6


// console.log(Math.round(5.4)) // output: 5

/*2.Math.floor(): wuxuu u shaqeynayaa inuu wixii (NUMBER POSITIVE AH )oo point wata, pointigaasi
intuu doono ha ahaado sida (5.5, 5.9, 5.4) wuxuu u celiyaa lanbar buuxa oo hoos ah wuxuuna ka wada dhigayaa (5 buura) 
  => sidoo kale wixii (NUMBER MINUS AH) oo point wata, pointigaasi
intuu doono ha ahaado sida (-5.5, -5.9, -5.1) wuxuu u celiyaa lanbar buuxa oo kor wuxuuna ka wada dhigayaa (6) */

//POSTIVE NUMBERS
// console.log(Math.floor(5.5)); //OUTPUT : 5

// console.log(Math.floor(5.1));// OUTPUT : 5

// console.log(Math.floor(5.9));// OUTPUT : 5

// //NEGATIVE NUMBERS

// console.log(Math.floor(-7.7)) //output: -8
// console.log(Math.floor(-7.1)) //output: -8

// 3. Math.pow(): waxaa loo isticmaalaa in lagu helo (POWER OF NUMBER) 
// console.log(Math.pow(4, 2)) // output: 16
// console.log(Math.pow(2, 8)) // output: 256

// //4.Math.max(): Habkan waxaa loo isticmaalaa in lagu helo tirada ugu weyn (maximum) ee ku dhex jirta liis  dhowr tiro ah.
// console.log(Math.max(100, 200, 50)) //output: 200

// //5. Math.min() Habkan waxaa loo isticmaalaa in lagu helo tirada ugu yar (minimum) ee ku dhex jirta liis tirooyin ah.
// console.log(Math.min(10, -50, 100, 2, 200))//output: -50

/*6.Math.random():  waxaa loo isticmaalaa in lagu soo saaro tira aleatoriya (random number) oo u dhexeeya 0 iyo ka yar 1 ([0, 1)).
 Waxay soo celisaa lambar decimal ah oo qalafsanaan leh. */
 console.log(Math.random()); // Outputs: 0.734567812345 (wax lambar decimal ah)
 console.log(Math.random()); // Outputs: 0.123456781234 (tira cusub markasta oo la waco mar walba tiro cusub ayaa soo baxaysa)
// SIDEE LOOGA SAARI KARAA (DECIMALKA) ADIGOO ISTICMAALAYA(RANDOM), HADDA WAxaan rabaa inaan soo daabaco tiro u dhaxeysa (0 ilaa 9)

console.log(Math.floor(Math.random() *10 ))// Outputs: 8 (marba way is baddalaysaa, oo wuxuu kuu soosaarayaa lanbar cusub oo u dhexeya 0 -9)


