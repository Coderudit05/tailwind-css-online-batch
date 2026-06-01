// gsap.to('#box',{
//     x : 500,
//     duration : 5,
//     delay : 2,
//     backgroundColor : 'blue',
// })

// gsap.from("#box", {
//   // y : -200,
//   x: 500,
//   duration: 2,
//   delay: 0.5,
//   opacity: 0,
// });


//animate ".box" from an opacity of 0 to an opacity of 0.5
gsap.fromTo(".box", { opacity: 0 }, { opacity: 0.8, delay : 1, duration: 4 });