console.log("hello world");

const hamburger = document.querySelector(".nav-b__hamburger");
const navMenu = document.querySelector(".nav-b__nav-menu");

function mobileMenu() {
  hamburger.classList.toggle("active");

  navMenu.classList.toggle("active");
}

hamburger.addEventListener("click", mobileMenu);

// on scroll events

const scrollElements = document.querySelectorAll(
  ".features__grid-row--js-scroll"
);

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

let prevScrollpos = 0;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-bar").style.top = "0";
    document.getElementById("nav-menu").style.top = "7%";
  } else {
    document.getElementById("nav-bar").style.top = "-110px";
    document.getElementById("nav-menu").style.top = "-300px";
  }
  prevScrollpos = currentScrollPos;
};

// copyright date
const date = new Date();
const year = date.getFullYear();
const copyrightYear = document.querySelector(".footer__copyright");
copyrightYear.innerHTML = `Copyright ©HomeBrew ${year}`;
