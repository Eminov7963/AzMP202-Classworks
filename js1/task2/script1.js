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