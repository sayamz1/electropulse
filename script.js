document.addEventListener("DOMContentLoaded", () => {
    
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }

    const greetingEl = document.getElementById("greeting");
    if (greetingEl) {
        const hour = new Date().getHours();
        let message = "Welcome to ElectroPulse!";
        
        if (hour < 12) message = "Good Morning! Check out our freshly restocked tech deals.";
        else if (hour < 18) message = "Good Afternoon! Flash sale event going on right now.";
        else message = "Night Owl Specials! Shop exclusive tech discounts until midnight.";
        
        greetingEl.textContent = message;
    }

    const contactForm = document.getElementById("contactForm");
    const feedbackEl = document.getElementById("formFeedback");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); 
            
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                feedbackEl.style.color = "#ef4444";
                feedbackEl.textContent = "Please fill out all missing fields.";
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                feedbackEl.style.color = "#ef4444";
                feedbackEl.textContent = "Please enter a valid email address structure.";
                return;
            }

            feedbackEl.style.color = "#10b981";
            feedbackEl.textContent = `Thanks ${name}, support ticket submitted successfully. Expect a response within 24 hours.`;
            contactForm.reset();
        });
    }
});