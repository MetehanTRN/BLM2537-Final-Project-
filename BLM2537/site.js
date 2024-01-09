const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

var header = document.querySelector("header");

document.addEventListener("scroll", function() {
  if (window.scrollY > 0) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
});

header.addEventListener("mouseover", function() {
  header.classList.remove("hidden");
});

header.addEventListener("mouseout", function() {
  if (window.scrollY === 0) {
    header.classList.add("hidden");
  }
});

function goToFiksturPage() {
  // Fikstur.html sayfasına yönlendirme
  window.open("./fikstur.html", "_blank");
}