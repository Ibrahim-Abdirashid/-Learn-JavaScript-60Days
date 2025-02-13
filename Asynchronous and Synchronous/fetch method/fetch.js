
/*1: (fetch) waa API casri ah oo JavaScript ku dhisan oo loo isticmaalo in xog laga soo qaado
 ama loo diro (server) (e.g., API). Waxay ku shaqeysaa hab (asynchronous), taasoo micnaheedu yahay 
 inaysan sugin inta xogta ka imaneyso server-ka; wax kale way sii socon karaan.

 2: Sidee fetch u shaqeeyaa?
   =>Waxaad u isticmaashaa inaad:
      1:Xog ka raadiso server (GET requests).
      2:Xog ku dirto server (POST requests).
   => (fetch): waxay kuu soo celisaa Promise, taasoo kuu oggolaanaysa inaad maamusho natiijada:
      1:Haddii ay guuleysato, then() ayaa lagu qabsadaa xogta.
      2:Haddii ay khalad dhacdo, catch() ayaa lagu qabanayaa khaladka. */


  fetch("https://jsonplaceholder.typicode.com/posts/1") // URL-ka xogta
  .then((response) => response.json()) // Xogta u badal JSON, qaab aan annagu akhrin karno
  .then((data) => console.log(data)) // Daabac xogta
  .catch((error) => console.error( error)); // Qabso khaladka, wixii error ah ayuu (catch-ku) inuu haynayaa


