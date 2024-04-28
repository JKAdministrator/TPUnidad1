function onTipoDeSeguroChange(e){
    let select = document.getElementById('tipoSeguro');
    let valorDelSeguro = document.querySelector(`option[value="${select.value}"]`).dataset.valor;
    document.getElementById('ivalorSeguro').innerText = select.value ==""? "" : `$ ${valorDelSeguro}`;
}

window.addEventListener("load", (event) => {
    document.getElementById('tipoSeguro').addEventListener('change',onTipoDeSeguroChange,{passive: true})
});