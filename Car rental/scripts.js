document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
    contactForm.reset();
  });

  const rentButtons = document.querySelectorAll(".rent-btn");
  rentButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Car has been added to your booking. We'll reach out for details!");
    });
  });
});
