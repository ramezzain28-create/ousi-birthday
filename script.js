// Countdown Logic
function countdown() {
    const end = new Date('May 7, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const d = end - now;

    const days = Math.floor(d / (1000 * 60 * 60 * 24));
    const hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((d % (1000 * 60)) / 1000);

    document.getElementById('timer').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(countdown, 1000);

// Interaction Logic
const messages = {
    bubbles: "Sweet but definitely dangerous. ⚡",
    catwoman: "Strong, wild, and unpredictable. 🐾",
    fluttershy: "Kindness is her superpower. 🦋"
};

function trigger(char) {
    const text = document.getElementById('dynamic-text');
    text.innerText = messages[char];
    confetti({
        particleCount: 40,
        spread: 50,
        colors: char === 'bubbles' ? ['#00d2ff'] : char === 'catwoman' ? ['#ff007f'] : ['#f1ff5c']
    });
}

// Prank Logic (The runaway button)
const giftBtn = document.getElementById('gift-btn');
giftBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    giftBtn.style.position = 'fixed';
    giftBtn.style.left = x + 'px';
    giftBtn.style.top = y + 'px';
});
