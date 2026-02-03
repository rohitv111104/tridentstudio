// Typing Effect
const text = "Our epic game world is under construction... Stay tuned!";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 40);
  }
}

window.onload = typeEffect;

// ⭐ Generate Random Stars
const starsContainer = document.querySelector(".stars");
const starCount = 120;

for (let i = 0; i < starCount; i++) {
  let star = document.createElement("div");
  star.className = "star";
  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";
  star.style.animationDuration = (Math.random() * 3 + 2) + "s";
  star.style.animationDelay = Math.random() * 5 + "s";
  starsContainer.appendChild(star);
}
// 🌠 Shooting Star Generator
function createShootingStar() {
  const star = document.createElement("div");
  star.className = "shooting-star";

  // Random start position (top area)
  star.style.top = Math.random() * 40 + "vh";
  star.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 1000);
}

// 🌠 Create 2–3 stars every 3 seconds
setInterval(() => {
  const starBurst = Math.floor(Math.random() * 2) + 2; // 2 or 3 stars

  for (let i = 0; i < starBurst; i++) {
    setTimeout(createShootingStar, i * 300); // slight delay between each
  }

}, 3000);

