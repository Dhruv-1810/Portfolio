const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// Animation Effect on Features
const cards = document.querySelectorAll(".feature-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

            setTimeout(() => {
                entry.target.classList.add("show");
            }, index * 150);

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {
    observer.observe(card);
});

// Animation Effect on Stats
const statCards = document.querySelectorAll(".stat-card");

const statObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            statCards.forEach((card, index) => {

                setTimeout(() => {

                    card.classList.add("show");

                }, index * 180);

            });

        }

    });

}, {
    threshold: 0.2
});

statObserver.observe(document.querySelector(".stats"));