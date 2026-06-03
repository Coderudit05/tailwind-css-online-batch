gsap.from("#logo", {
  y: -200,
  duration: 1,
  delay: 0.5,
});

// 0.5 + 1 => 1.5 + 1 + 0.5 => 3s 

gsap.from("nav a", {
  y: -200,
  duration: 0.5,
  stagger: 0.2,
  delay: 1,
});

gsap.from('#nav-btns .nav-btn',{

    y : -200,
    duration : 1,
    delay : 1.5,
    stagger : 0.5,

})