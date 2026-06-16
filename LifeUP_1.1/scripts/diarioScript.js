let emocaoSelecionada = "";

function selecionarEmocao(botao, icon) {
    emocaoSelecionada = icon;
    
    document.querySelectorAll(".btn-emocoes").forEach(btn => {
        btn.classList.remove("btn-selecionado");
    });

    botao.classList.add("btn-selecionado");
}

function marcarDia(celula) {
    if (!emocaoSelecionada) {
        alert("Selecione uma emoção primeiro!");
        return;
    }

    celula.innerHTML = `<i class="bi ${emocaoSelecionada}"></i>`;
}

