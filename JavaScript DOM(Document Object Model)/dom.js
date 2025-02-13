/* 1: WAA MAXAY DOM? [DOCUMENT OBJECT MODEL]
  => inaad la macaamishid HTML-ka
  =>is a central interface that Javascript uses to access and manipulate Web pages.
  
  -DOM IS A LIKE A TREE STRUCTRE: waa sida geedka oo kale qaabka uu u sameysanyahay DOM-ku
  
  =>What is a node and Type of node? 
    -is any single unit within structure.
 
    =>Tyoes of node:
        1:[Element Node]: waa wixii elements ah sida (<p>, <body> <img>)
        2:[Text Node]: Waa elementiga waxa ku dhex jira sida (<p>Hello </p>) paragraphka waxa ku dhex jira ayaa loo yaqaan [TEXT NODE]
        3:[Comment Node]: isagu waa comment, waa waxaan browserka ka soo muuqaneyn
                         dadka developers-ka ayaa loogu tala galay iney isku fahmaan
        4:[Document Node]: the top most node representig the entire document
        5:[Attribute Node]: attribute-ku (element) la'aan ma jiri karo, oo mar walba element ayuu la socdaa waana kuwan(id, class)


=> Selecting/Accessing Elements Using DOM: qaabka elemenst loo select gareysto adigoo isticmaalaya (DOM):
                                          Waxaa loola jeedaa waxyaalaha kaa caawinaya inaad la macaamisho ama wax ka badasho
                                          document (HTML AH) adigoo jooga (Javascript)

   1:[document.getElementById]: waa markaad la macaamileyso tagname wata Attribute (id) ah sida (<h1 id="header-1"> Hello </h1>)
   2:[document.getElementByClass]: waa markaad la macaamileyso tagname wata Attribute (class) ah sida (<h2 class="header-2"> Hello </h2>)
   3:[document.getElementByTagname]:waa markaad la macaamileyso (tagname) sida (boy-ga) oo kale oo uusan wadan wax (Attribute ah sida) id and class
   4:[document.querySelector]: wuxuu soo select gareynayaa ka ugu horreeya, tusaale hadii page-kaaga ay ku jiraan(tag names) isku mida
    sida dhowr(h1), oo aad (querySelector ) isticmaasho wuxuu kuu soo doori (h1) ugu horreeya kuwa kale wuu iska ignore gareyn
   5:[document.querySelectorAll]: waa cagsiga (querySelector) oo kani wuxuu soo bandhigayaa iyagoo dhan 
   */



   //Accessing/selecting element by [tagname]
  //  const tagName= document.getElementsByTagName("h1") // si loo soo daabaco waa inaad variable abuurtaa oo ku shubtaa
  //  console.log(tagName)

  //Accessing/selecting element by [Class]
// let classTag = document.getElementsByClassName("paragraph")
// console.log(classTag)

  //Accessing/selecting elemetn by [Id]
// let idTag = document.getElementById("header-4")
// console.log(idTag)

 //Accessing querySelector
// let querySelect = document.querySelector("#container")  /* [container 1] ayuu ii soo saari, sidoo kale marka querySelector la isticmaalayo
//                                                      waa inaad calaamadda (id-ga)ka horreysiisaa */
// console.log(querySelect);



//Accessing querySelectorAll
// let querySelectAll = document.querySelectorAll("#container")
// console.log(querySelectAll)

let classTag = document.getElementsByClassName("paragraph")
classTag.textContent="Abraham Coding"


document.getElementById("header-4").textContent = "waraa istaag saxib"