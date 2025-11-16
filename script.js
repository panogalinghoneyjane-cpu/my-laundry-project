document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("orderForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Your order has been submitted! Thank you!");
    });
  }
});
