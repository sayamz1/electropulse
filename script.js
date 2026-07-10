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

    if (contactForm && feedbackEl) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); 
            
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                feedbackEl.style.color = "#f43f5e";
                feedbackEl.textContent = "Error: Please check structural missing input parameters.";
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                feedbackEl.style.color = "#f43f5e";
                feedbackEl.textContent = "Malformed Exception: Invalid electronic mail structure address map.";
                return;
            }

            feedbackEl.style.color = "#10b981";
            feedbackEl.textContent = `Ticket established for ${name}. Expected Response: 24h.`;
            contactForm.reset();
        });
    }


    const newsletterForm = document.getElementById("newsletterForm");
    const newsFeedback = document.getElementById("newsFeedback");

    if (newsletterForm && newsFeedback) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailInput = document.getElementById("newsEmail").value.trim();

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput)) {
                newsFeedback.style.color = "#f43f5e";
                newsFeedback.textContent = "Structural Error: Input string pattern mismatch.";
                return;
            }

            newsFeedback.style.color = "#10b981";
            newsFeedback.textContent = "Email structural link connected. Nexus alerts initialized.";
            newsletterForm.reset();
        });
    }

    const catalogSearch = document.getElementById("catalogSearch");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const productCards = document.querySelectorAll("#productGrid .premium-card");

    function executeCatalogEvaluation() {
        const searchQuery = catalogSearch ? catalogSearch.value.toLowerCase().trim() : "";
        const activeFilterBtn = document.querySelector(".filter-btn.active");
        const selectedCategory = activeFilterBtn ? activeFilterBtn.getAttribute("data-category") : "all";

        productCards.forEach(card => {
            const cardCategory = card.getAttribute("data-cat");
            const cardTitle = card.querySelector("h3").textContent.toLowerCase();
            const cardDescription = card.querySelector("p").textContent.toLowerCase();

            const matchesCategory = (selectedCategory === "all" || cardCategory === selectedCategory);
            const matchesSearch = (cardTitle.includes(searchQuery) || cardDescription.includes(searchQuery));

            if (matchesCategory && matchesSearch) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    }

    if (catalogSearch) {
        catalogSearch.addEventListener("input", executeCatalogEvaluation);
    }

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                filterButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");
                executeCatalogEvaluation();
            });
        });
    }

    const animatedElements = document.querySelectorAll(".fade-in");

    const scrollIntersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                scrollIntersectionObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    animatedElements.forEach(element => {
        scrollIntersectionObserver.observe(element);
    });

    const backToTopBtn = document.getElementById("backToTop");

    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});