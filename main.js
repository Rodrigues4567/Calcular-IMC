
const button = document.querySelector('#button');

button.addEventListener('click', submit = () => {
    const peso = document.querySelector('#peso').value;
    const altura = document.querySelector('#altura').value;

    const imc = getImc(peso, altura).toFixed(2);
    const medidas = nivelPeso(imc);

    if(peso == '' || altura == '') {
        res('ERRO! Preencha todas as opções.')
    }
    else {
        res(`Seu IMC é: ${imc} (${medidas})`)
    }
})

function res(msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('paragrafo-resposta');
    resultado.appendChild(paragrafo);
    paragrafo.innerHTML = msg;
}

function getImc(peso, altura) {
    return peso / (altura * altura);
}

function nivelPeso(imc) {
    if(imc >= 24.9) {return 'Você está acima do peso.'}
    if(imc >= 18.5) {return 'Seu peso está normal.'}
    if(imc < 18.5) {return 'Você está abaixo do peso.'}
}