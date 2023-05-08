res = sumDigits(1234);
console.log(`res = ${res}`); // res = 10;
res = luckyNumber(1237126); //1 + 2 + 3 == 8 + 7 + 1;
// res = luckyNumber(1234321); 1 + 2 + 3 == 3 + 2 + 1;
console.log(res ? 'Lucky' : 'Unlucky');
res=banana();
// console.log(`res = ${res}`);

function sumDigits(x) {
    let sum = 0, y = String(x);

    for (let i = 0; i < y.length; i++) {

        sum += Number(y[i]);
    }
    return(sum)

}


function luckyNumber(x) {
   let sum1=sum2=0;
   y = String(x);
   for (let i = 0; i < 3; i++){
sum1+=+y[i];
   }
   for(let i=y.length-3; i<y.length; i++) {
    sum2 += +y[i];
    
}
return (sum1===sum2);
   }


function banana() {
    let a = 'a';
    let b = 'b';
res=(b+a+ +a+a).toLowerCase();
 console.log(res);
}
// 'b', 'a' => banana;