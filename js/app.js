// =====================
// DEFINICIJA TRANSLACIJE (Tvoj JSON ugrađen u kod)
// =====================
const prevodi = {
    sr: {
        "nav_story": "Naša Priča",
        "nav_products": "Proizvodi",
        "nav_delivery": "Isporuka",
        "nav_contact": "Kontakt",
        "hero_title": "Levak Green Farm",
        "hero_p": "Parče čistog raja u selu Gvozdenović nadomak Uba. Spajamo tradiciju, slobodan prostor i ljubav prema prirodi.",
        "hero_btn": "Pogledaj raspored isporuke",
        "story_subtitle": "Kako je sve počelo",
        "story_title": "Naša Priča",
        "story_p1": "Levak Green Farm je nastao iz želje da se vratimo korenima i stvorimo samoodrživu oazu. U srcu pitomog Gvozdenovića, odlučili smo da pokrenemo nešto drugačije — farmu gde životinje i priroda žive u potpunoj harmoniji.",
        "story_p2": "Naš fokus je na zdravom životu, slobodi kretanja naših životinja i apsolutno prirodnim procesima bez hemije i kompromisa.",
        "products_subtitle": "Ono što stvaramo",
        "products_title": "Domaći Organski Proizvodi",
        "prod1_title": "Domaća Jaja iz Slobodnog Uzgoja",
        "prod1_p": "Naše koke provode ceo dan na prostranim zelenim livadama i u slobodnom prostoru. Hrane se potpuno prirodno, što našim jajima daje prepoznatljivu jarko žutu boju, bogat ukus i vrhunski kvalitet.",
        "prod2_title": "100% Organski i Prirodni Uzgoj",
        "prod2_p": "Kod nas nema kaveza, industrijske hrane ni hemije. Sve što dolazi sa Levak Green Farm-a je plod čiste prirode Gvozdenovića, svežeg vazduha i ljubavi prema tradicionalnom načinu uzgoja.",
        "board_subtitle": "Vesti sa farme",
        "board_title": "Oglasna Tabla Isporuka",
        "board_intro": "Primamo porudžbine do petka u 10:00h za subotu. Nakon toga, može se poručiti za sledeću subotu.",
        "board_note": "*Rezervacije se vrše putem telefona ili društvenih mreža.",
        "location_subtitle": "Gde se nalazimo",
        "location_title": "Naša Lokacija",
        "location_p1": "Nalazimo se u prelepom i ekološki čistom selu Gvozdenović, opština Ub.",
        "location_p2": "Okruženi smo zelenilom, šumama i čistim vazduhom, što našim proizvodima daje posebnu notu zdravlja.",
        "map_ub": "← Ub (10-15 min)",
        "map_bg": "Beograd (1h) →",
        "contact_subtitle": "Ostanimo u kontaktu",
        "contact_title": "Naručite ili Nas Posetite",
        "contact_lead": "Imate pitanja ili želite da obezbedite svoje zalihe za sledeću isporuku? Pišite nam ili nas pozovite direktno!",
        "card_phone": "Telefon",
        "footer_copy": "&copy; 2026 Levak Green Farm. Sva prava zadržana."
    },
    en: {
        "nav_story": "Our Story",
        "nav_products": "Products",
        "nav_delivery": "Delivery",
        "nav_contact": "Contact",
        "hero_title": "Levak Green Farm",
        "hero_p": "A piece of pure paradise in the village of Gvozdenović near Ub. We combine tradition, free range, and love for nature.",
        "hero_btn": "View Delivery Schedule",
        "story_subtitle": "How It All Started",
        "story_title": "Our Story",
        "story_p1": "Levak Green Farm was born out of a desire to return to our roots and create a self-sustaining oasis. In the heart of peaceful Gvozdenović, we decided to start something different — a farm where animals and nature live in complete harmony.",
        "story_p2": "Our focus is on healthy living, the freedom of movement for our animals, and absolutely natural processes without chemicals or compromises.",
        "products_subtitle": "What We Create",
        "products_title": "Homegrown Organic Products",
        "prod1_title": "Homegrown Free-Range Eggs",
        "prod1_p": "Our hens spend the entire day on spacious green pastures and free range. They feed completely naturally, which gives our eggs their distinctive bright yellow color, rich flavor, and premium quality.",
        "prod2_title": "100% Organic & Natural Farming",
        "prod2_p": "There are no cages, industrial feed, or chemicals here. Everything coming from Levak Green Farm is the fruit of Gvozdenović's pure nature, fresh air, and love for traditional farming.",
        "board_subtitle": "Farm News",
        "board_title": "Delivery Notice Board",
        "board_intro": "We accept orders until Friday at 10:00 AM for Saturday delivery. After that, orders are placed for the following Saturday.",
        "board_note": "*Reservations can be made via phone or social media.",
        "location_subtitle": "Where We Are",
        "location_title": "Our Location",
        "location_p1": "We are located in the beautiful and ecologically clean village of Gvozdenović, Ub municipality.",
        "location_p2": "We are surrounded by greenery, forests, and clean air, which gives our products a special touch of health.",
        "map_ub": "← Ub (10-15 mins)",
        "map_bg": "Belgrade (1h) →",
        "contact_subtitle": "Stay in Touch",
        "contact_title": "Order or Visit Us",
        "contact_lead": "Have questions or want to secure your supply for the next delivery? Write to us or call us directly!",
        "card_phone": "Phone",
        "footer_copy": "&copy; 2026 Levak Green Farm. All rights reserved."
    }
};

