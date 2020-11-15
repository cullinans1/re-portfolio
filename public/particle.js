window.onload = function () {
  Particles.init({
    // normal options
    selector: ".background",
    maxParticles: 250,
    connectParticles: true,
    speed: .45,
    minDistance: 100,
    color: ['#ffffff', "#38080c", "#000000"],
    // options for breakpoints
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 150,
          color: "#48F2E3",
          connectParticles: true,
        },
      },
      {
        breakpoint: 425,
        options: {
          maxParticles: 75,
          connectParticles: true,
        },
      },
      {
        breakpoint: 320,
        options: {
          maxParticles: 0,

          // disables particles.js
        },
      },
    ],
  });
};
