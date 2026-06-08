function headerAnime() {
  const tl = gsap.timeline();

  tl.from(
    "#logo",
    {
      y: -100,
      duration: 0.8,
      delay: 0.5,
    },
    "-=0.9",
  )
    .from("nav a", {
      y: -100,
      duration: 0.8,
      stagger: 0.2,
    })
    .from(
      "#nav-btn",
      {
        y: -100,
        duration: 0.8,
        stagger: 0.2,
      },
      "-=0.9",
    );
}

function heroAnime() {
  const tl = gsap.timeline();

  tl.from("#hero-status", {
    y: 200,
    opacity: 0,
    duration: 0.8,
  })
    .from("#hero-heading", {
      y: 200,
      opacity: 0,
      duration: 0.8,
    })
    .from("#hero-para", {
      y: 200,
      opacity: 0,
      duration: 0.8,
    })
    .from("#hero-btns", {
      y: 200,
      opacity: 0,
      duration: 0.8,
    })
    .from('#hero-img',{
      x : 400,
      duration : 0.8,
      opacity : 0,

    },'-=1')
}

headerAnime();
heroAnime();
