/* ==========================================================
   AKSHARA & ACHUTH WEDDING WEBSITE
   SCRIPT.JS
========================================================== */

// ===============================
// Wedding Countdown
// ===============================

const weddingDate = new Date("August 23, 2026 10:30:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {

        document.getElementById("countdown").innerHTML =
            "<h2>💛 Today is our Wedding Day! 💛</h2>";

        clearInterval(timer);

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");

}

updateCountdown();

const timer = setInterval(updateCountdown, 1000);

// ===============================
// RSVP
// ===============================

const form = document.getElementById("rsvpForm");
const success = document.getElementById("successMessage");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        success.textContent =
            "Thank you! We can't wait to celebrate with you. ❤️";

        form.reset();

    });

}

// ===============================
// Fade-in Animation
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

(entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

},

{
threshold:0.18
}

);

sections.forEach((section) => {

section.classList.add("hidden");

observer.observe(section);

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ===============================
// Navbar Shadow
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

navbar.style.boxShadow="0 8px 25px rgba(0,0,0,.08)";

}else{

navbar.style.boxShadow="none";

}

});

// ===============================
// Gallery Hover Enhancement
// ===============================

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach((img)=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.05)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

// ===============================
// Console Greeting 😄
// ===============================

console.log(
"🌸 Akshara & Achuth Wedding Website Loaded Successfully 🌸"
);
