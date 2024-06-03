let convidados = [];
let ul = document.getElementById("lista"); //Chamamos a nossa lista do HTML

function convidarPessoa(){
    let i = document.getElementById("i_convidado").value;
    convidados.push(i)

    document.getElementById("i_convidado").value = "";
    desenha_lista();
}

function desenha_lista(){
    ul.innerHTML = "";
    for (let x=0; x<convidados.length; x++){
        ul.innerHTML += `<li> ${convidados[x]}</li>`
    }
}

function excluirConvidado(){
    convidados.pop();
    desenha_lista();
}

function excluirShift(){ //Shift significa Primeiro
convidados.shift();
desenha_lista();
}
