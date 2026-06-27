// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
});

// ===============================
// Navbar Background on Scroll
// ===============================

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background = "rgba(0,0,0,.75)";
        header.style.backdropFilter = "blur(18px)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    }else{

        header.style.background = "rgba(0,0,0,.35)";
        header.style.boxShadow = "none";

    }

});

// ===============================
// Fade Animation on Scroll
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition=".8s";

    observer.observe(section);

});

// ===============================
// Gallery Hover Zoom
// ===============================

const gallery = document.querySelectorAll(".gallery-images img");

gallery.forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform="scale(1.08)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});

// ===============================
// Hero Button Animation
// ===============================

const buttons = document.querySelectorAll(".primary-btn,.secondary-btn,.btn");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px) scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});

// ===============================
// Console Message
// ===============================

console.log("✨ Celix Website Loaded Successfully!");