function toggleMode() {
    const html = document.documentElement;

    // if (html.classList.contains('light')) {
    //     html.classList.remove('light');
    // } else {
    //     html.classList.add('light');
    // }

    html.classList.toggle('light');

    // Cria um objeto de áudio
    var audio = new Audio('../../assets/click-buton.wav'); // Substitua pelo caminho do seu arquivo de som
    audio.volume = 0.3;
    // Reproduz o som
    audio.play();

}


function login(event) {
    // Evite o envio padrão do formulário
    event.preventDefault();

    // Obtenha os valores inseridos
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;

    // Verifique as credenciais (ajuste conforme necessário)
    if (email === "grazydd@gmail.com" && password === "123") {
      alert("Login bem-sucedido! Você pode adicionar redirecionamento ou outras ações aqui.");
    } else {
      alert("Login falhou. Verifique seu email e senha.");
    }
}

