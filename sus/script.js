gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


function minicircleMove() {
    window.addEventListener("mousemove", (dets)=> {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    })
} 
minicircleMove()

function mover() {
    let m = document.querySelector("#minicircle");
    let on = document.querySelector("#video");
    on.addEventListener("mouseover", (dets)=> {
        console.log("hi");
        m.style.width = `100px`;
        m.style.height = `100px`;
        // m.style.opacity = "0.5";
        m.style.backgroundColor = `#fff`;
        m.innerHTML = ` <img height="30px" width="30px" src="./videocraft.svg" alt=""> `
    })
}

function mleave() {
    let m = document.querySelector("#minicircle");
    let on = document.querySelector("#video");
    on.addEventListener("mouseleave", (dets)=> {
        console.log("hi");
        m.style.width = `1vw`;
        m.style.height = `1vw`;
        m.style.opacity = "1";
        m.style.backgroundColor = `#9680FF`;
        m.innerHTML = ``
    })
}
mover()
mleave()


let tl = gsap.timeline();

tl.from("nav .text-logo, nav ul, nav", {
    y: -100,
    opacity: 0,
    duration: 0.7,
    stagger: 0.2
})

tl.from("#hero .part1 #h1, #hero .part1 #h2", {
    opacity: 0,
    x:-400,
    duration: 0.9,
    stagger: 0.3
})

tl.from("#hero .part-2 .content #h3", {
    opacity: 0,
    x:200,
    duration: 0.5,
    stagger: 0.3
})

tl.to("#page2 video", {
    width: "90vw",
    duration:1,
    scrollTrigger: {
        trigger: "#page2 video",
        scroller:"#main",
        start:"top 35%",
        end:"top 25%",
        transition: "all ease-in-out 1s",
        scrub:4
    }
})

tl.to("#page3 .dot-text h2", {
    transform: `translate(100%,0)`,
    duration:1,
    scrollTrigger: {
        trigger: "#page3 .dot-text",
        scroller:"#main",
        start:"top 55%",
        end:"top 35%",
        scrub:4
    }
})

tl.from("#page3 .set1 .text", {
    opacity: 0,
    y: -30,
    duration:1,
    scrollTrigger: {
        trigger: "#page3 .set1",
        scroller:"#main",
        start:"top 55%",
        end:"top 35%",
        scrub:2
    }
})

tl.from("#page3 .set1 .inner .in1, #page3 .set1 .inner .in2", {
    opacity: 0,
    width: `0%`,
    duration:2,
    scrollTrigger: {
        trigger: "#page3 .set1",
        scroller:"#main",
        start:"top 55%",
        end:"top 10%",
        scrub:5
    }
})

// set 2 


tl.from("#page3 .set2 .text", {
    opacity: 0,
    y: -30,
    duration:1,
    scrollTrigger: {
        trigger: "#page3 .set2",
        scroller:"#main",
        start:"top 55%",
        end:"top 35%",
        scrub:2
    }
})

tl.from("#page3 .set2 .inner .in1, #page3 .set2 .inner .in2", {
    opacity: 0,
    width: `0%`,
    duration:2,
    scrollTrigger: {
        trigger: "#page3 .set2",
        scroller:"#main",
        start:"top 55%",
        end:"top 10%",
        scrub:5
    }
})

// set 3 

tl.from("#page3 .set3 .text", {
    opacity: 0,
    y: -30,
    duration:1,
    scrollTrigger: {
        trigger: "#page3 .set3",
        scroller:"#main",
        start:"top 55%",
        end:"top 35%",
        scrub:2
    }
})

tl.from("#page3 .set3 .inner .in1, #page3 .set3 .inner .in2", {
    opacity: 0,
    width: `0%`,
    duration:2,
    scrollTrigger: {
        trigger: "#page3 .set3",
        scroller:"#main",
        start:"top 55%",
        end:"top 10%",
        scrub:5
    }
})