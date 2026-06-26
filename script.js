/* Typing Animation */

const words = [
"Digital Marketing",
"Business Consulting",
"Web Development",
"Growth Strategies",
"Innovative Solutions"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

let currentWord = words[wordIndex];

if(!deleting){

document.getElementById("typing").textContent =
currentWord.substring(0,charIndex+1);

charIndex++;

if(charIndex === currentWord.length){

deleting = true;

setTimeout(typeEffect,1500);

return;
}

}else{

document.getElementById("typing").textContent =
currentWord.substring(0,charIndex-1);

charIndex--;

if(charIndex === 0){

deleting = false;
wordIndex =
(wordIndex+1)%words.length;
}
}

setTimeout(typeEffect,
deleting ? 60 : 120);
}

typeEffect();

/* Scroll Reveal */

window.addEventListener("scroll",()=>{

document.querySelectorAll(".reveal")
.forEach(item=>{

const position =
item.getBoundingClientRect().top;

if(position < window.innerHeight-100){

item.classList.add("active");
}

});

});

/* Counter Animation */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCount = ()=>{

const target =
+counter.getAttribute("data-target");

const count =
+counter.innerText;

const increment =
target / 200;

if(count < target){

counter.innerText =
Math.ceil(count + increment);

setTimeout(updateCount,10);

}else{

counter.innerText = target;
}

};

updateCount();

});

/* Dark Mode */

const toggle =
document.getElementById("themeToggle");

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

/* Testimonials Slider */

const testimonials = [

{
text:"Outstanding service and support.",
author:"Michael Johnson"
},

{
text:"They transformed our online presence.",
author:"Sarah Williams"
},

{
text:"Highly professional and innovative.",
author:"David Brown"
}

];

let current = 0;

setInterval(()=>{

current++;

if(current >= testimonials.length){
current = 0;
}

document.getElementById("testimonialText")
textContent =
testimonials[current].text;

document.getElementById("testimonialAuthor")
.textContent =
"- " + testimonials[current].author;

},4000);