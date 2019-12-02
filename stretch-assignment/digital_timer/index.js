const firstDig = document.querySelector("#secondTens");
const secondDig = document.querySelector("#secondOnes");
const thirdDig = document.querySelector("#msHundreds");
const fourthDig = document.querySelector("#msTens");

firstDig.innerHTML = 0;
secondDig.innerHTML = 0;
thirdDig.innerHTML = 0;
fourthDig.innerHTML = 0;



window.setInterval(function(){
    if (fourthDig.innerHTML < 9){
        fourthDig.innerHTML += 1;
    }
}, 10)













// window.setInterval(function(){
//     if (fourthDig.innerHTML <= 9){
//         fourthDig.innerHTML += 1
//     } 
//     if (fourthDig.innerHTML == 9){
//         fourthDig.innerHTML = 0;
//         if (thirdDig.innerHTML >= 1){
//             thirdDig.innerHTML += 1;
//         }
//         if (thirdDig.innerHTML == 9){
//             thirdDig.innerHTML = 0;
//             if (secondDig.innerHTML >= 1){
//                 secondDig.innerHTML += 1;
//             }
//             if (secondDig.innerHTML == 9){
//                 secondDig.innerHTML = 0;
//                 if (firstDig.innerHTML >= 1){
//                     firstDig.innerHTML += 1;
//                 }
//             }
//         }
//     }
// }, 10);