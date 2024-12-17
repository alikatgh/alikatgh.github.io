document.addEventListener("DOMContentLoaded", () => {
  const flap = document.getElementById("flap");
  const invitation = document.getElementById("invitation");
  const openSound = document.getElementById("openSound");

  // Trigger the animation when clicking on the envelope
  document.getElementById("envelopeContainer").addEventListener("click", () => {
    gsap
      .timeline()
      .to(flap, { duration: 1, rotationX: -180, ease: "power3.inOut" }) // Open the flap
      .add(() => openSound.play(), "-=0.5") // Play sound halfway
      .to(
        invitation,
        { duration: 1, bottom: "10%", opacity: 1, ease: "power3.out" },
        "-=0.5"
      ); // Slide out invitation
  });
});
