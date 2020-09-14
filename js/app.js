let count = 0;
let ul = document.querySelector("ul");
let body = document.querySelector("html");
let sec1 = document.querySelector("#section1");
let sec2 = document.querySelector("#section2");
let sec3 = document.querySelector("#section3");
let sec4 = document.querySelector("#section4");
let btnTop = document.querySelector("#goToTop");
let sections = document.querySelectorAll("section");
let mySection = [];

for (const section of sections){
    mySection.push(section.firstElementChild.firstElementChild);
}


for (const section of mySection){
    
    let li = document.createElement('li');
    li.innerHTML = section.innerHTML;
    li.classList.add("menu__link");
    li.counter = count;
    count++;
    li.addEventListener("click",goToSection);
    ul.appendChild(li);
}
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom-3 >= 0
    );
}

function goToSection(event){
    sections[event.target.counter].scrollIntoView({behavior : 'smooth'});
}

function goToTop(){
    body.scrollIntoView({behavior : 'smooth'});
}

function updatePosition(){
    if(isInViewport(sec1)){
        sec1.classList.add("your-active-class");
        sec2.classList.remove("your-active-class");
        sec3.classList.remove("your-active-class");
        sec4.classList.remove("your-active-class");
    }
    
    else if (isInViewport(sec2)){
        sec1.classList.remove("your-active-class");
        sec2.classList.add("your-active-class");
        sec3.classList.remove("your-active-class");
        sec4.classList.remove("your-active-class");
    }
    
    else if(isInViewport(sec3)){
        sec1.classList.remove("your-active-class");
        sec2.classList.remove("your-active-class");
        sec3.classList.add("your-active-class");
        sec4.classList.remove("your-active-class");
    }
    
    else if(isInViewport(sec4)){
        sec1.classList.remove("your-active-class");
        sec2.classList.remove("your-active-class");
        sec3.classList.remove("your-active-class");
        sec4.classList.add("your-active-class");
    }
    
}

window.addEventListener("scroll",updatePosition);
btnTop.addEventListener('click',goToTop);


