/* <============================== hamburger menu ==============================> */

const toggleBtn = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});

// footer section
document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

/* <============================== Form submit ==============================> */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const alertBox = document.getElementById("success-alert");
  const closeBtn = document.getElementById("close-alert");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    // Add your Web3Forms API key
    formData.append("access_key", "02a6b4e7-3c68-4339-9788-8678c1165575");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        form.reset(); // reset the form
        alertBox.classList.remove("hidden"); // show the alert
      } else {
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("Submission failed:", error);
    }
  });

  // Optional: Close alert on click
  closeBtn.addEventListener("click", () => {
    alertBox.classList.add("hidden");
  });
});
