/* Reflektion: Jag använde JavaScript för att göra webbplatsen mer interaktiv.
Jag skapade en hamburgermeny som öppnas och stängs när användaren klickar på knappen. Jag gjorde även en knapp som växlar mellan ljust och mörkt tema.
För att förbättra tillgängligheten ändras även aria-label på knapparna beroende på om menyn eller mörkt läge är aktivt.
Jag använde if-satser för att kontrollera att elementen finns innan JavaScript körs och på så sätt fungerar samma script på alla sidor utan att ge fel.*/

// === Navigation (hambugermeny)===
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

if (hamburger && nav) {

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        nav.classList.toggle("active");

        if (nav.classList.contains("active")) {
            hamburger.setAttribute("aria-label", "Stäng meny");
        } else {
            hamburger.setAttribute("aria-label", "Öppna meny");
        }
    });
}

// === Mörkt tema (dark mode) ===
const themeButton = document.getElementById("theme-toggle");

if (themeButton) {

    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            themeButton.textContent = "Ljust tema";
            themeButton.setAttribute(
                "aria-label",
                "Byt till ljust tema"
            );
        } else {
            themeButton.textContent = "Mörkt tema";
            themeButton.setAttribute(
                "aria-label",
                "Byt till mörkt tema"
            );  
        }
    });
}    