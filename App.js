const header = document.querySelector("header");

const ml_section =document.querySelector(".milestones");
const ml_counters =document.querySelectorAll(".number span");

const hambuger = document.querySelector(".hamburger");

/*------------Sticky Navbar-------------*/

function stickyNavbar() {
    header.classList.toggle("scrolled",window.pageYOffset > 0);
}

stickyNavbar();


window.addEventListener("scroll", stickyNavbar);

/*----------- Reveal Animation ---------*/

        let sr = ScrollReveal({
            duration: 2500,
            distance: "60px",
        });

        sr.reveal(".showcase-info",{ delay: 500 });
        sr.reveal(".showcase-image",{ origin: "top", delay: 700 });

      
/*-------------------------Open and Close Navbar Menu ----------------*/

hambuger.addEventListener("click", () => {
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScrolling");
});
        
links.array.forEach(link => link.addEventListener("click", () => {
    document.body.classList.remove("open");
    document.body.classList.remove("stopScrolling");
}))