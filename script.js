

// === Initialize Locomotive Scroll ===
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});

// === Register GSAP Plugin ===
gsap.registerPlugin(ScrollTrigger);

// === Connect ScrollTrigger with Locomotive Scroll ===
ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length
      ? scroll.scrollTo(value, 0, 0)
      : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
});

scroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();

// === Smooth Scroll on Nav Click ===
document.querySelectorAll('[data-scroll-to]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('data-scroll-to');
    if (target && document.querySelector(target)) {
      scroll.scrollTo(document.querySelector(target));
    }
  });
});

// === GSAP Page Load Animation ===
const t1 = gsap.timeline();

t1.from("#navbar", {
  x: 1000,
  width: 0,
  duration: 1,
},[]);

t1.from(".hero", {
  scale: 0,
  duration: 1,
  opacity: 0,
  ease: "power2.out",
},[]);

t1.from(".sk", {
  scale: 0,
  duration: 1,
  opacity: 0,
  ease: "elastic.out(1, 0.3)",
});

t1.from(".nav-links", {
  scale: 0,
  duration: 0.5,
  opacity: 0,
  ease: "power2.out",
  stagger: 0.1,
});


t1.from(".hero-content h1", {
  x: -100,
  duration: 1,
  opacity: 0,
  ease: "power2.out",
});

t1.from("hero .highlight", {
  duration: 1,
  opacity: 0,
  ease: "power2.out",
});

t1.from(".hero-content p", {
  x: 100,
  opacity: 0,
  ease: "power2.out",
});


// === ScrollTrigger Animation for #about Section ===
gsap.from("#about h2", {
  scrollTrigger: {
    trigger: "#about",
    scroller: "[data-scroll-container]",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrub: true,
});

gsap.from("#about p", {
  scrollTrigger: {
    trigger: "#about",
    scroller: "[data-scroll-container]",
    start: "top 70%",
    toggleActions: "play none none none",
    scrub: true,
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
});

// === Skills Section ===
gsap.from("#skills h2", {
  scrollTrigger: {
    trigger: "#skills",
    scroller: "[data-scroll-container]",
    start: "top 80%",
    toggleActions: "play none none none",
    scrub: true,
  },
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".skill-block", {
  scrollTrigger: {
    trigger: "#skills",
    scroller: "[data-scroll-container]",
    start: "top 70%",
    toggleActions: "play none none none",
    scrub: true,
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,
});

// === Projects Section ===
gsap.from("#projects h2", {
  scrollTrigger: {
    trigger: "#projects",
    scroller: "[data-scroll-container]",
    start: "top 80%",
    toggleActions: "play none none none",
    scrub: true,
  },
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".project-card",
    scroller: "[data-scroll-container]",
    start: "top 80%",
    end: "top 10%",
    toggleActions: "play none none none",
    scrub: true,
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,
});

// === Contact Section ===
gsap.from("#contact h2", {
  scrollTrigger: {
    trigger: "#contact",
    scroller: "[data-scroll-container]",
    start: "top 80%",
    end: "top 10%",
    toggleActions: "play none none none",
    scrub: true,
  },
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".contact-item", {
  scrollTrigger: {
    trigger: ".contact-item",
    scroller: "[data-scroll-container]",
    start: "top 80%",
    end: "top 10%",
    toggleActions: "play none none none",
    scrub: true,
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.1,
});
gsap.from("#form-item", {
  scrollTrigger: {
    trigger: ".contact-form",
    scroller: "[data-scroll-container]",
    start: "top 80%",
    end: "top 10%",
    toggleActions: "play none none none",
    scrub: true,
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.1,
});



