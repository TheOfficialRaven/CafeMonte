"use strict";
function myNav() {
    
    
  const bar = document.querySelector(".bar");
  const nav = document.querySelector(".navigation");
  const homeContent = document.querySelector(".home-content");
  const links = document.querySelector(".navigation");

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
    homeContent.style.left = "50%";
  }

  function closeNav() {
    nav.style.left = "-100%";
    bar.src = "Bars.png";
    homeContent.style.left = "2.5%";
  }

  links.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "A") {
      closeNav();
    }
  });

  window.addEventListener("scroll", () => {
    const barsImg = document.querySelector(".bar");
    if (window.pageYOffset > 0) {
      barsImg.style.display = "none";
      nav.classList.add("scrolled");
    } else {
      barsImg.style.display = "block";
      nav.classList.remove("scrolled");
    }
  });
}

myNav();

window.onload = () => {
  const homeContent = document.querySelector(".home-content");
  homeContent.style.left = "50px";
};

// Smooth scrolling polyfill for older browsers
$(document).ready(function () {
  // Check if the browser doesn't support smooth scrolling natively
  if (!("scrollBehavior" in document.documentElement.style)) {
    // Add smooth scrolling behavior to anchor links
    $(".scroll-link").on("click", function (event) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top,
        },
        500 // Adjust the duration (in milliseconds) as desired
      );
    });
  }
});

 // Get the image element by its ID
  var logoImage = document.getElementById('logo-image');

  // Add a click event listener to the image
  logoImage.addEventListener('click', function() {
    // Redirect the user to the home page
    window.location.href = '#'; // Replace 'https://example.com' with your actual home page URL
  });
