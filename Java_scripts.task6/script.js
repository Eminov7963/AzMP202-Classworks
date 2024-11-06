// TASK 1.1 : Məhsulların hər birini consoleda göstərin.
// TASK 1.2 : Məhsullardan id-si 1-ə bərabər olan məhsulu qaytaran funksiya yazın.
// TASK 1.3 : FatPercent-in ədədi ortasını çıxarın. Bunu FatAverage adlı funksiya ilə edin. Funksiya həmin arrayi parametr kimi qəbul edəcək, ədədi ortanı qaytaracaq.
// Task 1.4 : yağlılıq faizi 3-dən yuxarı olan milk-ləri arraydə göstərin. Funksiya yazın.
// Task 1.5 : Funksiya yazın array və bir number qəbul etsin. Arraydəki elementlərin price-nı bu number qədər artırsın.
// Task 1.6 : Ümumi price-ı qaytaran funksiya yazın.
// Task 1.7 : Məhsullardan id-si 2-ə bərabər olan məhsulu qaytaran funksiya yazın.
// Task 1.8 : ən baha milkin adını qaytaran funksiya yazın. Arrayi parametr kimi qəbul etsin
// Task 1.9 : ən baha və ən ucuz arasındakı fərqi qaytaran funksiya yazın. Funksiya yazın.
// Task 1.10: Məhsullar içərisində Azərbaycan istehsalı olan məhsul varmı?(true or false)
//
// Qeyd: Funksiyaları yazarkən, array iteration methodlarından istifadə edin.

let milks = [
  {
    id: 1,
    name: "Azersud",
    price: 5,
    FatPercent: 1.5,
    MadeIn: "Azerbaijan",
  },
  {
    id: 2,
    name: "Palsud",
    price: 4,
    FatPercent: 2,
    MadeIn: "Azerbaijan",
  },
  {
    id: 3,
    name: "Atena",
    price: 2,
    FatPercent: 3,
    MadeIn: "Georgia",
  },
];

// TASK 1.1 : Məhsulların hər birini consoleda göstərin.

// milks.forEach((element) => {
//     console.log(element);

// })

// TASK 1.2 : Məhsullardan id-si 1-ə bərabər olan məhsulu qaytaran funksiya yazın.
// let mehsul = milks.find((element) => {
// return element.id ===1
//
// })
// console.log(mehsul);

// TASK 1.3 : FatPercent-in ədədi ortasını çıxarın. Bunu FatAverage adlı funksiya ilə edin. Funksiya həmin arrayi parametr kimi qəbul edəcək, ədədi ortanı qaytaracaq.

// const fatAverage =  milks.reduce((sum,item)=> sum + item.FatPercent,0) / milks.length

// console.log(fatAverage);

// Task 1.4 : yağlılıq faizi 3-dən yuxarı olan milk-ləri arraydə göstərin. Funksiya yazın.

// const fatAverage =  milks.filter((item, index, array)=> item.FatPercent >= 3)
//
// console.log(fatAverage);

// Task 1.5 : Funksiya yazın array və bir number qəbul etsin. Arraydəki elementlərin price-nı bu number qədər artırsın.

// let new_milk = milks.map((item)=>{
//     return item.price + milks.length
// })
// console.log(new_milk);

// Task 1.6 : Ümumi price-ı qaytaran funksiya yazın.

// let new_milk = milks.reduce((sum,item)=>{
//     return sum + item.price;
// },0)
// console.log(new_milk);

// Task 1.7 : Məhsullardan id-si 2-ə bərabər olan məhsulu qaytaran funksiya yazın.
// let new_id = milks.filter((item)=>{
//     return item.id == 2;
// })
// console.log(new_id);

// Task 1.8 : ən baha milkin adını qaytaran funksiya yazın. Arrayi parametr kimi qəbul etsin
// let new_id = milks.find((item)=>{
//     let maxPrice = milks[0];
//     if(item > maxPrice.price){
//         maxPrice = item.price
//     }
//     return maxPrice.name
// });
// console.log(new_id.name);



// Task 1.9 : ən baha və ən ucuz arasındakı fərqi qaytaran funksiya yazın. Funksiya yazın.
//     let priceDifference = milks.reduce((acc, item) => {
    
//     if (item.price > acc.maxPrice) {
//       acc.maxPrice = item.price;
//     }f
   
//     if (item.price < acc.minPrice) {
//       acc.minPrice = item.price;
//     }
    
//     return acc; 
//   }, { maxPrice: milks[0].price, minPrice: milks[0].price }); 
  
//   let difference = priceDifference.maxPrice - priceDifference.minPrice; 
  
//   console.log(difference); 

// Task 1.10: Məhsullar içərisində Azərbaycan istehsalı olan məhsul varmı?(true or false)
let bool = milks.some((element) => element.MadeIn === 'Azerbaijan');
console.log(bool);
