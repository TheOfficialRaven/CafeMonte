function myNav() {
    let bar = document.querySelector(".bar");
    let nav = document.querySelector(".navigation");
    let homeContent = document.querySelector(".home-content");
    bar.onclick = ()=>{
        if(nav.style.left == "0%"){
            nav.style.left = "-100%";
            bar.src = "Bars.png"
            homeContent.style.left = "20%";
        }else{
            nav.style.left = "0%"
            bar.src = "X.png"
            homeContent.style.left = "400px";
        }
    }
    
}
myNav();

window.onload = () => {
    let homeContent = document.querySelector(".home-content");
    homeContent.style.left = "50px";
}