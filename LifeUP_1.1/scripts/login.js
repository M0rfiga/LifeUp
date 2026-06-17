function login() {
    event.preventDefault();

    let email = document.getElementById("email");
    let password = document.getElementById("senha");

    acessEmail = email.value;
    acessPassword = password.value;

    if(acessEmail == "admin@lifeup.com"  && acessPassword == "admin") {
        window.location.href = 'home.html';
    } else {
        alert("Senha ou usuário inválidos");

        email.style = 'border: 2px solid #ad1c1c;';
        password.style = 'border: 2px solid #ad1c1c;';
    }
}