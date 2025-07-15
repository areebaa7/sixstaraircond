// main.js
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(a.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
  });

  // WhatsApp button pulse
  const wa = document.querySelector(".whatsapp-float");
  if (wa) setInterval(() => wa.classList.toggle("pulse"), 1500);
});
