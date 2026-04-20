// PARTICLES
particlesJS("particles-js", {
  particles: {
    number: { value: 70 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true, color: "#8a2be2" }
  }
});

// CURSOR GLOW
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX - 100 + "px";
    glow.style.top = e.clientY - 100 + "px";
});

// SCROLL REVEAL
const elements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

elements.forEach(el => observer.observe(el));

// SMOOTH SCROLL
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
        }
    });
});