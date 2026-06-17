function ativarEdicao() {
    document.querySelectorAll(".form-control").forEach(input => {
        input.removeAttribute("readonly");
        input.removeAttribute("style");

    document.getElementById("confirmaEdicao").removeAttribute("style");
        
    });
}

function atualizarUsuario() {
    nome.value = document.getElementById("nome").value;
    email.value = document.getElementById("email").value;
    telefone.value = document.getElementById("telefone").value;

    document.querySelectorAll(".form-control").forEach(input => {
        input.setAttribute("readonly", true);
        input.setAttribute("style", "background-color: #ffffff00;");
    });
    document.getElementById("confirmaEdicao").setAttribute("style", "display: none");
}