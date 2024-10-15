// Captura o formulário
const form = document.getElementById('form-contato');

// Adiciona um evento para validar os campos ao enviar o formulário
form.addEventListener('submit', function(event) {
    if (!form.checkValidity()) {
        event.preventDefault(); // Impede o envio do formulário se houver campos inválidos
        event.stopPropagation();
    }
    form.classList.add('was-validated'); // Adiciona classes de validação
}, false);
