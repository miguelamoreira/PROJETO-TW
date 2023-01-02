let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("card");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

let contagem = 0;
let carrinho = {};

if (localStorage.getItem("contagem")) {
    contagem = parseInt(localStorage.getItem("contagem"));
}

updateCarrinho();

let btns = document.querySelectorAll(".adicionar-carrinho");

for (let i = 0; i < btns.length; i++) {
    let btn = btns[i];
    btn.addEventListener("click", add);
}

function add(event) {
    let id = event.target.dataset.id;

if (id in carrinho) {
    carrinho[id].quant++;
} else {
    let carrinhoItem = {
        quant: 1
    };
    carrinho[id] = carrinhoItem
}

    contagem++;
    updateCarrinho();
}

function updateCarrinho() {
    document.getElementById("contagem").textContent = contagem;
}

function navbar() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
