/* Syntax of Fuction
  
// fuction fuctionname(parameters){
//     // code to be executed
 
//  }*/
// functionku wuxuu ka koobanyahay 1:KEYWORD 2: FUNCTION NAME 3:PARAMETERS 4:ARGUMENT
// function  greet(name, secondName, lastName){
//     console.log("Hello", '' + name, '' + secondName, '' + lastName);
// }
// greet('Ibrahim', 'Abdirashid', 'Ibrahim');

// const add = function(a,b){// qaabkan waxaa loo yaqaan FUNCTION EXPRESSION
//     return a+b

// }
// let sum = add(20, 30)
// console.log(sum)

// const multiply = function(a,b){
//     return a *b
// }
// let mulitp = multiply(20, 5)
// console.log(mulitp);

// function greet(name, age) {
//     console.log("my name is:",name+  ", and my age", +age);
// }
// greet("John", 22)
// greet("willum" , 65)
// greet("smith", 66)

/*=> waxaad soo daabacdaa function leh laba (PARAMETER) iyo laba (ARGUMENT)kaas oo sameyanaya inuu saabaco
  sannadaha inta u dhaxaysa 2015 ilaa 2024 */
function generateYear(start, end){
    for(let year = start; year <end; year++){
        console.log(year)
    }
    console.log(year)
}
generateYear(2015,2024)