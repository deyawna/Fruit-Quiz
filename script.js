let title = document.querySelector(".title");
let opening = document.querySelector(".story-opening");
let buttons = document.querySelector(".buttons");
let buttonOne = document.querySelector(".option-one");
let optionOne = document.querySelector(".option-one-screen");
let optionKiwi = document.querySelector(".option-two-screen");
let buttonThree = document.querySelector(".option-three");
let optionThree = document.querySelector(".option-three-screen");
let buttonFour = document.querySelector(".option-four");
let optionFour = document.querySelector(".option-incorrect");
let buttonFive = document.querySelector(".option-");
let buttonSix = document.querySelector(".option-");
let optionFive = document.querySelector(".option-");
let optionIncorrect = document.querySelector(".option-");
let buttonSeven = document.querySelector(".option-");
let buttonEight = document.querySelector(".option-");
let optionSeven = document.querySelector(".option-");
let optionEight = document.querySelector(".option-");



buttonOne.onclick = function() {
    opening.style.display = "none";
    title.style.display = "none";
    buttons.style.display = "none";
    optionOne.style.display = "block";
};
// no button
// buttonTwo.onclick = function() {
//     // opening.style.display = "none";
//     buttons.style.display = "none";
//     optionThree.style.display = "block";
// };
// strawberry button
buttonThree.onclick = function() {
    optionOne.style.display = "none";
    // buttons.style.display = "none";
    // optionThree.style.display = "block";
    optionThree.style.display = "block";
    // optionTwo.style.display = "none";
};
 buttonFour.onclick = function() {
     optionOne.style.display = "none";
   opening.style.display = "none";
    buttons.style.display = "none";
    optionFour.style.display = "block";
};
buttonFive.onclick = function() {
    opening.style.display = "none";
    buttons.style.display = "none";
    optionFive.style.display = "block";
};
/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/