/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let ul = document.querySelector("ul");
let doc = document.querySelector("document");
let body = document.querySelector("h1");
let sec1 = document.querySelector("#section1");
let sec2 = document.querySelector("#section2");
let sec3 = document.querySelector("#section3");
let sec4 = document.querySelector("#section4");
let sections = document.querySelectorAll("section");
let mySection = [];
for (const section of sections){
    mySection.push(section.firstElementChild.firstElementChild);
}
for (const section of mySection){
    
    let li = document.createElement('li');
    li.innerHTML = section.innerHTML;
    li.classList.add("menu__link");
    ul.appendChild(li);
}
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom >= 0 //&&
//        rect.left >= 0 &&
//        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

console.log(mySection);
function updatePosition(){
    if(isInViewport(sec1)){
        //add section1 to the header
        sec1.classList.add("your-active-class");
        sec2.classList.remove("your-active-class");
        sec3.classList.remove("your-active-class");
        sec4.classList.remove("your-active-class");
        console.log("section1");
    }

    else if (isInViewport(sec2)){
        //add section2 to the header
        sec1.classList.remove("your-active-class");
        sec2.classList.add("your-active-class");
        sec3.classList.remove("your-active-class");
        sec4.classList.remove("your-active-class");
        console.log("section2");
    }
    
    else if(isInViewport(sec3)){
        //add section3 to the header
        sec1.classList.remove("your-active-class");
        sec2.classList.remove("your-active-class");
        sec3.classList.add("your-active-class");
        sec4.classList.remove("your-active-class");
        console.log("section3");
    }
    
    else if(isInViewport(sec4)){
        //add section3 to the header
        sec1.classList.remove("your-active-class");
        sec2.classList.remove("your-active-class");
        sec3.classList.remove("your-active-class");
        sec4.classList.add("your-active-class");
        console.log("section4");
    }

}

window.addEventListener("scroll",updatePosition);



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


