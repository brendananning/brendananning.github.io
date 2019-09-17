particlesJS("particles-js", {
  particles: {
    number: { value: 120, density: { enable: true, value_area: 800 } },
    color: { value: "#adadad" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#adadad" },
      polygon: { nb_sides: 5 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "right",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
      resize: true
    },
    modes: {
      grab: { distance: 200, line_linked: { opacity: 1 } },
      bubble: {
        distance: 419.5804195804196,
        size: 4,
        duration: 2,
        opacity: 8,
        speed: 2
      },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 50 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});