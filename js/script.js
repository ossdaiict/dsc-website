// new WOW().init();

document.addEventListener("scroll", function () {
  let nav = document.querySelector(".navbar");

  if (window.pageYOffset > 100) {
    nav.classList.add("nav-bg");
  } else {
    nav.classList.remove("nav-bg");
  }
});
