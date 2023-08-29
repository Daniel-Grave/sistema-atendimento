import "./libs"

const inputNome=document.querySelector('#inputNome');
const selectPrioridade=document.querySelector('#selectPrioridade');
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
    ulLista.innerHTML="";
    for(let nome of listaDeAtendimento){
    
        let li = document.createElement('li')
        li.classList.add('list-group-item')
        li.textContent=nome
        ulLista.appendChild(li)

    }
}

//eventos vvv

btnIncluir.onclick=incluir;