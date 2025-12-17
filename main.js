const translations = {
  en: {
    heroTitle: "Hi, I’m Mateja",
    heroSubtitle: "Junior Front-End Developer & IT Student",
    heroText: "I build clean, responsive websites using HTML, CSS and JavaScript.",
    viewProjects: "View Projects",
    aboutTitle: "About Me",
    aboutText: "I’m a second-year IT student focused on front-end development.",
    contactTitle: "Contact",
    skillsTitle: "Skills",
    /* Projects */
    projectsPageTitle: "Projects | Mateja",
    navHome: "Home",
    navProjects: "Projects",
    projectsTitle: "Projects",
    projectsIntro: "A selection of projects built to practice real-world front-end development.",
    cafeTitle: "Cafe Website",
    cafeDesc: "Responsive cafe website built with HTML, CSS and JavaScript. Includes language switcher and optimized layout.",
    liveDemo: "Live Demo",
    moreProjectsTitle: "More projects coming soon",
    moreProjectsText: "New projects will be added as I continue improving my skills."
  },

  sr: {
    heroTitle: "Zdravo, ja sam Mateja",
    heroSubtitle: "Junior Front-End Developer i IT student",
    heroText: "Pravim čiste i responzivne web sajtove koristeći HTML, CSS i JavaScript.",
    viewProjects: "Pogledaj projekte",
    aboutTitle: "O meni",
    aboutText: "Student sam druge godine IT-a, fokusiran na front-end development.",
    contactTitle: "Kontakt",
    skillsTitle: "Veštine",
    /* Projects */
    projectsPageTitle: "Projekti | Mateja",
    navHome: "Početna",
    navProjects: "Projekti",
    projectsTitle: "Projekti",
    projectsIntro: "Izbor projekata napravljenih radi vežbanja realnog front-end razvoja.",
    cafeTitle: "Sajt za kafić",
    cafeDesc: "Responzivan sajt za kafić napravljen korišćenjem HTML-a, CSS-a i JavaScript-a. Uključuje promenu jezika i optimizovan layout.",
    liveDemo: "Live demo",
    moreProjectsTitle: "Još projekata uskoro",
    moreProjectsText: "Novi projekti će biti dodavani kako budem unapređivao svoje veštine."
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
