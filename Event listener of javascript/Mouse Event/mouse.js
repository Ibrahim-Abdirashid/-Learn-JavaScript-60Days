//(mouse event) 

const hoverbox = document.getElementById("hover-box")

//adding event listiner
//Mousedown
hoverbox.addEventListener('mousedown', function(){ /* eventiga (mousedown) wuxuu u shaqeynayaa markaad
  mouse-ka press gareyso ayuu is baddal sameynaya oo waxaad rabtay ayaa dhacayaa */
  hoverbox.style.backgroundColor = "blue"
  hoverbox.textContent = "is baddal samee"
  hoverbox.style.color ="white"
  hoverbox.style.fontSize = "20px"
  hoverbox.style.transition ="all .7s"
})

//mouseout
hoverbox.addEventListener('mouseout', function(){ /* eventiga (mouseout) wuxuu u shaqeynayaa marka aad
    mouse-ka ka dul qaado ayuu is baddali isna */
  hoverbox.style.backgroundColor = 'lightblue'
  hoverbox.textContent = "waan soo laabtay🤣😍"
  hoverbox.style.color = "black"
  hoverbox.style.transition ="all .7s"

})

//mousover (markaad mouse-ka u dul dhaweyso ayuu shaqeynayaa)
hoverbox.addEventListener('mouseover', function(){
  document.body.style.background = 'green'
  document.body.style.transition ="all .7s"

})


//mouseleave (markaad mouse-ka ka dul qaado ayuu shaqeynayaa isna)
hoverbox.addEventListener('mouseleave', function(){
  document.body.style.background = "red"
  document.body.style.transition ="all .7s"

})