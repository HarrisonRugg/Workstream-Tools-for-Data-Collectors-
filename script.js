document.addEventListener("DOMContentLoaded", function () {
    // Open every external tool link in a new tab, safely.
    var links = document.querySelectorAll('a[href^="http"]');

    links.forEach(function (link) {
        if (link.hostname !== window.location.hostname) {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        }
    });

    // Filter links as you type. The search box stays hidden without JavaScript.
    var search = document.getElementById("search");
    var noResults = document.getElementById("no-results");
    var groups = document.querySelectorAll("[data-group]");

    search.hidden = false;

    search.addEventListener("input", function () {
        var query = search.value.trim().toLowerCase();
        var anyMatch = false;

        groups.forEach(function (group) {
            var heading = group.querySelector("h2").textContent.toLowerCase();
            var groupMatch = false;

            group.querySelectorAll("a").forEach(function (link) {
                var item = link.closest("li") || link;
                var match = !query || heading.includes(query) || link.textContent.toLowerCase().includes(query);
                item.hidden = !match;
                if (match) groupMatch = true;
            });

            group.hidden = !groupMatch;
            if (groupMatch) anyMatch = true;
        });

        noResults.hidden = anyMatch;
    });
});
