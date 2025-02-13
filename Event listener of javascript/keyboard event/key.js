
//(keyboard event) wuxuu u shaqeeyaa in keyboardka lagu isticmaalayo


const keydownInput = document.getElementById("keydown-input")
 const keydownResult = document.getElementById("keydown-result")

 // Add keyboard event

 keydownInput.addEventListener('keydown', function(){
  keydownResult.textContent = 'keydown even : you pressed ${event.key} key.'
 })