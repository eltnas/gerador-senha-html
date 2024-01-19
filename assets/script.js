const btn = document.getElementById('generate');
const qtd = document.getElementById('qtd');
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const numbers = document.getElementById('numbers');
const special = document.getElementById('special');
const senha = document.getElementById('senha');

function obterValor() {
    return qtd.value;
}

function obterCheckBox(sel) {
    return sel.checked;
}

function valorGerado() {
    const gerarValorNum = "0123456789";
    const gerarValorUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const gerarValorLower = "abcdefghijklmnopqrstuvwxyz";
    const gerarValorSpecial = "!@#$%&*(){}][|";
    let gerarValor = "";

    if (upper.checked)
        gerarValor += gerarValorUpper;

    if (lower.checked)
        gerarValor += gerarValorLower;

    if (numbers.checked)
        gerarValor += gerarValorNum;

    if (special.checked)
        gerarValor += gerarValorSpecial;	

    return gerarValor;
}

function senhaGerada(){
	let valores = valorGerado();
	let senha = "";

	for (let i = 0; i < obterValor(); i++) {
        const indice = Math.floor(Math.random() * valores.length);
        senha += valores.charAt(indice);
    }

	return senha;
}

btn.addEventListener('click', () => {
    let resUpper = obterCheckBox(upper);
    let resLower = obterCheckBox(lower);
    let resNumbers = obterCheckBox(numbers);
    let resSpecial = obterCheckBox(special);

    if(resUpper == true || resLower == true || resNumbers == true || resSpecial == true ){
    	let resultadoFinal = senhaGerada();
    	senha.innerHTML = '<h1>' + resultadoFinal + '</h1>'
    }
    else {
    	alert("Escolha pelo menos uma opção!!")
    }

    
});
