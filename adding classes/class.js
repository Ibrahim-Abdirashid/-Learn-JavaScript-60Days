
/*(classList)waa API ku jira (JavaScript) oo si sahlan loogu maamulo  CSS ee qaybaha HTML (elements).
 Waxaa lagu isticmaalaa  (add), (remove), (replace), ama lagu (toggle) . */


// selecting/Accesing 

const paragraph = document.getElementById('paragraph')
const addClassButton = document.getElementById('add-class-button')
const removeClassButton = document.getElementById('remove-class-button')
const togleVisibilitButton = document.getElementById('togle-visibility-button')

// add events
addClassButton.addEventListener('click', function(){
  paragraph.classList.add('highlight')
})

removeClassButton.addEventListener('click', function(){
  paragraph.classList.remove('highlight')
})

// wuxuu sameynaya hidden ama qarin marka buttonka (click) la siiyo
// togleVisibilitButton.addEventListener('click', function(){
//   paragraph.classList.toggle('hidden')
// })


// qaab kale ayaa jiri oo hidden loo sameeyo oo ah
togleVisibilitButton.addEventListener('click', function(){
  paragraph.hidden = true;
})
