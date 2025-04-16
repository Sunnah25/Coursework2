
/* -----------Sign Up & Log In---------------------*/

/*animation*/
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

/*works*/
function signUp() {
    let name = document.getElementById("signupname").value;
    let email = document.getElementById("signupmail").value;
    let password = document.getElementById("signuppass").value;

    if (!name || !email || !password) {
        alert("Please fill all fields!");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please input a valid email.");
        return;
    }

    if (password.length < 8) {
        alert("Too short password!");
        return;
    }

    localStorage.setItem("username", name);
    localStorage.setItem("usermail", email);
    localStorage.setItem("userpass", password);

    alert("Sign Up Successful!");
}


function logIn() {
    let email = document.getElementById("loginmail").value;
    let password = document.getElementById("loginpass").value;

    let savedEmail = localStorage.getItem("usermail");
    let savedPassword = localStorage.getItem("userpass");

    if (email === savedEmail && password === savedPassword) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login Successful!");
        window.location.assign("home.html");
    } else {
        alert("Invalid email or password!");
    }
}

$(document).ready(function(){
    $("#forgot").click(function(){
      $("#forgot_pass").fadeIn("slow");
    });

    $("#ok_btn").click(function(){
        $("#forgot_pass").fadeOut("slow");
    });
});