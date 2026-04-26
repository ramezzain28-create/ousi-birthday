// العداد التنازلي لـ 7 مايو
function updateCountdown() {
    const birthday = new Date('May 7, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const diff = birthday - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${d} يوم و ${h}:${m}:${s}`;
}
setInterval(updateCountdown, 1000);

// قصاصات الورق
function celebrate() {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
}

// فقاعات الكلام
function speak(char) {
    const id = char === 'bubbles' ? 'speech-bubbles' : 'speech-catwoman';
    document.getElementById(id).style.display = 'block';
    setTimeout(() => { document.getElementById(id).style.display = 'none'; }, 3000);
}

// وضع الهدوء
let quiet = false;
function toggleFlutterMode() {
    quiet = !quiet;
    document.body.classList.toggle('quiet-mode');
    document.getElementById('flutter-msg').innerText = quiet ? "هدوووء..." : "عادت أوسي القوية! 🔥";
    if(!quiet) celebrate();
}

// زر المزحة "الهارب"
const btn = document.getElementById('runaway-btn');
btn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    btn.style.position = 'absolute';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
});
