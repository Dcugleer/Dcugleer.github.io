tsParticles.load("particles", {
  background: {
    color: "transparent"
  },
  particles: {
    number: { value: 80 },
    color: { value: "#60a5fa" }, // azul
    shape: { type: "circle" },
    opacity: { value: 0.6 },
    size: { value: 3 },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { quantity: 4 }
    }
  }
});
