const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const mainContent = document.getElementById("mainContent");
const yayMessage = document.getElementById("yayMessage");

let scale = 1;

/* ===== YES CLICK ===== */

yesBtn.onclick = function () {
    mainContent.style.opacity = "0";

    setTimeout(() => {
        mainContent.style.display = "none";
        yayMessage.classList.remove("hidden");
        launchEffects();
    }, 500);
};

/* ===== NO CLICK ===== */

noBtn.onclick = function () {

    if (noBtn.innerText === "No") {
        question.innerText = "Are you sure?";
        noBtn.innerText = "Are you sure?";
        scale += 0.5;
        yesBtn.style.transform = "scale(" + scale + ")";
    }

    else if (noBtn.innerText === "Are you sure?") {
        question.innerText = "You better say yes 😏";
        noBtn.style.display = "none";
        scale += 0.7;
        yesBtn.style.transform = "scale(" + scale + ")";
    }
};

/* ===== EFFECTS ===== */

function launchEffects() {
    startConfettiRain();
    setInterval(createHeart, 300);
}

/* 💖 HEARTS FROM BOTTOM */

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-20px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

/* 🎉 CONFETTI RAIN FROM TOP (10s) */

function startConfettiRain() {

    const interval = setInterval(() => {

        for (let i = 0; i < 10; i++) {

            const confetti = document.createElement("div");
            confetti.classList.add("confetti");

            confetti.style.left = Math.random() * window.innerWidth + "px";
            confetti.style.top = "-20px";
            confetti.style.backgroundColor = randomColor();

            const size = Math.random() * 8 + 6;
            confetti.style.width = size + "px";
            confetti.style.height = size + "px";

            confetti.style.animationDuration =
                (Math.random() * 2 + 3) + "s";

            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }

    }, 150);

    // 10 másodperc után leáll
    setTimeout(() => {
        clearInterval(interval);
    }, 10000);
}

/* 🎨 RANDOM COLOR */

function randomColor() {
    const colors = [
        "#ff4d6d",
        "#ff99c8",
        "#cdb4db",
        "#a2d2ff",
        "#ffc8dd",
        "#ffea00"
    ];

    return colors[Math.floor(Math.random() * colors.length)];
}
