

// LEXICAL SCOPE: Wuxuu u shaqeeyaa inaad function function kale ku dhex qori kartid, 

function outerFuction(){
  let outerVar = "I'm out side!"

  function innerFunction(){
    console.log(outerVar)
  }
    innerFunction()

}
outerFuction()