

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


//Global variables
const navBar = document.querySelector('#navbar__list');
const navLinks = document.getElementsByTagName("a");
const sections = Array.from(document.getElementsByTagName("section")); 

// build the nav
// create an Array to find all the sections in the document, this way I can set all the items of the list at once
// Referenced: www.knowledge.udacity.com


for(section of sections){ //For loop to create <li>, <a href> in every sections in the document
  const listLi = document.createElement('li'); //create the <li> element
  const listA = document.createElement('a'); //create the <a> element
  listA.setAttribute("href", "#" + section.id); //define the 'href' attribute for each <a> element
  listA.setAttribute("data", section.id); //define 'data' attribute in link same as in section to can add active class on link
  listLi.setAttribute("class", "menu__link"); //define the class attribute for each <li> element
  navBar.appendChild(listLi); //append the <li> element to the <ul>
  listLi.append(listA); //append the <a> element to the <li>
  var navLink = document.createTextNode(section.dataset.nav); //write the text of the link with the name of data-nav attribute of each section
  listA.appendChild(navLink); //append the text node to the a item

}



// Scroll to anchor ID using scrollIntoView event
//Try to make like in //build the nav with a for loop and then follow the tips of https://knowledge.udacity.com/questions/795579

for (const a of navLinks) { //for loop for every time that I click on a link of navbar
    a.addEventListener("click", function smoothScroll(event){ // click event listener for smooth scroll function
    event.preventDefault();
    const aAttribute = this.getAttribute("href"); //return the href attribute of a element
    document.querySelector(aAttribute).scrollIntoView({ //scroll to view that correspond to the href attribute 
      behavior: "smooth"
    });
  })
}
 
 

// Add class 'active' to section when near top of viewport
// Make sections active and add active class to the navlink
// Reference: https://knowledge.udacity.com/questions/66312#66326

document.addEventListener('scroll', function ActiveState (){ //add an event on scroll for set the active classes in sections and navlinks
  for (const section of sections) {
    const sectionInViewport = section.getBoundingClientRect();
    if (sectionInViewport.top <= 150 && sectionInViewport.bottom >= 150) {  

        section.classList.add("your-active-class"); //add active class to the section in viewport
        document.querySelector(`[data=${section.id}]`).classList.add("active"); //add active class to the nav link that has the same data attribute than section in viewport

    } else {
        section.classList.remove("your-active-class"); //remove active class to the section that is not in viewport
        document.querySelector(`[data=${section.id}]`).classList.remove("active"); //remove active class to the nav link that has the same data attribute than section that is not in viewport
      
      }
    }
  });


  
