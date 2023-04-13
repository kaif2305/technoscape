gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".panel"),
  container = document.querySelector(".academic-partners");

gsap.to(sections, {
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
