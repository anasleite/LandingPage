
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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const navBar = document.querySelector('#navbar__list');


// build the nav

// create an Array to find all the sections in the document, this way I can set all the items of the list once
// Referenced: www.knowledge.udacity.com
const sections = Array.from(document.getElementsByTagName("section")); 

for(section of sections){
  const listLi = document.createElement('li'); //create the li element
  const listA = document.createElement('a'); //create the a element
  listA.setAttribute("href", "#" + section.id); //define the href attribute for each a item
  listLi.setAttribute("class", "menu__link"); //define the class attribute for each li item
  navBar.appendChild(listLi); //append the li item to the ul
  listLi.append(listA); //append the a item to the li
  var navLink = document.createTextNode(section.dataset.nav); //write the text of the link with the name of data-nav attribute of each section
  listA.appendChild(navLink); //append the text node to the a item
  

}

 

// Add class 'active' to section when near top of viewport

function ActiveState (){
  for (const section of sections) {
    const box = section.getBoundingClientRect();

    
    if (box.top <= 150 && box.bottom >= 150) {
      // Apply active state on the current section and the corresponding Nav link. - Reference: https://knowledge.udacity.com/questions/66312#66326
      const id = section.getAttribute("id");   
      document.querySelector(`.${id}`).classList.add("active");
      section.classList.add("your-active-class");
    
  

    } else {
      // Remove active state from other section and corresponding Nav link. - Reference: https://knowledge.udacity.com/questions/66312#66326
      const id = section.getAttribute("id");  
      document.querySelector(`.${id}`).classList.remove("active");
      section.classList.remove("your-active-class");
      }
    }
  }



// Scroll to anchor ID using scrollTO event


// Scroll to section on link click



// Set sections as active

// Make sections active