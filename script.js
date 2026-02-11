const input = document.getElementById("tarefaInput");
const lista = document.getElementById("listaTarefas");

function adicionarTarefa() {
    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = input.value;

    li.onclick = () => {
        li.classList.toggle("concluida");
        salvarTarefas();
    };

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "X";
    botaoRemover.className = "remover";

    botaoRemover.onclick = (e) => {
        e.stopPropagation();
        li.remove();
        salvarTarefas();
    };

    li.appendChild(botaoRemover);
    lista.appendChild(li);

    salvarTarefas();
    input.value = "";
}

function salvarTarefas() {
    localStorage.setItem("tarefas", lista.innerHTML);
}

function carregarTarefas() {
    lista.innerHTML = localStorage.getItem("tarefas") || "";
}

carregarTarefas();
