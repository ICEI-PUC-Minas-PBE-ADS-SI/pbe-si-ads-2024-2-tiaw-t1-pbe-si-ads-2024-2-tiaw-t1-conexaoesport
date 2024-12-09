document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

  
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem. Por favor, tente novamente.");
        return;
    }

  
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);

  
    const messageElement = document.getElementById("message");
    messageElement.style.display = "block";

    
    document.getElementById("loginForm").reset();


    setTimeout(() => {
        messageElement.style.display = "none";
    }, 3000);
});
