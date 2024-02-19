// JavaScript 코드
document.addEventListener("DOMContentLoaded", function () {
    const toggleDropdown = document.getElementById("toggleDropdown");
    const languageDropdown = document.querySelector(".taptext1_1");

    let isDropdownOpen = false;

    function toggleLanguageDropdown() {
        if (isDropdownOpen) {
            languageDropdown.style.display = "none";
        } else {
            languageDropdown.style.display = "block";
        }
        isDropdownOpen = !isDropdownOpen;
    }

    toggleDropdown.addEventListener("click", toggleLanguageDropdown);

    const tapTop1 = document.querySelector(".tap_top1");
    tapTop1.addEventListener("click", toggleLanguageDropdown);

    const languageListItems = document.querySelectorAll(".taptext1_1 li");
    languageListItems.forEach(function (item) {
        item.addEventListener("click", function () {
        });
    });
});

window.onload = function() {
    const menuItems = document.querySelectorAll('.tap_bot');
    menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', () => {
            const submenu = menuItem.nextElementSibling;
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                submenu.style.display = 'block';
            }
        });
    });
}


// <!-- Google tag (gtag.js) -->
// window.dataLayer = window.dataLayer || [];
// function gtag() { dataLayer.push(arguments); }
// gtag('js', new Date());

// gtag('config', 'G-LKTQ698DXE');