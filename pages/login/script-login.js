function validateLogin(event) {
    event.preventDefault();

    // Obter valores de entrada
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simular autenticação (substitua isso por um backend real)
    if (username === 'admin' && password === '123') {
        // Redirecionar para a página de consulta após o login bem-sucedido
        window.location.href = '/pages/consulta/consulta.html';

    } else {
        alert('Nome de usuário ou senha incorretos. Tente novamente.');
    }
}
