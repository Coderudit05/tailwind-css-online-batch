gsap.registerPlugin(ScrollTrigger);

gsap.from("#text1", {
  y: 300,
  opacity: 0,
  duration: 1.5,
  delay: 0.5,
});

gsap.from("#text2", {
  //   y: 300,
  x: 500,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#page2",
    markers: true,
    start: "top 70%",
    end: "top 10%",
    scrub: true,
  },
});
gsap.from("#text3", {
  //   y: 300,
  x: 500,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#page3",
    markers: true,
    start: "top 70%",
    end: "top 10%",
    scrub: true,
  },
});
gsap.from("#text4", {
  //   y: 300,
  x: 500,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#page4",
    markers: true,
    end: "top 10%",
    start: "top 70%",
    scrub: true,
  },
});
