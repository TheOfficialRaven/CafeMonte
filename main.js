function myNav() {
    let bar = document.querySelector(".bar");
    let nav = document.querySelector(".navigation");
    let homeContent = document.querySelector(".home-content");
    let links = document.querySelectorAll(".navigation a");

    bar.onclick = ()=>{
        if(nav.style.left == "0%"){
            closeNav();
        }else{
            openNav();
        }
    }

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

    links.forEach(link => {
        link.addEventListener("click", ()=>{
            closeNav();
        });
    });
    window.addEventListener("scroll", () => {
        let barsImg = document.querySelector(".bar");
        if (window.pageYOffset > 0) {
            barsImg.style.display = "none";
        } else {
            barsImg.style.display = "block";
        }
    });
    
    
}

myNav();

window.onload = () => {
    let homeContent = document.querySelector(".home-content");
    homeContent.style.left = "50px";
}


// Smooth scrolling polyfill for older browsers
$(document).ready(function() {
    // Check if the browser doesn't support smooth scrolling natively
    if (!("scrollBehavior" in document.documentElement.style)) {
        // Add smooth scrolling behavior to anchor links
        $(".scroll-link").on("click", function(event) {
            event.preventDefault();
            $("html, body").animate(
                {
                    scrollTop: $($.attr(this, "href")).offset().top
                },
                500 // Adjust the duration (in milliseconds) as desired
            );
        });
    }
});