const tekstoviOglasneTable = {
    sr: {
        lokacija: "Beograd - dostava na kućnu adresu",
        dostupno: "Sveža jaja iz slobodnog uzgoja"
    },
    en: {
        lokacija: "Belgrade - home delivery",
        dostupno: "Fresh free-range eggs"
    }
};

// =====================
// TAČNA DATUM LOGIKA (Uvek prikazuje prvu subotu)
// =====================

function ProveriStatusIsporuke() {
    const now = new Date();
    
    // Nađi prvu najbližu subotu koja dolazi
    let isporukaSubota = new Date(now);
    const tekuciDan = now.getDay(); // 0 = nedelja, 1 = ponedeljak ... 6 = subota
    
    // Računamo koliko dana ima do prve subote
    const danaDoSubote = (6 - tekuciDan + 7) % 7;
    
    // Ako je danas već subota, ostaje današnjica, a ako hoćeš da subotom odmah prebaci na sledeću, 
    // možemo ostaviti ovako ili dodati uslov. Za sada uvek traži prvu subotu ispred nas:
    isporukaSubota.setDate(now.getDate() + (danaDoSubote === 0 ? 0 : danaDoSubote));
    isporukaSubota.setHours(0, 0, 0, 0);

    return {
        datumIsporuke: isporukaSubota
    };
}

function formatDate(date, lang) {
    return date.toLocaleDateString(
        lang === 'sr' ? 'sr-RS' : 'en-GB',
        {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }
    );
}

// =====================
// UPDATE TABLA I PREVOD
// =====================

function azurirajSajt(jezik) {
    // 1. Prevođenje statičkih tekstova iz JSON-a na osnovu ID-jeva
    const recnik = prevodi[jezik];
    for (const kljuc in recnik) {
        const element = document.getElementById(kljuc);
        if (element) {
            element.innerHTML = recnik[kljuc];
        }
    }

    // 2. Logika za oglasnu tablu
    const elTabla = document.getElementById("tabla-isporuka");
    if (!elTabla) return;

    const info = tekstoviOglasneTable[jezik];
    const status = ProveriStatusIsporuke();
    
    const formattedDate = formatDate(status.datumIsporuke, jezik);

    // IZBAČENI SVI ROKOVI I STATUSI IZ HTML ŠABLONA
    elTabla.innerHTML = `
        <span class="board-date" style="display:block; font-size:1.2rem; font-weight:700; margin-bottom:1rem;">📅 ${formattedDate}</span>
        <p style="margin-bottom:0.5rem;">📍 <strong>${jezik === 'sr' ? 'Lokacija' : 'Location'}:</strong> ${info.lokacija}</p>
        <p style="margin-bottom:0rem;">🥚 <strong>${jezik === 'sr' ? 'Dostupno' : 'Available'}:</strong> ${info.dostupno}</p>
    `;
}

// =====================
// KONTROLA JEZIKA
// =====================

const dugmeSr = document.getElementById('lang-sr');
const dugmeEn = document.getElementById('lang-en');

function promeniJezik(jezik) {
    localStorage.setItem("lang", jezik);

    if(dugmeSr && dugmeEn) {
        dugmeSr.classList.toggle("active", jezik === "sr");
        dugmeEn.classList.toggle("active", jezik === "en");
    }

    azurirajSajt(jezik);
}

if(dugmeSr) dugmeSr.addEventListener("click", () => promeniJezik("sr"));
if(dugmeEn) dugmeEn.addEventListener("click", () => promeniJezik("en"));

// =====================
// INIT
// =====================

document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("lang") || "sr";
    promeniJezik(saved);
});