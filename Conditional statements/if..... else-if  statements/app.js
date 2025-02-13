
/* if-else if-else statement: waxaa loogu tala galay multiple conditonska
wuxuuna u shaqeeyaa marba condition buu eegi haduu RUN noqdi conditionka ugu
horreeya halkaads ayuu ku istaagi, balse hadii uu BEEN noqdo condtionka xiga
 ayuu u gudbi */

let age = 15;

if(age < 13){
  console.log("caruur baa tahay");
}
else if(age >= 13 && age < 20 ) // kan ayuu soo daabici sababtoo ah ka koobad wuu ka boodi
                                //kan waxa weeye hadii age-ku wuu ka weynyahay 13 una dhaxeeyo ilaa 20 soo daabac dhalinyaraa tahay
{
  console.log("dhalinyaraa tahay");
}
else if (age >= 20 && age < 60){
  console.log("da' ayaad tahay")
}
else{
  console.log("qof jiraba mahan")
}