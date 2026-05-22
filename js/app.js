// --- OGLASNA TABLA - PODACI ZA PREVOD (BEZ KAKAA) ---
const tekstoviOglasneTable = {
    sr: {
        datum: "Nedelja, 31. Maj 2026.",
        lokacija: "Teritorija grada Beograda (kućna dostava)",
        dostupno: "Sveža organska jaja iz slobodnog uzgoja (ograničene količine na nedeljnom nivou).",
        status: "OTVORENE REZERVACIJE"
    },
    en: {
        datum: "Sunday, May 31, 2026",
        lokacija: "Belgrade city area (home delivery)",
        dostupno: "Fresh free-range organic eggs (limited weekly quantities).",
        status: "RESERVATIONS OPEN"
    }
};

// Funkcija za ažuriranje oglasne table na osnovu izabranog jezika
function azurirajTablu(jezik) {
    const tablaElement = document.getElementById("tabla-isporuka");
    const info = tekstoviOglasneTable[jezik];
    
    if (tablaElement && info) {
        tablaElement.innerHTML = `
            <span class="board-date">📅 ${jezik === 'sr' ? 'Sledeća isporuka' : 'Next Delivery'}: ${info.datum}</span>
            <p>📍 <strong>${jezik === 'sr' ? 'Gde dostavljamo' : 'Where we deliver'}:</strong> ${info.lokacija}</p>
            <p>🥚 <strong>${jezik === 'sr' ? 'Dostupno ove nedelje' : 'Available this week'}:</strong> ${info.dostupno}</p>
            <div class="board-status">Status: ${info.status}</div>
        `;
    }
}

// --- LOGIKA ZA PROMENU JEZIKA ---
const dugmeSr = document.getElementById('lang-sr');
const dugmeEn = document.getElementById('lang-en');

async function promeniJezik(jezik) {
    try {
        const odgovor = await fetch(`lang/${jezik}.json`);
        const prevodi = await odgovor.json();

        // Zameni sav statički tekst koji ima data-lang atribut
        document.querySelectorAll('[data-lang]').forEach(element => {
            const kljuc = element.getAttribute('data-lang');
            if (prevodi[kljuc]) {
                element.textContent = prevodi[kljuc];
            }
        });

        // Sačuvaj izbor u brauzeru
        localStorage.setItem('izabraniJezik', jezik);

        // Ažuriraj i oglasnu tablu sa novim jezikom
        azurirajTablu(jezik);

        // Zameni stil aktivnog dugmeta
        if (jezik === 'sr') {
            dugmeSr.classList.add('active');
            dugmeEn.classList.remove('active');
        } else {
            dugmeEn.classList.add('active');
            dugmeSr.classList.remove('active');
        }
    } catch (greska) {
        console.error("Greška pri učitavanju jezika:", greska);
    }
}

// Slušači klikova na dugmad
dugmeSr.addEventListener('click', () => promeniJezik('sr'));
dugmeEn.addEventListener('click', () => promeniJezik('en'));

// Pokretanje pri učitavanju stranice
document.addEventListener("DOMContentLoaded", () => {
    const sacuvaniJezik = localStorage.getItem('izabraniJezik') || 'sr';
    promeniJezik(sacuvaniJezik);
});