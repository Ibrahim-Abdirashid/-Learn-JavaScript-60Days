
/* MAP: method creates new array by applayin a function to each element of an existing array.
  it doesn't change the original array */

// 1: (MAPPING)
  const orders = [
    {id : 1, customer: "Ibrahim", total: 100, status: "shiped"},
    {id : 2, customer: "ahmed", total: 89, status: "shiped"},
    {id : 3, customer: "farah", total: 90, status: "pending"},
    {id : 4, customer: "abdi", total: 90, status: "delivered"},
    {id : 5, customer: "hassan", total: 90, status: "pending"},
    {id : 6, customer: "muscab", total: 89, status: "delivered"},
    {id : 7, customer: "ayub", total: 50, status: "pending"},
  ]
  // hadeer waxaan sameynayaa (MAPPING) oo waxaan doonayaa customerka magacyadooda uun inaan la soo baxo
  const customerName = orders.map(order => order.customer)
  console.log(customerName)

  //2:(FILTERING) haddana waxaan doonayaa inaan kala shaandheeyo oo aan soo saarto customerka pendinka ah oo kaliya

  const pendingOrders = orders.filter(order => order.status=== "pending")
  console.log(pendingOrders)

/* 3:REDUCE
    reduce() waa advanced array method oo muhiim ah marka la isticmaalayo JavaScript. Waxay u oggolaanaysaa 
    inaad ku soo koobto ama aad ka soo saarto hal qiime array dhan, iyadoo la isticmaalayo callback function.
     Waxaa loo isticmaalaa marka aad rabto inaad sameyso hawlaha ay ka mid yihiin:

1:Isugeyn: Isku geynta dhammaan waxyaabaha ku jira array.
2: Abuurista Object: Soo saaridda object cusub iyadoo la adeegsanayo xog ka timaadda array.
3: Shaqaalaha Xisaabeed Kharash-yareyn ama Abaabul: Sida max, min, isku duwid, iwm. */

// Wuxuu leeyahay laba qiimo oo kala ah (ACCUMULATOR ) IYO (CURREN VALUE).
// Code-ka hore ee ahaa E-COMMERCIGA ayaan ku sii dabaqayaa (REDUCE-KA)

const totalShipedRevenue = orders.reduce((total, order ) =>{
  if(order.status ==="shiped"){
    return total +order.total
  }return total
},0)
console.log(totalShipedRevenue)


