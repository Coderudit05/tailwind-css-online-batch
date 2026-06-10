function headerAnime() {
  const tl = gsap.timeline();

  tl.from("#logo", {
    y: -100,
    duration: 0.8,
  }).from(
    "nav a",
    {
      y: -100,
      duration: 0.8,
      stagger: 0.2,
    },
    "-=0.5",
  );
}

function heroTextAnime() {
  const tl = gsap.timeline();
  tl.from("#text1", {
    y: -200,
    duration: 0.8,
  })
    .from("#text2", {
      x: -400,
      duration: 0.8,
    })
    .from(
      "#text3",
      {
        x: 400,
        duration: 0.8,
      },
      "<",
    );
}

function sec2Anime() {
  gsap.from("#section2 h1", {
    scale: 0,
    opacity: 0,
    duration: 1,

    scrollTrigger: {
      trigger: "#section2 h1",
      scroller: "body",
      markers: true,
      end: "top 30%",

      scrub: true,
      scale: 2,
    },
  });

  gsap.from("#sec2-text #t1", {
    scale: 0,
    opacity: 0,
    duration: 1,
    x: -400,
    y: 100,
    scrollTrigger: {
      trigger: "#section2 #t1",
      scroller: "body",
      markers: true,
      end: "top 30%",

      scrub: true,
      scale: 2,
    },
  });
  gsap.from("#sec2-text #t2", {
    scale: 0,
    opacity: 0,
    duration: 1,
    x: +400,
    y: 100,
    scrollTrigger: {
      trigger: "#section2 #t2",
      scroller: "body",
      markers: true,
      end: "top 30%",

      scrub: true,
      scale: 2,
    },
  });
}

headerAnime();
heroTextAnime();
sec2Anime();
