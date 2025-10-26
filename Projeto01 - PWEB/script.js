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

    tarefas.push({ nome: texto, concluida: false });
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
        // Criar elementos
        const divTarefa = document.createElement("div");
        divTarefa.className = "tarefa-item";

        const divInfo = document.createElement("div");
        divInfo.className = "tarefa-info";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.concluida;

        const span = document.createElement("span");
        span.textContent = tarefa.nome;
        if (tarefa.concluida) {
            span.classList.add("concluida");
        }

        const botao = document.createElement("button");
        botao.textContent = "🗑️";
        botao.className = "btn-delete";

        // Monta a estrutura
        divInfo.appendChild(checkbox);
        divInfo.appendChild(span);

        divTarefa.appendChild(divInfo);
        divTarefa.appendChild(botao);

        divUltima.parentNode.insertBefore(divTarefa, divUltima);

        // Eventos
        checkbox.addEventListener("change", () => {
            tarefa.concluida = checkbox.checked;
            if (tarefa.concluida) {
                span.classList.add("concluida");
            } else {
                span.classList.remove("concluida");
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