// ODEV : Girilen sayının kaç basamaklı olduğunu bulan programı while loop ile yapınız 

let n=+prompt("Bir sayi giriniz")
let result=0;

while(n>0){
    n=Math.floor(n/10);
    result++;
  
} console.log(result);
