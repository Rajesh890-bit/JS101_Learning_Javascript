let num1=1;
let num2=100;

let sum=0;
let count=0;

while(num1<=num2){
  if(num1%2==0){
    sum=sum+num1;
    count++;
  }
  num1++;
}
console.log("Avrage of even number from",1,"to",num2,"is",sum/count);