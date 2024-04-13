function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    console.log("Email ingresado: " + email);
    console.log("Contraseña ingresada: " + password);

    if (email === 'ejemplo@gmail.com' && password === '123') {
        window.location.href = 'cliente.html';
    }
    else if (email === 'ejemplo@gmail.com' && password === '123') {
        window.location.href = 'cliente.html';
    }
    else {
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
}
