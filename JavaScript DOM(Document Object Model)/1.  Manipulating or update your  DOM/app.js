
//wax ka baddalka documentigaaga adigoo javascript jooga

//1: Accessing element by [Id]:
/* /* waxaan sameeyey markii hore
     (h1-keyga)waxaa ku jray qoral ah (header 1), waxaana ku baddalay qoraalkan (isbadal baa dhacay) */


//2: Accessing element by [Class]:
/* waxaan sameynayaa (elements) dhowr ah oo hal (class) oo isku mid ah wata ayaan rabaa inaan ka ugu horreeya 
wax ka baddalo, midh midh anigoo u dooranaya ayaan kuwa kale wax ka baddalya */

// let byClassTag = document.getElementsByClassName("tijaabo") // variable baan abuuray oo ku guray

// byClassTag[0].textContent="waan ku salaamay" // adigoo (variable-kagi) isticmaalaya ayaad (index)siineysaa
                                          //si aad wax uga badasho kaad rabto  kuuna soo daabaco 

// byClassTag[1].textContent="kani waa paragraphkii ugu horeeyay" // waxaan wax ka baddalay (Pragraphkaygi 1aad)
// byClassTag[2].textContent = "kana waa paragraphki labaad"// waxaan wax ka baddalay (Pragraphkaygi 2aad)



//3:  Accessing element by tagName
const element = document.getElementsByTagName("h1")
const paragraph1 =document.getElementsByTagName("p")

element[0].textContent = "changed the h1"
paragraph1[0].textContent ="changed the paragraphka koobaad"
paragraph1[1].textContent ="changed the paragraphka labaad"
paragraph1[2].textContent ="changed the paragraphka saddexaad"