
/*1: Waa maxay Promises?
Promise waa hab lagu maareeyo shaqooyinka (asynchronous) ee JavaScript. Waa "ballan" oo sida magaca ka muuqata,
 waxay ballan qaadaysaa inay fuliso shaqo. Shaqadaasi waxay noqon kartaa:

  =>La guuleystay (fulfilled): Wax walba si sax ah ayay u shaqeeyeen.
  =>La guuldareystay (rejected): Wax khalad ah ayaa dhacay.
  =>Mid socota (pending): Weli waxba ma dhammeyn.

2: Sidee u shaqeeyaan Promises?
Promise waxaa loo isticmaalaa in lagu qabto shaqooyin qaata waqti si ay u dhammaadaan, sida:

  =>Helitaanka xogta server-ka (API calls).
  =>Sugitaanka xogta asynchronous.
  =>Waxay leedahay saddex xaaladood:
      -Pending: Shaqadu wali way socotaa.
      -Resolved (Fulfilled): Shaqadu si guul ah ayay u dhammaatay.
      -Rejected: Khalad ayaa dhacay.

3: Maxaa loo isticmaalaa Promises?
  =>Xog ka keenista server (API calls):
       -Xog raadinta (e.g., fetch).
  =>Shaqooyin qaata waqti si ay u dhammaadaan:
       -Sugitaanka database-ka.
       -Dib u dhigid la qorsheeyey (setTimeout).
  =>Maareynta khaladaadka (Errors):
       -Waxay fududeysaa in la ogaado meesha khaladka dhacay. */

const myPromise = new Promise((resolve, reject)=>{
  const success = true;
  if(success){
    resolve("the operaton is successfully")
  }
  else{
    reject("hte operation failed")
  }
});

myPromise
.then((data)=>{
  console.log(data)
})

.catch((error)=>{
  console.log(error)
})