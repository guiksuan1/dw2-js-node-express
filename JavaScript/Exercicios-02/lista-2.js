class Heroi {
    constructor(nome, vida, velocidade, forca){
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }

    correr(){
        return `${this.nome} está correndo!!`;
    }

    andar(){
        return `${this.nome} está andando`;
    }

    atacar(){
        return `${this.nome} está atacando!!`;
    }

    defender(){
        return `${this.nome} está se defendendo`;
    }
}


const homemAranha = new Heroi("Homem-Aranha", 100, 80, 100);

homemAranha.teia = 1 ;

homemAranha.sentidoAranha = () => {
    return "Usou o Sentido Aranha e detectou perigo!!";
};

homemAranha.soltarTeia = () => {
    return homemAranha.teia === 1 ? "Lançou teia!" : "Não pode lançar teia!";
};


const superman = new Heroi("Superman", 200, 200, 500);

superman.podeVoar = 1 ;

superman.visaoCalor = () => {
    return "Ele começa a soltar raios pelos olhos!!!";
};

superman.voar = () => {
    return superman.podeVoar === 1 ? "Superman está voando!" : "Superman não consegue voar.";
};


const batman = new Heroi("Batman", 80, 60, 90);

batman.esconder = 1;

batman.investigar = () => {
    return "Batman vai investigar!!";
};

batman.seEsconder = () => {
    return batman.esconder === 1 ? "Batman está escondido nas sombras." : "Batman não está se escondendo.";
};


document.write(`<p>${homemAranha.correr()}<p/>`);
document.write(`<p>${homemAranha.nome} ${homemAranha.sentidoAranha()}<p/>`);
document.write(`<p>${homemAranha.nome} ${homemAranha.soltarTeia()}<p/>`);

document.write(`<p>${superman.voar()}<p/>`);
document.write(`<p>${superman.visaoCalor()}<p/>`);

document.write(`<p>${batman.investigar()}<p/>`);
document.write(`<p>${batman.seEsconder()}<p/>`);


document.write(`<p>${superman.nome}<p/>`);
document.write(`<p>${batman.correr()}<p/>`);