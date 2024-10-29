// let num1 = +prompt("1ci ededi daxil edin")

// if(num1 > 90 && num1 < 100){
//     console.log("A")
// }
// else if(num1 > 80 && num1 < 90){
//     console.log("B")
// }
// else if(num1 > 70 && num1 < 80){
//     console.log("C")
// }
// else if(num1 > 60 && num1 < 70){
//     console.log("D")
// }
// else if(num1 < 59){
//     console.log("F")
// }

// let num1 = +prompt("yasi daxil edin")

// if(num1 < 18){
//     console.log("Yeniyetme")
// }
// else if(num1 > 18 && num1 < 64){
//     console.log("Yetkin")
// }
// else if(num1 > 65){
//     console.log("Yasli")
// }



// let num1 = +prompt("saati daxil edin")

// if(num1 > 1 && num1 < 12){
//     console.log("Sabahin xeyir")
// }
// else if(num1 > 12 && num1 < 19){
//     console.log("Gunortan xeyir")
// }
// else if(num1 > 19 && num1 < 24){
//     console.log("Axsamin xeyir")
// }


let x = +prompt("1ci ededi daxil edin");
let y = +prompt("2ci ededi daxil edin");
let result = 0
if(x > 0 && y < 0){
    result = 4*x+2*y+4;
}
else if(x > 0 && y === 0){
    result = 2*x-y+3;
}
else if(x < 0 && y > 0){
    result = 3*x+4*y+3;
}


console.log(result);
