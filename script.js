document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = document.querySelector(".name").value.trim();
    const email = document.querySelector(".email").value.trim();
    const phone = document.querySelector(".phone").value.trim();
    const interested = document.querySelector(".interested_in").value.trim();
    const message = document.querySelector(".message").value.trim();

    // Basic validation
    if (!name || !email || !interested || !message) {
        alert("Please fill all required fields.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (phone && phone.length < 10) {
        alert("Please enter a valid phone number.");
        return;
    }

    alert("✔ Thank you! Your message has been sent successfully.");

    form.reset();
});
});


const toggleBtn = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.body.classList.add(savedTheme);
}

updateButtonText();

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark-mode");
    } else {
        localStorage.setItem("theme", "");
    }

    updateButtonText();
});

function updateButtonText() {
    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "Light Mode 🌞";
    } else {
        toggleBtn.textContent = "Dark Mode 🌙";
    }
}
