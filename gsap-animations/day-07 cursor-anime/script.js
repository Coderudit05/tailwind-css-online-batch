const cursor = document.getElementById("cursor");
const button = document.getElementById("button");

window.addEventListener("mousemove", (e) => {
  // console.log(e.clientX)
  // console.log(e.clientY)

  // console.log(gsap)

  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.5,
    ease: "power2.out",
  });
});

button.addEventListener("mouseenter", (e) => {
  //   console.log("mouse enter");

  cursor.classList.add("scaled-cursor");

  gsap.to(cursor, {
    scale: 2,
    duration: 0.5,
    ease: "power2.out",
  });
});

button.addEventListener("mouseleave", () => {
  //   console.log("mouse leave");

  cursor.classList.remove("scaled-cursor");

  gsap.to(cursor, {
    scale: 1,
    duration: 0.5,
    ease: "power2.out",
  });
});


document.addEventListener('mouseleave',()=>{
    gsap.to(cursor,
        {
            opacity : 0,
            duration : 0.5,
        }
    )
})

document.addEventListener('mouseenter',()=>{
    gsap.to(cursor,{
        opacity : 1,
        duration : 0.5,
    })
})