document.addEventListener("DOMContentLoaded", function () {
    const fixedText = "";
    const sentences = [
        "Join our amazing community.",
        "Experience the best roleplaying with us.",
        "Connect with like-minded gamers today!"
    ];

    const changingText = document.getElementById("changingText");
    let currentSentenceIndex = 0;
    let currentCharIndex = 0;

    function typeText() {
        if (currentSentenceIndex >= sentences.length) {
            currentSentenceIndex = 0; // Restart from the beginning
        }

        const currentSentence = sentences[currentSentenceIndex];

        if (currentCharIndex <= currentSentence.length) {
            changingText.innerHTML = fixedText + currentSentence.substring(0, currentCharIndex);
            currentCharIndex++;
            setTimeout(typeText, 90); // Adjust typing speed (50 milliseconds per character)
        } else {
            setTimeout(eraseText, 1000); // Wait for 1 second before erasing
        }
    }

    function eraseText() {
        if (currentCharIndex >= 0) {
            const currentSentence = sentences[currentSentenceIndex];
            changingText.innerHTML = fixedText + currentSentence.substring(0, currentCharIndex);
            currentCharIndex--;
            setTimeout(eraseText, 50); // Adjust erasing speed (30 milliseconds per character)
        } else {
            currentSentenceIndex++;
            setTimeout(typeText, 0); // Wait for 1 second before typing the next sentence
        }
    }

    // Call the function to start typing immediately
    typeText();
});

document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach((slider) => {
        let currentSlide = 0;
        const slides = slider.querySelectorAll(".slide");

        function showSlide(n) {
            slides[currentSlide].style.display = "none";
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].style.display = "block";
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        showSlide(currentSlide);

        setInterval(nextSlide, 3000); // Change slide every 5 seconds
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Initialize ScrollMagic
    const controller = new ScrollMagic.Controller();

    // Define your animation
    const sections = document.querySelectorAll(".server-section");

    sections.forEach((section) => {
        const tl = gsap.timeline();
        tl.from(section, { opacity: 0, y: 50, duration: 1, ease: "power2.out" });

        // Create a scene for each section
        new ScrollMagic.Scene({
            triggerElement: section,
            triggerHook: 0.8, // Adjust trigger point as needed (0.8 means 80% from the top)
            reverse: true, // Set to false to keep animation active when scrolling up
        })
            .setTween(tl)
            .addTo(controller);
    });
});

// // Shooting Star Animation
// const numStars = 100;
// const container = document.querySelector('.stars');

// function createStar() {
//     const star = document.createElement('div');
//     star.className = 'star';
//     star.style.left = `${Math.random() * 100}vw`;
//     star.style.top = `${Math.random() * 100}vh`;
//     star.style.animationDuration = `${Math.random() * 3 + 2}s`; // Adjust animation speed
//     container.appendChild(star);

//     setTimeout(() => {
//         container.removeChild(star);
//         createStar();
//     }, star.style.animationDuration.replace('s', '') * 1000);
// }

// for (let i = 0; i < numStars; i++) {
//     createStar();
// }
