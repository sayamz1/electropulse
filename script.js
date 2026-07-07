document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("show");
        });
    }

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const feedback = document.getElementById("formFeedback");

            if (name === "" || email === "" || message === "") {
                feedback.style.color = "red";
                feedback.textContent = "Please fill in all the fields.";
                return;
            }

            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

            if (!emailPattern.test(email)) {
                feedback.style.color = "red";
                feedback.textContent = "Please enter a valid email address.";
                return;
            }

            feedback.style.color = "green";
            feedback.textContent = "Your message has been sent.";

            contactForm.reset();

        });

    }

});