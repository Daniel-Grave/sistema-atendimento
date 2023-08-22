import "./libs"

const inputNome=document.querySelector('#inputNome');
const selectPrioridade=documet.querySelector('#selectPrioridade');
const btnIncluir=document.querySelector('#btnIncluir');
const ulLista=document.querySelector('#ulLista');
const displayNome=document.querySelector('#displayNome');
const btnChamar=displayNome.querySelector('#btnChamar');
const listaDeAtendimento=new Array();



function incluir(){
    listaDeAtendimento.push(inputNome.value);
    listar();
}

function listar(){
    for(let nome of listaDeAtendimento){

    }
}

//eventos vvv

btnIncluir.onclick=incluir;