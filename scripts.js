// Load the shared navbar, then mark the current page as active.
fetch("navbar.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("navbar-placeholder").innerHTML = html;

    const current = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("#main-navbar .nav-link, #main-navbar .dropdown-item").forEach(link => {
      const href = (link.getAttribute("href") || "").split("#")[0];
      if (href && href === current && !link.classList.contains("nav-cta") && !link.getAttribute("href").includes("#")) {
        link.classList.add("active");
        const parent = link.closest(".dropdown");
        if (parent) parent.querySelector(".dropdown-toggle")?.classList.add("active");
      }
    });
  })
  .catch(() => { /* navbar is progressive; page still works without it */ });

// Reveal-on-scroll
(function () {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  if (!("IntersectionObserver" in window)) { items.forEach(el => el.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  items.forEach(el => io.observe(el));
})();

// Soft spotlight that follows the pointer on cards
document.addEventListener("pointermove", (e) => {
  const card = e.target.closest && e.target.closest(".feature-card");
  if (!card) return;
  const r = card.getBoundingClientRect();
  card.style.setProperty("--mx", (e.clientX - r.left) + "px");
  card.style.setProperty("--my", (e.clientY - r.top) + "px");
});
