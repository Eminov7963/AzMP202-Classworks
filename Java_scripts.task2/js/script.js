// for (let i = 0; i <= 100; i++) {
//     if(i % 2 == 0){
//         console.log(i);
//     }
//   }
// let count = 0;
// for (let i = 0; i <= 100; i++) {
//     if(i % 2 == 1){
//         count++;
//         console.log(count);
//     }
//   }

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     if(i % 5 == 0){
//         sum = sum + i
//         console.log(sum);
//     }
//   }

// let arr =[12,14,35,56,68,93]
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];

//   }
//   console.log(sum);

//   let arr =[12,14,35,56,68,93]

//   for (let i = 0; i < arr.length; i++) {
//           if( i % 2 == 1){
//             console.log(arr[i]);
//           }

//     }

// let arr =[12,14,35,56,68,93]
// let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//           if( i % 2 == 0){
//             sum = sum + arr[i]
//             console.log(sum);
//           }

//     }

// let arr = [12, 14, 35,158, 56, 68, 93];
// let largest = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]>largest){
//         largest=arr[i]
//     }

// }
// console.log(largest);

// let arr = [12, 14, 35, 56, 68, 93];
// let little = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]<little){
//         little=arr[i]
//     }

// }
// console.log(little);

// let arr = [12, 14, 35, 56, 68, 93];
// let little = arr[0]
// let big = arr[1]
// let ferq = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]<little){
//         little=arr[i]
//     }
//     if(arr[i]>big){
//         big=arr[i]
//     }
//     ferq = big - little;

// }
// console.log(ferq);

// let arr = [12, 14, 35, 56, 68, 93];
// let verilmis_eded = 25;
// for (let i = 0; i < arr.length; i++) {
//     if(verilmis_eded == arr[i]){
//         console.log("verilmis eded var")
//         break;
//     }
    
// }



// const employees = [
//     { name: "Jamil", salary: 50000, department: "IT" },
//     { name: "Jale", salary: 60000, department: "HR" },
//     { name: "Bayram", salary: 55000, department: "IT" },
//     { name: "Sahil", salary: 75000, department: "HR" },
//     { name: "Maryam", salary: 65000, department: "IT" },
//     { name: "Elnara", salary: 80000, department: "HR" },
//     { name: "Davud", salary: 70000, department: "IT" },
//   ];

//   for (let i = 0; i < employees.length; i++){
//     if (employees[i].salary>60000){
//         console.log(employees[i].name);
//     }
//   }

// let eded = +prompt("ededi daxil edin");
// let fakt = 1;
// for (i= 1; i <= eded; i++){
//     fakt*=i;
// }
// alert(fakt)

// let str = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, nam!"
// let num = 0;
// for (let i = 0; i < str.length; i++){
//     if(str[i]==="l"){
//         num++;
        
//     }
// }
// console.log("count of l",num);

// const countries = ["azerbaijan", "norwey", "albania", "germany","america"]
// for (let i = 0; i < countries.length; i++){
//     if(countries[i][0] === "a" ){
//         console.log(countries[i]);
        
//     }
// }

// const countries = ["azerbaijan", "norwey", "albania", "germany","america"]
// for (let i = 0; i < countries.length; i++){
//     if(countries[i][0] === "a" && countries[i][countries[i].length - 1] === "a"){
//         console.log(countries[i]);
        
//     }
// }

// let n = 427;
// while(n > 0){
//     let reminder = n % 10;
//     console.log(reminder);
//     n = (n - reminder) / 10;
// }
// }
// let eded = +prompt('ededi daxil edin')
// let prime = true
// for (let i = 2; i < Math.sqrt(eded); i++){
//     if(eded % i === 0){
//         prime =false
//         break;
//     }
// }

const scores = [60, 79, 88, 75, 93, 45];
let sum = 0;
let result;
for (let index = 0; index < scores.length; index++) {
    sum = sum + scores[index]
    result = sum / scores.length
    
    
}
console.log(result);
    
