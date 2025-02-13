
/*1:(Synchronous):step by step ayuu u dhacaa laba shaqo hadii la qabanayo waxaa khasab ah shaqada
hore iney dhamaato, kadibna shaqada labaad la qabto . Inta shaqada hore socoto ta danbena wey sugeysaa
 ilaa inta ay ta hore ka dhamaaneyso
  =>EXAMPLE : Hooyo waxay karineysaa shaah, markay dhammayso shaaha ayey billaabaysaa kadib inay saxamada dhaqdo.*/
  

  //labadan function wey iska soo daba dhacayaan markuu kan 1aad dhaco, ka 2aad ayaa isna dhacaya
// function taskOne(){
//   console.log("task one is completed..")
// }
  
// function taskTwo(){
//   console.log("tak two is completed..")
// }
// taskOne();
// taskTwo();


/*1:(Asynchronous): Shaqooyinku am Code-ku halmar ayuu wada dhacayaa labada code, midba midka kale ma sugayo 
  =>EXAMPLE: waa iney hooyo wada qabato shaah karin iyo saxan dhaqid, iyadoo dhinacna shaah ka karineysa 
   dhinaca kalena suxuunta ka dhaqdo*/


//function-kaas sare ee aynu soo abuurnay ee iska soo daba dhacaya ayaynu u baddaleynaa (Asynchronous)

// marka ugu horreysa waxaa soo baxaya (function taskTwo), 3 second ka dib waxaa ka soo daba dhacayaa (function taskTwo)
function taskOne(){
  setTimeout(()=>{
     console.log("task one is completed")
    },3000);// waxay u taagan tahay (3 second) oo ah shaqadan 3 second kadib in la soo daabaco marka (function two dhaco)
}
  
function taskTwo(){
  console.log("task to is completed")
}

taskOne();
taskTwo();