// ! 1.Harcadığın kadar kazan

// ?Harcamanız   10 un katıysa size verilecek bonus puan ödemenizin 10 katı
// ?Harcamanız   5 un katıysa size verilecek bonus puan ödemenizin 5 katı
// ?Harcamanız   4 un katıysa size verilecek bonus puan ödemenizin 3 katı


let spent=+prompt("Enter your spent")
if(spent %10 ==0){
    document.write("Bonus=",spent*10);
}

 else if(spent %5 ===0){
     document.write("Bonus=",spent*5)
 }

 else if(spent %4 ===0){
     document.write("Bonus=",spent*4)
 }

 else if(spent %3 ===0){
     document.write("Bonus=",spent*3)
 }

 else{
     document.write("Please spend more :)")
}


// !-----------------------------------------------------------------------

//!2. Girilen nesneye göre atılması gereken çöp kutusunu belirten program

let garbage=prompt("Please enter name of the garbage")
switch(garbage){
    case"bread" :
    document.write("Organic Bin");
    break;

    case "bottle" :
    document.write("Glass Bin");
    break;

    case "box" :
     document.write("Recycling-Paper Bin");
     break;
     default:{
         document.write("Try again!");
     }
 }


// !-----------------------------------------------------------------------

//!3. Dart oyununda attığnız noktaya göre puan alıyorsunuz. Kullanıcıdan attığı alanı girmesini isteyip puanını yazan program

 let R=prompt("Please enter your distance")
 let score;

 if(R >10){
     score=0;
 }
 else if(R <=10 && R >5){
     score=1;
 }
 else if(R <=5 && R >1){
     score=5;
 }
 else if(R <=1 && R>=0){
     score=10;
 }
 else{
     score=("Please enter the correct number")
 }
 document.write("Your score :",score);


// !-----------------------------------------------------------------------

//!4. Sevdiğiniz kitap türünü girnce ona göre önerilerde bulunan programı switch -case yapısı ile oluşturunuz

 let booktype=prompt("Enter your favorite type of book")
 switch(booktype){
     case"novel":
     document.write("Our recommendation: War and Peace by Leo Tolstoy");
     break;

     case"cookbook":
     document.write("Our recommendation: The Food Lab by J. Kenji Lopez-Alt");
     break;

     case"children":
     document.write("Our recommendation: Goodnight Moon by Clement Hurd");
     break;

     case"art":
     document.write("Our recommendation: On Photography by Susan Sontag");
     break;

     case"love":
     document.write("Our recommendation: Sputnik Sweetheart by Haruki Murakami");
     break;
}

// !-----------------------------------------------------------------------

//!5. Hava durumuna göre giyilmesi gereken kıyafet türünü veren program

 let T=+prompt("Please enter the temperature")
 let clothes;

 if(T >=20){
     clothes="Put on your t-shirt";
 }
 else if(T <19 && T >=15){
 clothes="Put on your light jacket";
 }
 else if(T <14 && T >=10){
     clothes="Put on your thick coat";
 }
 else if(T <9 && T >=5){
     clothes="Put on your thick coat and hat";
 }
 else{
     clothes=("It is so cold brrrrrr. Stay at home :)")
 }

 document.write("" , clothes);

// !-----------------------------------------------------------------------

//!6. Bir siteye üye olup olmadığı sorusunu sorup cevaba göre Giriş yapabilirsiniz, Üyelik yapın mesajını yazan ternary yapısını oluşturun.

 let user=prompt("Already have an account?")
 let check = user === "yes" ? ("Log In:@example.com") : ("Create an account")
 document.write(check);


// !-----------------------------------------------------------------------

//!7. Girilen iki renk karıştırılınca sonucun ne olduğunu gösteren programı oluşturun

let color1=prompt("Enter the primary color name (R,Y,B)")
let color2=prompt("Enter the any color name")
let blend;

if(color1 === "red"){
    if(color2 === "blue") blend="purple"
    else if(color2 === "yellow") blend="orange"
    else if(color2 === "green") blend="brown"
    else{
        blend("Cannot find the color blend!") 
    }
}

else if(color1 === "yellow"){
    if(color2 === "blue") blend="green"
    if(color2 === "red") blend="orange"
    else{
        blend("Cannot find the color blend!") 
    }
}

else if(color1 === "blue"){
    if(color2 === "green") blend="turquoise"
    else{
        blend("Cannot find the color blend!") 
    }
}

document.write("Blend of the ", color1, " & ", color2, " = " , blend)









