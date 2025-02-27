document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === 'Admin' && password === 'password123') {
        window.location.href = 'home.html'; // Redirect to home page directly
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});

document.getElementById('showPassword').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});
