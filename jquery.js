$(document).ready(function() {
    $('#loginForm1').submit(function(event) {
        event.preventDefault();
        
        var username = $('#username').val();
        var password = $('#password').val();
        
        if (username === "admin123" && password === "admin123") {
            $('#loginMessage1').text("Login successful!").css("color", "green");
        } else {
            $('#loginMessage1').text("Username/Password Salah!");
        }
    });
});
