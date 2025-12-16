const translations = {
  en: {
    heroTitle: "Hi, I’m Mateja",
    heroSubtitle: "Junior Front-End Developer & IT Student",
    heroText: "I build clean, responsive websites using HTML, CSS and JavaScript.",
    viewProjects: "View Projects",
    aboutTitle: "About Me",
    aboutText: "I’m a second-year IT student focused on front-end development.",
    contactTitle: "Contact",
    skillsTitle: "Skills"
  },

  sr: {
    heroTitle: "Zdravo, ja sam Mateja",
    heroSubtitle: "Junior Front-End Developer i IT student",
    heroText: "Pravim čiste i responzivne web sajtove koristeći HTML, CSS i JavaScript.",
    viewProjects: "Pogledaj projekte",
    aboutTitle: "O meni",
    aboutText: "Student sam druge godine IT-a, fokusiran na front-end development.",
    contactTitle: "Kontakt",
    skillsTitle: "Veštine"
  }
};

const langBtn = document.getElementById("lang-toggle");
const elements = document.querySelectorAll("[data-key]");

// učitaj zapamćeni jezik ili default EN
let currentLang = localStorage.getItem("lang") || "en";

function setLanguage(lang) {
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });

  langBtn.textContent = lang === "en" ? "SR" : "EN";
  localStorage.setItem("lang", lang);
}

// inicijalno postavljanje jezika
setLanguage(currentLang);

// toggle na klik
langBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "sr" : "en";
  setLanguage(currentLang);
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
