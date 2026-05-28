// ── Intersection Observer: fade-up on scroll ──
const fadeEls = document.querySelectorAll(".fade-up");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);
fadeEls.forEach((el) => observer.observe(el));

// ── Skill bar animation on hero load ──
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelectorAll(".skill-bar-fill").forEach((bar) => {
      bar.style.width = bar.dataset.width + "%";
    });
  }, 500);
});

// ── Contact form mock submit ──
document.getElementById("submitBtn").addEventListener("click", () => {
  const name = document.getElementById("fname").value.trim();
  const email = document.getElementById("femail").value.trim();
  const message = document.getElementById("fmessage").value.trim();

  if (!name || !email || !message) {
    document.getElementById("submitBtn").textContent =
      "⚠ Fill in required fields";
    setTimeout(() => {
      document.getElementById("submitBtn").textContent = "Send Message →";
    }, 2000);
    return;
  }

  document.getElementById("submitBtn").style.display = "none";
  const success = document.getElementById("formSuccess");
  success.style.display = "block";

  // Clear fields
  ["fname", "femail", "fsubject", "fmessage"].forEach((id) => {
    document.getElementById(id).value = "";
  });
});

// ── Smooth active nav highlight ──
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute("id");
  });
  navLinks.forEach((link) => {
    link.style.color =
      link.getAttribute("href") === `#${current}` ? "var(--white)" : "";
  });
});
