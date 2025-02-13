
// waxaan sameynayaa (button) kaas oo sameynaya inuu background-ka page-ka colorkiisa uu baddalo


//select the button element
const colorButton = document.getElementById("color-button")

// waxaan abuurayaa (function) kaas oo baddalaya marka click la siiyo (colorka) page-ka
function changeBackgroundColor(){
  document.body.style.backgroundColor="red"
}
// // haddana waxaan abuurayaa (event listener) kaas oo ah marka click buttonka lagu siiyo shaqada dhacaysa kii qabanayay

colorButton.addEventListener('click' ,changeBackgroundColor)