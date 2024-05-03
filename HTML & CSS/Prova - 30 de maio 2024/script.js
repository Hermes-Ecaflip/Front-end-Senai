// Função para alternar a barra lateral
document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

// Índice inicial do slide
var slideIndex = 1;
mostrarSlides(slideIndex);

// Função para mover para o próximo ou anterior slide
function moverSlide(n) {
  mostrarSlides(slideIndex += n);
}

// Função para mostrar o slide atual
function mostrarSlides(n) {
    var slides = document.getElementsByClassName("carrossel-slide");
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex-1].classList.add("active");
}




