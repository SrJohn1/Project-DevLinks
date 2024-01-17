document.addEventListener('DOMContentLoaded', function () {
    const consultationForm = document.getElementById('consultationForm');
    const upcomingAppointmentsList = document.getElementById('upcomingAppointments');

    consultationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const petName = document.getElementById('petName').value;
        const ownerName = document.getElementById('ownerName').value;
        const contactNumber = document.getElementById('contactNumber').value;
        const appointmentDate = document.getElementById('appointmentDate').value;
        const appointmentTime = document.getElementById('appointmentTime').value;
        const animalBreed = document.getElementById('animalBreed').value;

        // Crie um item da lista para a nova consulta
        const newAppointmentItem = document.createElement('li');
        newAppointmentItem.classList.add('appointment-item'); // Adiciona uma classe para estilização

        newAppointmentItem.innerHTML = `
            <div class="appointment-details">
                <strong>${petName}</strong> (${ownerName})<br>
                <span>Data: ${appointmentDate}</span><br>
                <span>Horário: ${appointmentTime}</span><br>
                <span>Contato: ${contactNumber}</span><br>
                <span>Raça: ${animalBreed}</span>
            </div>
        `;

        // Adicione o item à lista de consultas agendadas
        upcomingAppointmentsList.appendChild(newAppointmentItem);

        // Limpe o formulário
        consultationForm.reset();
    });
});
