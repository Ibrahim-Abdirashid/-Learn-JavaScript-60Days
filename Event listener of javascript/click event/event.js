
//marka ugu horreysa waa inaan access gareeyaa buttonkeygii

const clickButton = document.getElementById("click-button")
const clickResult = document.getElementById("click-result")

// add click event (waxaan sameynayaa inaan event abuuto si marka buttonka click loogu sameeyo action dhaco)

clickButton.addEventListener('click', function(){
  clickResult.textContent = "wax hala barto, waqtigana halaga faa'ideysto"
})
