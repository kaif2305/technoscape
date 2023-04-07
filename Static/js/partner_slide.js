gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".panel"),
  container = document.querySelector(".academic-partners");

let scrollTriggerInstance;

function initGsapEffect() {
  scrollTriggerInstance = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1.3),
    ease: "none",
    scrollTrigger: {
      trigger: ".academic-partners",
      pin: true,
      scrub: 1,
      snap: 2 / (sections.length - 1),
      end: () => "+=" + container.offsetWidth,
    },
  });
}

function toggleGsapEffect() {
  const windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    if (scrollTriggerInstance) {
      scrollTriggerInstance.scrollTrigger.kill();
      scrollTriggerInstance.kill();
      scrollTriggerInstance = null;
    }
  } else {
    if (!scrollTriggerInstance) {
      initGsapEffect();
    }
  }
}

toggleGsapEffect(); // Call once on page load
window.addEventListener("resize", toggleGsapEffect);
