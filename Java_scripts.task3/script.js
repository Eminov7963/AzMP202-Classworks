// 1.Verilmiş arraydə cüt ədədlərin ən böyüynü tapan alqoritm yazin.
// let array = [101,102,12,23,43,54,65,67,89,90,100];
// let eded;
// let max = array[0];
// for (let i = 0; i < array.length; i++) {
//     if( array[i] % 2 == 0){
//         eded = array[i]
//         if( max < eded){
//             max = eded;
//             console.log(max);

//         }
//     }

// }

// 2.Verilmiş arraydə tək indexdə duran ən böyük tək ədədi tapan alqoritm yazin.
// let array = [101,103, 105,102, 12, 23, 43, 54, 65, 67, 89, 90, 100];
// let eded;
// let max = array[0];
// for (let i = 0; i < array.length; i++) {
//   if (i % 2 == 1) {
//     if(array[i]%2==1){
//         if(array[i]>max){
//             max=array[i];
//             console.log(max)
//         }

//     }

//   }
// }
// 3.Verilmiş arraydə ən böyük və ən kiçik ədədlərini hasili ilə cəmini müqasiyə edin.
// let array = [7,12,23,43,54,65,67,89,90,100,83]
// let big = array[0];
// let small = array[0];
// for (let i = 0; i < array.length; i++) {
//     if(big < array[i]){
//         big = array[i];
        
//     }
//     if(small > array[i]){
//         small = array[i];
//     }
    
    
    
// }
// console.log(big , small);
// let hasil = big * small;
// console.log(hasil);
// let sum = big + small;

// if(hasil > sum){
//     console.log(`en boyuyu ${hasil}`);
    
// }
// else{
//     console.log(sum);
    
// }

// 4.Verilmis ədədin reqemlerinin cemini tapan alqoritm yazin.
// let n = 143;
// let yuzluk = Math.floor(n / 100);
// let onluq = Math.floor((n % 100) / 10);
// let teklik = n % 10;
// let sum = yuzluk + onluq + teklik;
// console.log(sum);

// 5.Verilmiş arraydə ən böyük ədədlə ən kiçik ədədin yerini dəyişin.
// let array = [12,23,43,54,65,67,89,90,100]
// let big = array[0];
// let small = array[0];
// for (let i = 0; i < array.length; i++) {
//     if(big < array[i]){
//         big = array[i];
        
//     }
//     if(small > array[i]){
//         small = array[i];
//     }
// }

// 6.Verilmiş arraydə təkrərlanan elementi tapin.
// let array = [12,23,43,12,54,65,67,89,90,100]
// let tekrarlanan = array[i]
// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
        
        
//     }
// }
// 7.Verilmiş arraydə ən böyük və ən kiçik ədədin hasilini arrayin ədədi ortasi ilə müqasiyə edin.
// let array = [12,23,43,12,54,65,67,89,90,100]
// let maxeded = Math.max(...array);
// let mineded = Math.min(...array);
// let multiply = maxeded * mineded;
// let sum = maxeded + mineded;
// let ededi_orta = sum / 2
// console.log(ededi_orta);

// 7.
// Bu array-dəki insanların orta yaşını hesablayın.
// let people = [
//     { name: "Aysel", age: 25 },
//     { name: "Rəşad", age: 30 },
//     { name: "Leyla", age: 18 },
//     { name: "Kamal", age: 40 }
// ];
// let sum = 0;
// for (let i = 0; i < people.length; i++) {
//     sum += people[i].age
    
// }
// console.log(sum / people.length);

// 8.city dəyəri Bakı olan və yaşı 20-dən böyük olan insanları tapıb adlarını çıxarın.
// let people = [
//     { name: "Aysel", age: 25, city: "Bakı" },
//     { name: "Rəşad", age: 30, city: "Gəncə" },
//     { name: "Leyla", age: 18, city: "Bakı" },
//     { name: "Kamal", age: 40, city: "Sumqayıt" }
// ];
// let result = [];
// for (let i = 0; i < people.length; i++) {
//     if (people[i].city === "Bakı" && people[i].age > 20){
//         result.push(people[i].name);    
//     }
    
// }
// console.log(result);
// 10. İki Array-də Eyni Elementlərin Tapılması
// let array1 = [1, 3, 5, 7];
// let array2 = [2, 3, 6, 7, 8];
// let result = [];
// for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//         if (array1[i] == array2[j]){
//             console.log(array1[i]);
            
//         }
        
//     }
    
// }

// 11.Verilmiş arraydə mənfi və müsbət ədədlərin sayini tapin.

// let array =[-10,12,-23,40,60,73,-6,-20];
// let negative = 0;
// let positive = 0;
// for (let i = 0; i < array.length; i++) {
//     if(array[i]>0){
//         positive++
        
//     }
//     else if (array[i]<0){
//         negative++
        
//     }
        
    
// }
// console.log(`positive ${positive}`);
// console.log(`negative ${negative}`);

// 12.Verilmiş arraydə mənfi ədədlərin hasili ilə müsbət ədədlərin hasilini müqasiyə edin.
// let array =[-10,12,-23,40,60,73,-6,-20];

// let menfi_hasil= 1
// let musbet_hasil = 1
// for (let i = 0; i < array.length; i++) {
//     if(array[i]>0){
//         musbet_hasil *= array[i]
        
//     }
//     else if (array[i]<0){
//         menfi_hasil *= array[i]
        
//     }    
// }
// console.log(menfi_hasil);
// console.log(musbet_hasil);
// if(menfi_hasil>musbet_hasil){
//     console.log("menfi boyukdur mubet ededlerin hasilinden");
    
// }
// else{
//     console.log("musbet boyukdur menfi ededlerin hasilinden");

// }

// 13.Verilmiş arrayi tərsinə çevirib yazin.
// let array =[-10,12,-23,40,60,73,-6,-20];
// let reserved = []
// for (let i = array.length-1; i >= 0; i--) {
//     reserved.push(array[i])
// }
// console.log(reserved);
