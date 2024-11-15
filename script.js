const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
const menuBtn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
  overlay.classList.toggle("open");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
  overlay.classList.toggle("open");
});