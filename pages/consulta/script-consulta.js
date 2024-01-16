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

        // Crie um item da lista para a nova consulta
        const newAppointmentItem = document.createElement('li');
        newAppointmentItem.innerHTML = `
            <strong>${petName}</strong> (${ownerName}) - ${appointmentDate} às ${appointmentTime}<br>
            Contato: ${contactNumber}
        `;

        // Adicione o item à lista de consultas agendadas
        upcomingAppointmentsList.appendChild(newAppointmentItem);

        // Limpe o formulário
        consultationForm.reset();
    });
});
