const encriptar = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const desencriptar = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

function encriptarTexto() {
    let input = document.getElementById('cajaTexto').value;
    let output = '';
    for (let char of input) {
        if (encriptar[char]) {
            output += encriptar[char];
        } else {
            output += char;
        }
    }
    document.getElementById('resultado').value = output;
}

function desencriptarTexto() {
    let input = document.getElementById('cajaTexto').value;
    let output = input;
    for (let key in desencriptar) {
        output = output.split(key).join(desencriptar[key]);
    }
    document.getElementById('resultado').value = output;
}

function copiarTexto() {
    let text = document.getElementById('resultado').value;
        navigator.clipboard.writeText(text);
    
}