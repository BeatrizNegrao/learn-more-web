document.addEventListener("DOMContentLoaded", () => {
    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));

    // Exemplo de abertura do modal via código
    const openModalButton =  document.querySelector('[data-bs-target="#loginModal"]');
    openModalButton.addEventListener('click', () => {
        loginModal.show();
    });

    // Login adicional, como validação do formulário 
    const loginForm = document.querySelector('#loginModal form');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); //evita o envio padrão do formulário 
        const email = loginForm.querySelector('#email').value;
        const password = loginForm.querySelector('#password').value; 

        console.log(`Email: ${email}, Password: ${password}`);

    });

});