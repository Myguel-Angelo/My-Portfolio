// menu de navegação para telas menores
const hamburgerMenu = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');
const navLinks = document.querySelectorAll('.sidebar .nav-links a');

hamburgerMenu.addEventListener('click', () => {
    sidebar.classList.toggle('open'); // alterna entre aberto e fechado;
});

    // fecha o menu ao clicar em algum dos botões
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('open'); 
    });
});


// textos Automátocos com animação
const textos = ['Pogramador Back-End', 'Técnico em Automação Industrial - IFMA', 'Ciêntista da Computação - UFMA', 'Criador de Soluções Tecnológicas'];
const elemento = document.getElementById("info");
let indiceTexto = 0;
let indiceLetra = 0;
let apagando = false;

function escreverTexto() {
    if (!apagando) {
        if (indiceLetra < textos[indiceTexto].length) {
            elemento.textContent += textos[indiceTexto][indiceLetra];
            indiceLetra++;
            setTimeout(escreverTexto, 100);
        } else {
            setTimeout(() => {
                apagando = true;
                apagarTexto();
            }, 1500);
        }
    }
}
function apagarTexto() {
    if (apagando) {
        if (indiceLetra > 0) {
            elemento.textContent = textos[indiceTexto].substring(0, indiceLetra - 1);
            indiceLetra--;
            setTimeout(apagarTexto, 50);
        } else {
            apagando = false;
            indiceTexto = (indiceTexto + 1) % textos.length;
            setTimeout(escreverTexto, 500);
        }
    }
}

escreverTexto();