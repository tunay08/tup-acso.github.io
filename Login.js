function checkLogIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (localStorage.getItem("email") === email && localStorage.getItem("password") === password) {
        alert("log in successful!")
        window.location.href = "TUP-ACSO.html";
    } else {
        alert("Invalid email or password!");
    }
}