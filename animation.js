//navbar
document.addEventListener("DOMContentLoaded", function () {
    gsap.to(".navbar", { opacity: 1, y: 0, duration: 0.3, delay: 0.3, ease: "power2.out" });
  });

  //about
  document.addEventListener("DOMContentLoaded", function () {
    gsap.to(".about-del-div", { opacity: 1, y: 0, duration: 2.9, delay: 0.6, ease: "power2.out" });
  });

function bounceElement(element) {
    gsap.to(element, {
      y: -5, 
      ease: "power1.inOut",
      duration: 1,
      yoyo: true,
      repeat: -1,
    });
  }

  const burger = document.querySelector(".burger");
  const delivery = document.querySelector(".delivery");

  bounceElement(burger);
  bounceElement(delivery);

//about 

  