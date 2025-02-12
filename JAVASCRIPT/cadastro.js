
document.addEventListener("DOMContentLoaded", () => {
    const loginModal = new bootstrap.Modal(document.getElementById('cadastroModal'));

    // Exemplo de abertura do modal via código
    const openModalButton =  document.querySelector('[data-bs-target="#cadastroModal"]');
    openModalButton.addEventListener('click', () => {
        loginModal.show();
    });

    // Login adicional, como validação do formulário 
    const loginForm = document.querySelector('#cadastroModal form');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); //evita o envio padrão do formulário 
        const name = cadastroForm.querySelector('#name').value;
        const email = cadastroForm.querySelector('#email').value;
        const password = cadastroForm.querySelector('#password').value; 

        console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);

    });

});


