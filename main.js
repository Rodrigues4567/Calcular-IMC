
let botaoCalcular = document.getElementById('button');

function calculaImc() {
    
    let inputPeso = document.getElementById('peso').value;
    let inputAltura = document.getElementById('altura').value;
    let resultado = document.getElementById('resultado');

    if (inputPeso == '' || inputAltura == '') {
        resultado.textContent = 'ERRO! Preencha os campos para ter um resultado válido.'
    }
    else {
        const imc = (inputPeso / (inputAltura * inputAltura)).toFixed(1);

        let resposta = ''

        if (imc < 18.5) {
            resposta = 'você está abaixo do peso.'
        }
        else if (imc > 18.5 && imc < 25) {
            resposta = 'seu peso está normal.'
        }
        else {
            resposta = 'você está acima do peso.'
        }

        resultado.textContent = `O seu IMC é: ${imc} ${resposta}`
        
    }

}

botaoCalcular.addEventListener('click', calculaImc);