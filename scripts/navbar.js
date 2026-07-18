(function () {
    function getCurrentPage() {
        var path = window.location.pathname || "";
        var fileName = path.substring(path.lastIndexOf("/") + 1);
        return (fileName || "index.html").toLowerCase();
    }

    function buildNavLink(href, label, currentPage) {
        var isActive = href.toLowerCase() === currentPage;
        var className = "nav-link" + (isActive ? " active" : "");
        return '<li class="nav-item"><a href="' + href + '" class="' + className + '">' + label + "</a></li>";
    }

    function renderNavbar(mount, options) {
        var currentPage = getCurrentPage();
        var html = '';
        html += '<nav class="navbar navbar-dark bg-dark navbar-expand-md">';
        html += '<a href="index.html">';
        html += '<img src="images/logo.png" width="40" height="40" class="d-inline-block align-top" style="margin-left: 10px;" alt="">';
        html += "</a>";

        if (options.showHeaderIcons) {
            html += '<a href="https://yamazakiapp.herokuapp.com" class="app">';
            html += '<i class="fa-solid fa-rocket"></i>';
            html += "</a>";
            html += '<a href="https://yamazakiapp.herokuapp.com/quizinit" class="app">';
            html += '<i class="fa-solid fa-circle-question"></i>';
            html += "</a>";
        }

        html += '<button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar" style="margin-right: 10px;">';
        html += '<span class="navbar-toggler-icon"></span>';
        html += "</button>";
        html += '<div class="navbar-collapse collapse" id="navbar">';
        html += '<ul class="navbar-nav">';
        html += buildNavLink("index.html", "Home", currentPage);
        html += buildNavLink("fotos.html", "Fotos", currentPage);
        html += buildNavLink("exame.html", "Exame de Faixa", currentPage);
        html += buildNavLink("biblioteca.html", "Biblioteca", currentPage);
        html += buildNavLink("noticias.html", "Notícias", currentPage);
        html += '<li class="nav-item"><a href="https://yamazakiapp.herokuapp.com/" class="nav-link">' + options.appMenuLabel + "</a></li>";

        if (options.includeQuizMenu) {
            html += '<li class="nav-item"><a href="https://yamazakiapp.herokuapp.com/quizinit" class="nav-link">QUIZ</a></li>';
        }

        html += "</ul>";
        html += "</div>";
        html += "</nav>";
        mount.innerHTML = html;
    }

    function initNavbar() {
        var mount = document.getElementById("site-navbar");
        if (!mount) {
            return;
        }

        var body = document.body;
        renderNavbar(mount, {
            showHeaderIcons: body.getAttribute("data-nav-icons") === "true",
            appMenuLabel: body.getAttribute("data-nav-app-label") || "Aplicativo",
            includeQuizMenu: body.getAttribute("data-nav-quiz") === "true"
        });
    }

    document.addEventListener("DOMContentLoaded", initNavbar);
})();