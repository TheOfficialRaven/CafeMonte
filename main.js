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
        homeContent.style.left = "10%";
    }

    links.forEach(link => {
        link.addEventListener("click", ()=>{
            closeNav();
        });
    });
}

myNav();

window.onload = () => {
    let homeContent = document.querySelector(".home-content");
    homeContent.style.left = "50px";
}