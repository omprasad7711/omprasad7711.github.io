const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((item) => revealObserver.observe(item));

const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

if (window.innerWidth > 980) {
  window.addEventListener("mousemove", (e) => {
    if (!cursorDot || !cursorRing) return;

    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";

    cursorRing.style.left = e.clientX + "px";
    cursorRing.style.top = e.clientY + "px";
  });
}

document.querySelectorAll("a, button, .copy-card, .skill-chip").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    if (!cursorRing) return;
    cursorRing.style.width = "55px";
    cursorRing.style.height = "55px";
    cursorRing.style.borderColor = "#00f5d4";
  });

  el.addEventListener("mouseleave", () => {
    if (!cursorRing) return;
    cursorRing.style.width = "34px";
    cursorRing.style.height = "34px";
    cursorRing.style.borderColor = "rgba(76, 201, 240, 0.8)";
  });
});

const tiltCards = document.querySelectorAll(".tilt-card");

tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  });
});

document.querySelectorAll(".magnetic").forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translate(0, 0)";
  });
});

const particlesContainer = document.getElementById("particles");

if (particlesContainer) {
  particlesContainer.innerHTML = "";

  for (let i = 0; i < 28; i++) {
    const particle = document.createElement("span");
    particle.classList.add("particle");

    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
    particle.style.animationDelay = `${Math.random() * 8}s`;

    particlesContainer.appendChild(particle);
  }
}

const copyPhoneCard = document.getElementById("copyPhoneCard");
const phoneNumber = document.getElementById("phoneNumber");
const copyStatus = document.getElementById("copyStatus");

if (copyPhoneCard && phoneNumber && copyStatus) {
  copyPhoneCard.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber.textContent.trim());
      copyStatus.textContent = "Phone number copied!";
    } catch (error) {
      copyStatus.textContent = "Could not copy number";
    }

    setTimeout(() => {
      copyStatus.textContent = "Click to copy number";
    }, 1800);
  });
}