// Giriş Kontrolü
const loginBtn = document.getElementById('access-btn');
if(loginBtn) {
    loginBtn.onclick = () => {
        if(document.getElementById('password').value === "02022008") window.location.href = 'dashboard.html';
        else alert("ACCESS DENIED");
    };
}

// Sayaç ve Saat
function updateSystem() {
    const counter = document.getElementById('counter');
    const clock = document.getElementById('clock');
    if(counter) {
        const baslangic = new Date("2026-02-01");
        const fark = new Date() - baslangic;
        counter.innerText = Math.floor(fark / (1000 * 60 * 60 * 24)) + " GÜN SİSTEMDEYİZ.";
    }
    if(clock) clock.innerText = new Date().toLocaleString('tr-TR');
}
setInterval(updateSystem, 1000);

// Modal
const modal = document.getElementById("secret-modal");
const btn = document.getElementById("secret-trigger");
if(btn) {
    btn.onclick = () => modal.style.display = "block";
    document.querySelector(".close").onclick = () => modal.style.display = "none";
}