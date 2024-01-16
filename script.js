function toggleMode() {
    const html = document.documentElement;

    // if (html.classList.contains('light')) {
    //     html.classList.remove('light');
    // } else {
    //     html.classList.add('light');
    // }

    html.classList.toggle('light');

    // Cria um objeto de áudio
    var audio = new Audio('assets/click-buton.wav'); // Substitua pelo caminho do seu arquivo de som
    audio.volume = 0.5;
    // Reproduz o som
    audio.play();

}
