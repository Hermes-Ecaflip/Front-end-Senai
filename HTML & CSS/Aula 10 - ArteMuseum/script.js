function btnMobillee() {
    var menuMobile = document.getElementById('menumobile');
    var menuDesktop = document.getElementById('menudesktop');

    if (menuMobile.style.display === 'block') {
        menuMobile.style.display = 'none';
        menuDesktop.style.display = 'block';
    } else {
        menuMobile.style.display = 'block';
        menuDesktop.style.display = 'none';
    }
}
