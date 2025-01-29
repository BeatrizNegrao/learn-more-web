
document.addEventListener("DOMContentLoaded", () => { 
    const btnCadastrar= document.getElementById("btnCadastrar");
    const cadastroModal = new bootstrap.Modal(document.getElementById("cadastroModal"));

    btnCadastrar.addEventListener("click", () => {
        cadastroModal.show();
    });
});



