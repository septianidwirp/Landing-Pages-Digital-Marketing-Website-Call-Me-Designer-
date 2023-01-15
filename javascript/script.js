const navbar = document.getElementById("navbar-brand");
const nav = document.getElementById("nav-brand");

const onScroll = () => {
  const scroll = document.documentElement.scrollTop;
  if (scroll > 0) {
    navbar.style.display = "none";
    nav.style.display = "block";
  } else {
    navbar.style.display = "block";
    nav.style.display = "none";
  }
};

window.addEventListener("scroll", onScroll);
