const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')
let minhalistaDeItens = []

function adicionarNovaTarefa() {
    minhalistaDeItens.push({
        tarefa: input.value,
        concluida: false
    })
    input.value = ''
    mostrarTarefas()

}
function mostrarTarefas() {
    let novaLi = ''
    minhalistaDeItens.forEach((item, posicao)  => {
        novaLi = novaLi + `
         
         <li class="task ${item.concluida && "done"}">
           <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
           <p>${item.tarefa}</p>
           <img src="./img/trash.png" alt="tarefa-para-lixo" onclick="deletarItem(${posicao})">
       </li>
         
         `
    })

listaCompleta.innerHTML = novaLi
 localStorage.setItem('lista',JSON.stringify(minhalistaDeItens))
}

function concluirTarefa(posicao){
     minhalistaDeItens[posicao].concluida = !minhalistaDeItens[posicao].concluida
     mostrarTarefas()
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    
    if(tarefasDoLocalStorage){
        minhalistaDeItens = JSON.parse(tarefasDoLocalStorage)
    }   
    mostrarTarefas()
}


function deletarItem(posicao){

    minhalistaDeItens.splice(posicao, 1)
    mostrarTarefas()
}






button.addEventListener('click', adicionarNovaTarefa)