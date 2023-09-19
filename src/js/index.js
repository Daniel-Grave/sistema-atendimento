import "./libs"

const inputNome=document.querySelector('#inputNome');
const selectPrioridade=document.querySelector('#selectPrioridade');
const btnIncluir=document.querySelector('#btnIncluir');
const ulLista=document.querySelector('#ulLista');
const displayNome=document.querySelector('#displayNome');
const btnChamar=displayNome.querySelector('#btnChamar');
const listaDeAtendimento=new Array();



function incluir(){
    let pessoa={
                    nome:inputNome.value,
                    prioridade: selectPrioridade.value==='P' ? true:false
                }

    if(pessoa.prioridade){
        listaDeAtendimento.unshift(pessoa);
        listar();
    } else{
        listaDeAtendimento.push(pessoa);
        listar();
    }

}

function listar(){
    ulLista.innerHTML="";
    for(let pessoa of listaDeAtendimento){
    
        let li = document.createElement('li')
        li.classList.add('list-group-item')
        li.textContent=pessoa.nome
        ulLista.appendChild(li)

    }
}

//eventos vvv

btnIncluir.onclick=incluir;


