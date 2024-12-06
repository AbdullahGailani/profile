// typing animation
let typed = new Typed(".auto-type", {
  strings: ["Abdullah Gailani"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// Sticky Navbar

const heroContainer = document.querySelector(".hero");
const nav = document.querySelector(".nav");

const stickyNav = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const navbarObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-10px",
});
navbarObserver.observe(heroContainer);
//Smooth Scroll

const goToBtn = document.querySelectorAll(".go-to");

goToBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document
      .querySelector(`#${e.target.value}`)
      .scrollIntoView({ behavior: "smooth" });
  });
});
