/*  (Local Storage) iyo (Session) Storage waa laba nooc oo kaydinta xogta browser-ka oo la isticmaalo
 marka laga shaqeynayo JavaScript. Labadooduba waxay kuu oggolaanayaan inaad xog u keydiso si ku-meel-gaar ah, 
 laakiin waxay ku kala duwan yihiin sida ay u shaqeeyaan iyo inta ay xogta u kaydiyaan.

1:Local Storage
  Local Storage waa nooc kaydin browser ah oo xogta lagu hayn karo muddo dheer. 
  Xogta waxay sii jiraysaa xitaa haddii aad bogga dib u xirto ama browser-ka dib u bilowdo. */

// Xog ku darida Local Storage
localStorage.setItem("username", "Ibrahim");

// Helitaanka xogta
const username = localStorage.getItem("username");
console.log(username); // Ibrahim

// Tirtirista xogta
localStorage.removeItem("username");

// Nadiifinta dhammaan xogta
localStorage.clear();


/*(2:Session Storage):
  Session Storage waxay xogta keydisaa inta uu furan yahay session-ka browser-ka (bogga).
  Haddii bogga la xiro ama dib loo furo, xogta way lumi doontaa. */

// Xog ku darida Session Storage
sessionStorage.setItem("userId", "12345");

// Helitaanka xogta
const userId = sessionStorage.getItem("userId");
console.log(userId); // 12345

// Tirtirista xogta
sessionStorage.removeItem("userId");

// Nadiifinta dhammaan xogta
sessionStorage.clear();
