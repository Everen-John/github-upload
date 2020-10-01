// gsap
//   .timeline()
//   .from("#demo", { duration: 1, opacity: 0 })
//   .from("#title", { opacity: 1, duration: 0.2, scale: 0, ease: "back" })
//   .from("#freds img", { y: 160, stagger: 0.2, duration: 0.8, ease: "back" })
//   .from("#time", { xPercent: 100, duration: 0.5 }, "-=0.5");

var animation = gsap
  .timeline()
  .from("#demo", { opacity: 0, duration: 1 })
  .from("#title", { opacity: 0, scale: 0, ease: "back" })
  .from("#freds img", {
    y: 160,
    stagger: 0.1,
    ease: "in",
  })
  .add("Debugger")
  .from("#time", { xPercent: 100, ease: "in", duration: 0.2 });

animation.play("Debugger");

gsap.from("#TEXT", { xPercent: 99 });
