const skillData = {
        js:        { title: "Certification FreeCodeCamp", desc: "Projets JavaScript validés sur FreeCodeCamp.",         tags: ["JS","HTML","CSS"],       link: "https://github.com/LucaBONNIN/freecodecamp-js-projects", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        php:       { title: "Application SGI",            desc: "Système de gestion d'intendance en Laravel.",          tags: ["PHP","Laravel"],         link: "https://github.com/LucaBONNIN/application-sgi", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
        laravel:   { title: "Application SGI",            desc: "Back-office complet avec Filament v5.",                tags: ["Laravel","Filament"],    link: "https://github.com/LucaBONNIN/application-sgi", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
        git:       { title: "GitHub",                     desc: "Versionning Git sur tous mes projets.",                tags: ["Git","GitHub"],          link: "https://github.com/LucaBONNIN",                 logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        sql:       { title: "Application SGI",            desc: "Base PostgreSQL avec relations Eloquent.",             tags: ["SQL","PostgreSQL"],      link: "appSgi.html",                                   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        filament:  { title: "Application SGI",            desc: "Interface utilisateur avec Filament v5.",              tags: ["Filament"],              link: "https://github.com/LucaBONNIN/application-sgi", logo: "https://avatars.githubusercontent.com/u/64450473?s=200&v=4" },
        csharp:    { title: "Projet C#",                  desc: "Projet de quiz mathématique en C#.",                   tags: ["C#"],                    link: "https://github.com/LucaBONNIN/Quiz-Mathematique", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
        // html:      { title: "Portfolio",                  desc: "Ce portfolio développé en HTML/CSS.",                  tags: ["HTML","CSS"],            link: "#",                                             logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        // css:       { title: "Portfolio",                  desc: "Mise en page et animations CSS.",                      tags: ["CSS","Bootstrap"],       link: "#",                                             logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        // bootstrap: { title: "Portfolio",                  desc: "Interface responsive Bootstrap 5.",                    tags: ["Bootstrap","HTML"],      link: "#",                                             logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
        // python:    { title: "Projet Python",              desc: "À compléter avec ton projet Python.",                  tags: ["Python"],                link: "#",                                             logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    };

    let currentProjectLink = "#";

    function goToProject() {
        if (currentProjectLink === "#" || currentProjectLink === "") return;
        if (currentProjectLink.startsWith("http")) {
            window.open(currentProjectLink, "_blank");
        } else {
            window.location.href = currentProjectLink;
        }
    }

    function openPanel(skill) {
        const d = skillData[skill];
        if (!d) return;

        currentProjectLink = d.link;

        document.getElementById("panelLogo").src             = d.logo;
        document.getElementById("panelTitle").textContent    = d.title;
        document.getElementById("panelDesc").textContent     = d.desc;
        document.getElementById("panelTags").innerHTML       = d.tags.map(t => `<span class="tag">${t}</span>`).join(" ");

        document.getElementById("skillPanel").classList.add("open");
        document.querySelectorAll(".tech-bubble").forEach(b => b.classList.remove("active"));
        document.querySelector(`[data-skill="${skill}"]`).classList.add("active");
    }

    function closePanel() {
        document.getElementById("skillPanel").classList.remove("open");
        document.querySelectorAll(".tech-bubble").forEach(b => b.classList.remove("active"));
    }

    // ← La clé : attendre que le DOM soit prêt
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll(".tech-bubble").forEach(bubble => {
            bubble.addEventListener("click", () => openPanel(bubble.dataset.skill));
        });
    });