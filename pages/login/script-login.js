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
        // Personalize a mensagem do alerta
        Swal.fire({
            title: "Login efetuado com sucesso!",
            text: "Encaminhado para a página de consulta",
            icon: "success"
        }).then((result) => {
            // Redirecionar para outra página após o login bem-sucedido
            if (result.isConfirmed) {
                window.location.href = "../../pages/consulta/consulta.html"; // Substitua "pagina_consulta.html" pelo caminho desejado
            }
        });
        
    } else {
        Swal.fire({
            title: "Ops!",
            text: "Verifique sua senha ou seu email",
            icon: "error"
        });
    }


}