

//Angela did...
var randomNumber1=Math.floor((Math.random()*6)+1);

document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");

var randomNumber2=Math.floor((Math.random()*6)+1);

document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player1 winner!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 winner!🚩";
}
else{
    document.querySelector("h1").innerHTML="draw!";
}




//ChatGpt did...
// var randomNumber1=Math.floor((Math.random()*6)+1);

// document.querySelector(".img1").setAttribute("src",`./images/dice${randomNumber1}.png`);

// var randomNumber2=Math.floor((Math.random()*6)+1);

// document.querySelector(".img2").setAttribute("src",`./images/dice${randomNumber2}.png`);

// if(randomNumber1>randomNumber2)
// {
//     document.querySelector("h1").innerHTML="🚩Player1 winner!";
// }
// else if(randomNumber1<randomNumber2){
//     document.querySelector("h1").innerHTML="Player2 winner!🚩";
// }
// else{
//     document.querySelector("h1").innerHTML="draw!";
// }


// I did....
// var randomNumber1=Math.floor((Math.random()*6)+1);

// var randomNumber2=Math.floor((Math.random()*6)+1);

// switch(randomNumber1)
// {
//     case 1:
//         document.querySelector(".img1").setAttribute("src","./images/dice1.png");
//         break;
//     case 2:
//         document.querySelector(".img1").setAttribute("src","./images/dice2.png");
//         break;
//     case 3:
//         document.querySelector(".img1").setAttribute("src","./images/dice3.png");
//         break;
//     case 4:
//         document.querySelector(".img1").setAttribute("src","./images/dice4.png");
//         break;
//     case 5:
//         document.querySelector(".img1").setAttribute("src","./images/dice5.png");
//         break;
//     default:
//         document.querySelector(".img1").setAttribute("src","./images/dice6.png");
// }

// switch(randomNumber2)
// {
//     case 1:
//         document.querySelector(".img2").setAttribute("src","./images/dice1.png");
//         break;
//     case 2:
//         document.querySelector(".img2").setAttribute("src","./images/dice2.png");
//         break;
//     case 3:
//         document.querySelector(".img2").setAttribute("src","./images/dice3.png");
//         break;
//     case 4:
//         document.querySelector(".img2").setAttribute("src","./images/dice4.png");
//         break;
//     case 5:
//         document.querySelector(".img2").setAttribute("src","./images/dice5.png");
//         break;
//     default:
//         document.querySelector(".img2").setAttribute("src","./images/dice6.png");
// }

// if(randomNumber1>randomNumber2)
// {
//     document.querySelector("h1").innerHTML="🚩Player1 winner!";
// }
// else if(randomNumber1<randomNumber2){
//     document.querySelector("h1").innerHTML="Player2 winner!🚩";
// }
// else{
//     document.querySelector("h1").innerHTML="draw!";
// }
