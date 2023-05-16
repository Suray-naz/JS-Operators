// !ODEV1 : Girilen sayının kaç basamaklı olduğunu bulan programı while loop ile yapınız 

// let n=+prompt("Bir sayi giriniz")
// let result=0;

// while(n>0){
//     n=Math.floor(n/10);
//     result++;
  
// } console.log(result);



// !ÖDEV2 : 1-10 arasında Rastgele seçilen bir sayıyı kullanıcının bulmasını isteyen program

let random=Math.ceil(Math.random()*10);
let num=+prompt("1-10 arasinda bir sayi giriniz:")

if(random === num){
    document.write(`Bravooo! Dogru tahmin: ${random} `)
}

else{
    document.write(`Yanlış tahmin! Tekrar deneyiniz: ${random} `)
}
