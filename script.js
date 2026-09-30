// Typing Animation

const texts = [
    "Web Developer",
    "E-commerce Manager",
    "Computer Science Teacher",
    "Software Developer"
];


let index = 0;
let charIndex = 0;


function typeEffect(){

    const typing = document.getElementById("typing");

    if(!typing) return;


    if(charIndex < texts[index].length){

        typing.textContent += texts[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }
    else{

        setTimeout(()=>{

            typing.textContent="";
            charIndex=0;

            index++;

            if(index >= texts.length){

                index=0;

            }

            typeEffect();

        },1000);

    }

}


typeEffect();



// Mobile Menu

const menuIcon = document.getElementById("menu-icon");

const navLinks = document.getElementById("nav-links");


if(menuIcon){

    menuIcon.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}