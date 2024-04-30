
document.addEventListener('DOMContentLoaded', function() {
    var sidebarToggle = document.getElementById('sidebarToggle');
    var sidebar = document.getElementById('sidebar');

    sidebarToggle.addEventListener('click', function() {
        console.log('Botão da barra lateral clicado!');
        sidebar.classList.toggle('sidebar-open');
    });
});
