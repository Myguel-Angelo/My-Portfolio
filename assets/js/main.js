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

/*
function expandCard(card, cardId) {
    let expandedCard = document.querySelector('.card.expanded');
    let newCardContent = document.querySelector('.cont'+cardId);

    if (expandedCard && expandedCard !== card) {
        return
    }
    if (expandedCard) {
        newCardContent.classList.toggle('visible');
        setTimeout(() => {
            card.classList.toggle('expanded');
        }, 300);
    } else {
        card.classList.toggle('expanded');
        setTimeout(() => {
            newCardContent.classList.toggle('visible');
        }, 400);
    }
}
*/
function expandCard(card, cardId) {
    let expandedCard = document.querySelector('.card.expanded');
    let newCardContent = document.querySelector('.cont' + cardId);
    let allCards = document.querySelectorAll('.card');

    if (expandedCard && expandedCard !== card) {
        return;
    }
    if (!expandedCard) {
        card.classList.add('expanded');
        allCards.forEach(c => {
            if (c !== card) {
                c.classList.add('invisible');
                setTimeout(() => {
                    c.classList.add('hidden');
                    setTimeout(() => {
                        newCardContent.classList.add('visible');
                    }, 400);
                }, 400);
            }
        })
    } else {
        card.classList.remove('expanded');
        newCardContent.classList.remove('visible');
        setTimeout(() => {
            allCards.forEach(c => {
                if (c !== card) {
                    c.classList.remove('hidden');
                    setTimeout(() => {
                        c.classList.remove('invisible');
                    }, 400);
                }
            })
        }, 400);
    }
}



// textos Automátocos com animação
const textos = ['Pogramador Back-End', 'Automação Industrial - IFMA', 'Ciêntista da Computação - UFMA', 'Criador de Soluções Tecnológicas'];
const elemento = document.getElementById('info');
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

