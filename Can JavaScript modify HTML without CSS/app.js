
//Selecting
const paragraph = document.getElementById("styled-paragraph")
const buttonChangeStyle = document.getElementById("style-button")

// add event click

buttonChangeStyle.addEventListener('click', function(){
  //change the style of paragraph
  
  paragraph.style.backgroundColor ="blue"
  paragraph.style.color = "white"
  paragraph.style.fontSize = "20px"
  paragraph.style.fontWeight = "bold"
  paragraph.style.borderRadius ="10px"
  paragraph.style.textAlign = "center"

})