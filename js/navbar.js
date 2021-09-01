// add box-shadow to navbar after the page is scrolled 100px vertically
document.addEventListener("scroll", function () {
  let nav = document.querySelector(".navbar");

  if (window.pageYOffset > 100) {
    nav.classList.add("nav-bg");
  } else {
    nav.classList.remove("nav-bg");
  }
});
