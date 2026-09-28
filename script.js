// Typing Animation

const text = [
    "Computer Science Engineer",
    "Web Developer",
    "Ecommerce Website Manager",
    "Computer Science Teacher"
];


let index = 0;

let charIndex = 0;


let typingElement = document.getElementById("typing");


function type(){

    if(charIndex < text[index].length){

        typingElement.innerHTML += text[index].charAt(charIndex);

        charIndex++;

        setTimeout(type,100);

    }

    else{

        setTimeout(erase,1500);

    }

}



function erase(){

    if(charIndex > 0){

        typingElement.innerHTML =
        text[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(erase,50);

    }

    else{

        index++;

        if(index >= text.length){

            index=0;

        }


        setTimeout(type,500);

    }

}



document.addEventListener("DOMContentLoaded",function(){

    type();

});