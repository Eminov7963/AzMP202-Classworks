// class Person {
 
//     constructor(name, age, country) {
//         this.name = name;
//         this.age = age;
//         this.country = country;
//     }
//     displayDetails() {
//         console.log(`Name: ${this.name}`);
//         console.log(`Age: ${this.age}`);
//         console.log(`Country: ${this.country}`);
//     }
// }
// const person1 = new Person("Emin" , 20 , "Azerbajan")
// const person2 = new Person("ferdi" , 40 , "Azerbajan")



// console.log("Person 1 Details:");
// person1.displayDetails();

// console.log("\nPerson 2 Details:");
// person2.displayDetails();   


// 2)
// Bir class yaradirsiz ve o classin icerisinde plus, minus, multiply, divide functionlari olur.
// var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2) resultin neticesi bu yazilisa gore 50+6-30*3/2 mentiqi ile 
// (riyazi prinsibi unudun,vurma bolme onceliyine ehtiyac yoxdu) 39 olmalidi.

// class CustomMath {
//     constructor(value) {
//       this.value = value;
//     }
  

//     plus(num) {
//       this.value += num; 
//       return this; 
//     }   
  

//     minus(num) {
//       this.value -= num; 
//       return this; 
//     }


//     multiply(num) {
//       this.value *= num; 
//       return this; 
//     }
  

//     divide(num) {
//       if (num === 0) {
//         throw new Error("Division by zero is not allowed.");
//       }
//       this.value /= num; 
//       return this; 
//     }
  

//     getResult() {
//       return this.value; 
//     }
//   }
  

//   let result = new CustomMath(50)
//     .plus(6)   
//     .minus(30)
//     .multiply(3) 
//     .divide(2)  
  
//   console.log(result.getResult()); 


