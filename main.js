var body = document.querySelector("body")
var cursor = document.querySelector(".cursor")

body.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x - 5,
    y: dets.y - 2,
    // duration:0.5,
  });
});


var zoom = document.querySelectorAll("button ,h1");

function ButtonEnter() {
  gsap.to(cursor, {
    scale: 4,
    opacity : 0.5,
  });
}

function ButtonLeave() {
  gsap.to(cursor, {
    scale: 1,
    opacity : 1,
  });
}

zoom.forEach((el) => {
  el.addEventListener("mouseenter", ButtonEnter);
  el.addEventListener("mouseleave", ButtonLeave);
});

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Listen for the 'scroll' event and log the event data to the console
lenis.on("scroll", (e) => {
  console.log(e);
});

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on("scroll", ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);


gsap.registerPlugin(ScrollTrigger);


let tl = gsap.timeline();

tl.to(".preloder",{
    y:"-100%",
    borderRadius:"10% 10% 36% 39% / 10% 10% 55% 56%",
    duration:1,
    ease:"power2.out"

})

.add(()=>{
    document.querySelector(".preloder").style.display = "none";

})

.from (".navbar",{
    duration:0.8,
    y:"-100%"
});

//text animation

const breackTheText = ()=>{
  var h1 = document.querySelector(".heroHeading")
var h1Text = h1.textContent
// var h1Text = document.querySelector("h1").textContent

var splitedText = h1Text.split("")

var clutter = ""
splitedText.forEach(function(e,index){
 if(e){
  clutter += `<span class = "a">${e}</span>`
  console.log(clutter);
 }
   
})

h1.innerHTML = clutter
}

breackTheText()




/////////////////////////////////
const breackText = ()=>{
  var h1 = document.querySelector(".heroHeading2")
var h1Text = h1.textContent
// var h1Text = document.querySelector("h1").textContent

var splitedText = h1Text.split("")

var clutter = ""
splitedText.forEach(function(e,index){
 if(e){
  clutter += `<span class = "a">${e}</span>`
  console.log(clutter);
 }
   
})

h1.innerHTML = clutter
}

breackText()

tl.from("h1 .a",{
  y:100,
  duration:0.5,
  delay:0.5,
  stagger:0.15,
  opacity:0,
  ease:"power2.out",

})



// tl.to (paths,{
//     y:0,
//     opacity:1,
//     stagger:0.2,
//     duration:0.8,
//     ease:"power2.out",
//     onStart: function() {
//         paths.forEach((path)=>(path.style.transform = "translateY(100%)"))
//     },
// })

tl.from(".left svg",{
    y:30,
    opacity:0,
    duration:0.6,
    ease:"power2.out", 
})

.from(".left h4",{
    y:30,
    opacity:0,
    duration:0.6,
    ease:"power2.out", 
},"-=0.4")

.from(".left p",{
    y:30,
    opacity:0,
    duration:0.6,
    ease:"power2.out", 
},"-=0.4")

.from(".left .leftBtn",{
    y:30,
    opacity:0,
    duration:0.6,
    ease:"power2.out", 
},"-=0.4")

.from(".middel",{
    y:30,
    opacity:0,
    duration:0.6,
    ease:"power2.out", 
},"-=0.4")

.from(".right p",{
    y:30,
    opacity:0,
    duration:0.6,
    ease:"power2.out", 
},"-=0.4")

.from(".right h2",{
    y:30,
    opacity:0,
    duration:0.6,
    ease:"power2.out", 
},"-=0.4")



// page-2 animation


// Initial setup for .page
gsap.set(".page", {
  opacity: 0.873618, // Initial opacity
  transform: "translateY(5.05529px) scale(0.993681) translateZ(0px)", // Initial transform
});

// Animate the text spans inside .page2
const texts = document.querySelectorAll(".page2 h2 span");

texts.forEach((text) => {
  gsap.set(text, { y: "100%", opacity: 0 }); // Set initial state for each span
});

// Animate the text spans when .page2 appears
gsap.to(texts, {
  y: 0,
  opacity: 1,
  stagger: 0.2,
  duration: 1.5,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".page2",

    start: "top 50%",
    end:"top 30%",
    toggleActions: "play none none none",
    scrub:1,
  },
});

gsap.from(".para ,.serviText2",{
  y:30,
  opacity:0,
  stagger: 0.2,
  duration: 1.5,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".page2",
    start: "top 28%",
    end:"top 22%",
    scrub:1,
  },
})

gsap.to(".ek", {
  duration: 3,
  scrollTrigger: {
    trigger: ".ek",
    start: "top 10%",
    end: "bottom -27%",
    scrub: true,
    pin: true,
    pinSpacing: false,
  },
});





gsap.to(".do", {
  duration: 3,
  scrollTrigger: {
    trigger: ".do",
    start: "top 27%",
    end: "bottom 40%",
    scrub: true,
    pin: true,
    pinSpacing: false,
  },
});

gsap.to(".tin", {
  duration: 3,
  scrollTrigger: {
    trigger: ".tin",
    start: "top 45%",
    end: "bottom 100%",
    scrub: true,
    pin: true,
    pinSpacing: false,
  },
});

