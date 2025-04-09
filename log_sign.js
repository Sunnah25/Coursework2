
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

    localStorage.setItem("username", name);
    localStorage.setItem("usermail", email);
    localStorage.setItem("userpass", password);
    
    if (name === "" || name === null) {
        alert("Error!");
    }
    if (email === "" || email === null) {
        alert("Error!");
    }
    if (password === "" || password === null) {
        alert("Error!")
    } else {
        alert("Sign Up Successful!");
    }


    
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
