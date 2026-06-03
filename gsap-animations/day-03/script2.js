const tl = gsap.timeline();

tl.from("#text1", {
  x: 1000,
  duration: 1,
  delay: 0.5,
})
  .from(
    "#text2",
    {
      x: -1200,
      duration: 1,
      //   delay: 1,
    },
    "-=0.3",
  )
  .from(
    "#text3",
    {
      x: 1200,
      duration: 1,
    },
    "-=0.3",
  );
