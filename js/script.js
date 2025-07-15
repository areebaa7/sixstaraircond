document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");

  if (footer) {
    footer.addEventListener("click", function () {
      this.classList.toggle("active");

      // Optional: auto remove highlight after 3 seconds
      setTimeout(() => {
        this.classList.remove("active");
      }, 3000);
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const animatedSection = document.querySelector('.animated-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animatedSection.classList.add('animate');
      }
    });
  }, { threshold: 0.2 });

  if (animatedSection) observer.observe(animatedSection);
});
