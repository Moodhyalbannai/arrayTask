let counter1 = 10;

while(counter1 > 5){
    console.log(counter1);
    counter1--;
}
// this can be written as for(), these two are excatly the same

for(let counter2=10;counter2>5;counter2--){
    console.log(counter2);
}

//first identify that counter is 10 (works ony one time) the rest will continue working


//print like this





const coffees = ["latte", "flat white", "americano"];
for (let counter4 = 0; counter4 < coffees.length; counter4++){
    console.log(counter4);
    console.log (coffees[counter4]);
}




for (let n = 1; n <= 10; n++){
    console.log(n);
}


for(let x=2; x<=20; x=x+2){
    console.log(x);
}


let counter5 =1;
let sum1 = 0;
while(counter5 <= 100){
    sum1 += counter5; //or sum = sum + counter3
    counter5++;
}



const numbers = [3, 5, 10, 20];
let sum4 = 0;
for(let counter6 = 0; counter6 < numbers.length; counter6++){
sum4 = sum4 + numbers[counter6];
}

console.log(sum4);
