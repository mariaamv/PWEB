// ==================== Saudação ====================
const horas = new Date().getHours();
const cumprimento = document.getElementById("saudacao");

let saudacaoTexto;
if (horas < 12) {
    saudacaoTexto = "Bom dia";
} else if (horas < 18) {
    saudacaoTexto = "Boa tarde";
} else {
    saudacaoTexto = "Boa noite";
}

cumprimento.innerHTML = `${saudacaoTexto}, <b>Clara e Luma👋</b>`;

// ==================== TodoList ====================
const formulario = document.getElementById("container_1");
const inputTarefa = document.getElementById("add_tarefa");
const divConcluidas = document.getElementById("concluidas");
const divUltima = document.querySelector(".ult_div");

let tarefas = [];

// Adiciona tarefa
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const texto = inputTarefa.value.trim();
    if (!texto) {
        alert("Digite o nome da tarefa!");
        return;
    }

    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString("pt-BR");

    tarefas.push({ nome: texto, concluida: false, data: dataFormatada });
    inputTarefa.value = "";
    mostrarTarefas();
});

// Mostra tarefas
function mostrarTarefas() {
    // Limpa tarefas antigas
    const antigas = document.querySelectorAll(".tarefa-item");
    antigas.forEach(t => t.remove());

    if (tarefas.length === 0) {
        divUltima.style.display = "flex";
        divConcluidas.innerHTML = "";
        return;
    } else {
        divUltima.style.display = "none";
    }

    tarefas.forEach((tarefa, index) => {
        const divTarefa = document.createElement("div");
        divTarefa.className = "tarefa-item";

        const divInfo = document.createElement("div");
        divInfo.className = "tarefa-info";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.concluida;

        const textoDiv = document.createElement("div");

        const span = document.createElement("span");
        span.textContent = tarefa.nome;
        if (tarefa.concluida) {
            span.classList.add("concluida");
        }

        const data = document.createElement("small");
        data.textContent = `Adicionada em ${tarefa.data}`;
        data.className = "data-tarefa";

        textoDiv.appendChild(span);
        textoDiv.appendChild(data);

        const botao = document.createElement("button");
        botao.textContent = "🗑️";
        botao.className = "btn-delete";

        divInfo.appendChild(checkbox);
        divInfo.appendChild(textoDiv);

        divTarefa.appendChild(divInfo);
        divTarefa.appendChild(botao);

        divUltima.parentNode.insertBefore(divTarefa, divUltima);

        // Eventos
        checkbox.addEventListener("change", () => {
            tarefa.concluida = checkbox.checked;
            if (tarefa.concluida) {
                span.classList.add("concluida");
                divTarefa.classList.add("verde");
            } else {
                span.classList.remove("concluida");
                divTarefa.classList.remove("verde");
            }
            atualizarContador();
        });

        botao.addEventListener("click", () => {
            tarefas.splice(index, 1);
            mostrarTarefas();
        });
    });

    atualizarContador();
}

// Atualiza contador
function atualizarContador() {
    const concluidas = tarefas.filter(t => t.concluida).length;
    divConcluidas.innerHTML = `${concluidas} de ${tarefas.length} <strong>concluídas</strong>`;
}

// Inicia
mostrarTarefas();