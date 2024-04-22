console.log("Hello I am a conditioned");

// let age = 45;
// let age = 16;
// let grace = 3;
// console.log(age + grace);


// if ((age + grace)>18) {
//     console.log("You can drive");
    
// }
// else{
//     console.log("You cannot drive");
// }
let age = 0;
if (age==18) {
    console.log("You can drive");
    
}else if (age==0){
    console.log("You are kids")

}
else
{
    console.loge("you cannot drive");
}

// ternary operator
a=8;
b=10;
let c = a > b ? (a-b) : (b-a);

/*
translate to:
if(a>b){
    let c = a-b;
}
else{
    let c = b-a;
}
*/