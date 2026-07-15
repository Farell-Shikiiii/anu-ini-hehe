// =========================
// ELEMENTS
// =========================
const openBtn = document.getElementById("openBook");
const cover = document.querySelector(".cover");
const book = document.getElementById("book");
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");


// =========================
// Loading Screen
// =========================
window.addEventListener("load", () => {

    setTimeout(() => {

        const loading = document.getElementById("loading");

        if (loading) {
            loading.style.display = "none";
        }

    }, 2500);

});


// =========================
// Open Book + Play Music
// =========================
openBtn.addEventListener("click", async () => {

    // Putar musik
    try {

        bgMusic.volume = 0.4;
        await bgMusic.play();

        musicBtn.innerHTML = "🔇 Stop Music";

    } catch (error) {

        console.error("Music Error:", error);

    }


    // Animasi membuka cover
    cover.classList.add("open");

    setTimeout(() => {

        cover.style.display = "none";
        book.style.display = "block";

        book.animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(60px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0px)"
                }
            ],
            {
                duration: 1000,
                easing: "ease"
            }
        );

    }, 900);

});


// =========================
// Music Button
// =========================
musicBtn.addEventListener("click", async () => {

    try {

        if (bgMusic.paused) {

            bgMusic.volume = 0.4;
            await bgMusic.play();

            musicBtn.innerHTML = "🔇 Stop Music";

        } else {

            bgMusic.pause();

            musicBtn.innerHTML = "🎵 Music";

        }

    } catch (error) {

        console.error("Music Error:", error);

    }

});


// =========================
// Sakura Effect
// =========================
const petals = document.getElementById("petals");

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration =
        5 + Math.random() * 5 + "s";

    petal.style.opacity = Math.random();

    petal.style.transform =
        `scale(${Math.random() + 0.5})`;

    petals.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 10000);

}

setInterval(createPetal, 300);


// =========================
// Stars
// =========================
const particles = document.getElementById("particles");

for (let i = 0; i < 120; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDelay =
        Math.random() * 5 + "s";

    particles.appendChild(star);

}


// =========================
// Scroll Animation
// =========================
const pages = document.querySelectorAll(".page");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.animate(
                [
                    {
                        opacity: 0,
                        transform: "translateY(50px)"
                    },
                    {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                ],
                {
                    duration: 800,
                    easing: "ease"
                }
            );

        }

    });

});

pages.forEach(page => observer.observe(page));

// =========================
// BACK TO TABLE OF CONTENTS
// =========================

const backBtn = document.getElementById("backBtn");

function goBackToContents() {

    window.scrollTo({
        top: book.offsetTop,
        behavior: "smooth"
    });

}

// Tampilkan tombol setelah buku dibuka
openBtn.addEventListener("click", () => {

    setTimeout(() => {
        backBtn.style.display = "block";
    }, 900);

});