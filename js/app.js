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
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

console.log(mySection);
function updatePosition(){
    if(isInViewport(mySection[0])){
        //add section1 to the header
    }
    else{
        //remove section1 from the header
    }
    if(isInViewport(mySection[1])){
        //add section2 to the header
    }
    else{
        //remove section2 from the header
    }
    if(isInViewport(mySection[2])){
        //add section3 to the header
    }
    else{
        //remove section3 from the header
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


