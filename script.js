// Open every external tool link in a new tab, safely.
document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll('a[href^="http"]');

    links.forEach(function (link) {
        if (link.hostname !== window.location.hostname) {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        }
    });
});
