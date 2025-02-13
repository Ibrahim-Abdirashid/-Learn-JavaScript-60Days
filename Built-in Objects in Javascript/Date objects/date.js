
/* Date object waa walax ka dhisan JavaScript oo loo isticmaalo in lagu maamulo wakhtiga iyo taariikhda 
(dates and times). Waxay kuu ogolaaneysaa inaad ka shaqeyso xog la xiriirta taariikhda, saacadaha, daqiiqadaha,
 ilbiriqsiyada, iyo maalmaha usbuuca. */

 // DATE OBJECTS

 //1.CuurentDate() Waxaa inta badan loo isticmaalaa in la soo bandhigo taariikhda iyo waqtiga saxda ah ee haddda lagu jira.
//  let currentDate = new Date()
//   console.log(currentDate);

// //2.SpecificDate(): waxaa loo isticmaalaa abuuridda taariikh gaar ah, wuxuuna kuu sheegayaa taariikhda aad abuurtay maalinkay ahayd

// let SpecificDate = new Date("2023-12-14")
// console.log(SpecificDate);

//3.customDate(): waa in taariikh gaar ah la abuurayo ama mid horey u jirtay wax laga baddalayo
// let customDate = new Date(2024, 9, 25)
// console.log(customDate); //Outpust: wuxuu soora OCTOBER, 25, 2024, bisha wuxuu ka bilabaaya (0) oo index ahaan buu u tiranayaa
                      // innaga waxaa inoo qoran (bisha 9ad), balse Computerka  waxay u tahay (OCTOBER)

//4.FULL(): Helista sannadka, bisha, isbuuca maalintaas, bisha maalintaas, waqtiga maalintaa 
const today = new Date()
console.log(today.getFullYear()) //Outputs: 2024
console.log(today.getMonth()) //Outputs:(11) index ahaan buu u xisaabiyay, balse innaga waxay inoo tahay(December)
console.log(today.getDate()) //Outputs: 14, date-ka maalintan code-ka aan qorayo weeye
console.log(today.getDay()) //Outputs: 6, waa maalin sabti ah. (sababta uu sidan u soosaaray waxa weeye, 
                            //gaalada waxuu isbuucoodo u bilaabmaa isniin, (sabti iyo axadna) waa u maalmo fasaxeed)
console.log(today.getHours()) //Outputs: 11, wuxuu ii sheegayaa saacaddu markaas inta ay ahayd
console.log(today.getMinutes()) //Outputs: 5 daqiqo, wuxuu ii sheegayaa minute-ka la socday saacadda
 