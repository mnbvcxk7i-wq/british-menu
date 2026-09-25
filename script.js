```javascript
"use strict";

/*
 * British Menu
 * Lightweight JavaScript
 * No external libraries or dependencies
 */

document.addEventListener("DOMContentLoaded", function () {

    /*
     * Update the current year automatically.
     * This keeps the footer year accurate without
     * requiring a yearly code change.
     */
    const yearElement = document.querySelector(".footer-bottom p");

    if (yearElement) {
        const currentYear = new Date().getFullYear();

        yearElement.innerHTML =
            "&copy; " + currentYear +
            " British Menu. All rights reserved.";
    }


    /*
     * Smooth internal navigation
     *
     * The browser already supports smooth scrolling through CSS,
     * but this JavaScript also handles the case where the user
     * clicks an internal anchor link.
     */
    const internalLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const targetElement =
                document.querySelector(targetId);

            if (!targetElement) {
                return;
            }

            event.preventDefault();

            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });

    });


    /*
     * External links
     *
     * This function intentionally does not modify internal
     * navigation links. It is kept lightweight and does not
     * create unnecessary tracking scripts.
     */
    const allLinks = document.querySelectorAll("a");

    allLinks.forEach(function (link) {

        const href = link.getAttribute("href");

        if (!href) {
            return;
        }

        if (
            href.startsWith("http://") ||
            href.startsWith("https://")
        ) {
            link.setAttribute(
                "rel",
                "noopener noreferrer"
            );
        }

    });


    /*
     * Prevent accidental empty buttons or links.
     * This is only a small safety check and does not
     * affect SEO content.
     */
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const href = button.getAttribute("href");

            if (!href || href === "#") {
                return;
            }

        });

    });

});
```
