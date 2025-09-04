// Capturando elementos do DOM

// const parar = document.getElementById('Parar');
// parar.style.backgroundColor = 'red';

// const atencao = document.getElementById('Atencao');
// atencao.style.backgroundColor = 'yellow';

// const prosseguir = document.getElementById('Prosseguir');
// prosseguir.style.backgroundColor = 'green';

function parar() {
    document.getElementById('parar').style.backgroundColor = 'red';
    document.getElementById('atencao').style.backgroundColor = 'gray';
    document.getElementById('prosseguir').style.backgroundColor = 'gray';
}

function atencao() {
    document.getElementById('parar').style.backgroundColor = 'gray';
    document.getElementById('atencao').style.backgroundColor = 'yellow';
    document.getElementById('prosseguir').style.backgroundColor = 'gray';
}

function prosseguir() {
    document.getElementById('parar').style.backgroundColor = 'gray';
    document.getElementById('atencao').style.backgroundColor = 'gray';
    document.getElementById('prosseguir').style.backgroundColor = 'green';
}

