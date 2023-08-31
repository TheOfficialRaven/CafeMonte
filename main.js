///////////////////////////////////////////NavBar///////////////////////////////////////////////
"use strict";
function myNav() {
  var bar = document.querySelector(".bar");
  var nav = document.querySelector(".navigation");
  var homeContent = document.querySelector(".home-content");
  var links = document.querySelector(".navigation");

  bar.addEventListener("click", () => {
    if (nav.style.left === "0%") {
      closeNav();
    } else {
      openNav();
    }
  });

  function openNav() {
    nav.style.left = "0%";
    bar.src = "X.png";
    homeContent.style.left = "30%";
  }

  function closeNav() {
    nav.style.left = "-100%";
    bar.src = "Bars.png";
    homeContent.style.left = "2.5%";
  }
    
    function isNavOpen() {
  return nav.style.left === "0%";
}

  links.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "A") {
      closeNav();
    }
  });
    
////////////////////////////////// Hide bar on scroll ////////////////////////////////////////

  window.addEventListener("scroll", () => {
    const barsImg = document.querySelector(".bar");
    if (window.pageYOffset > 0) {
      barsImg.style.display = "none";
      nav.classList.add("scrolled");
         if (isNavOpen()) {
        closeNav();
    }
    } else {
      barsImg.style.display = "block";
      nav.classList.remove("scrolled");
    }
  });
}

myNav();

setTimeout(() => {
  const homeContent = document.querySelector(".home-content");
  homeContent.classList.remove("initial-position");
  homeContent.style.left = "38px";
}, 300);

////////////////////////////////// Logo Home Button////////////////////////////////////////////////
 // Get the image element by its ID
  var logoImage = document.getElementById('logo-image');

  // Add a click event listener to the image
  logoImage.addEventListener('click', function() {
    // Redirect the user to the home page
    window.location.href = '#'; // Replace 'https://example.com' with your actual home page URL
  });

//////////////////////////////Modal/////////////////////////////////////////////////////////////
var modal = document.getElementById("modalDialog");

// Get the button that opens the modal
var btn = document.getElementById("contactBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var header = document.getElementsByClassName("header");

// When the button is clicked, open the modal
btn.onclick = function() {
    modal.style.display = "block";
};

// When the <span> (close button) is clicked, close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event){
    var form = document.getElementsByClassName("medal-content");
    if(event.target == form){
        modal.style.display = "none";
    }
};

// Optional: Close the modal if the user presses the Escape key
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});





