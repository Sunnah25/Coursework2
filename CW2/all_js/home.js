document.getElementById("head_login").addEventListener("click", function() {
    window.location.href = "log_sign.html";
});

document.getElementById("head_sign").addEventListener("click", function() {
    window.location.href = "log_sign.html";
});

document.getElementById("join_btn").addEventListener("click", function() {
    window.location.href = "log_sign.html";
})


document.addEventListener("DOMContentLoaded", function () {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    let savedEmail = localStorage.getItem("usermail");
    let changeButtons = document.getElementById("changeButtons");

    if (isLoggedIn === "true" && savedEmail) {
        let firstletter = savedEmail.charAt(0).toUpperCase();

        changeButtons.innerHTML =`<button class="logout_btn" onclick="logout()">Logout</button>
                                  <div class="pro_pic"> ${firstletter} </div>`;
    }
});

function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "home.html";
}


/* cookies */
function setCookies(name, values, hours) {
    let date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    let expires = "expires = " + date.toUTCString();
    document.cookie = name + "=" + values + ";" + expires + ";path=/";
}

function getCookie(name) {
    let cookies = document.cookie.split(";");
    for (let cookie of cookies) {
        let [key, value] = cookie.split("=");
        if (key===name) return value;
    }
    return null;
}

function checkCookies() {
    if (!getCookie("userconsent")) {
        document.getElementById("cookie_div").style.display = "block";
    }
}

function acceptCookies() {
    setCookies("userConsent", "accepted", 1);
    document.getElementById("cookie_div").style.display = "none";
}
function declineCookies() {
    setCookies("userConsent", "declined", 1);
    document.getElementById("cookie_div").style.display = "none";
}

window.onload = checkCookies;



$(document).ready(function () {
    $('#submit-review').click(function (e) {
        e.preventDefault();

        let username = localStorage.getItem("username") || "User";
        let rating = $('input[name="rating"]:checked').val();
        let feedback = $("#feedback-text").val().trim();


        let starCount = rating.split('-')[1];
      

        let reviewHTML = `
            <div class="review-entry">
                <strong>${username}</strong> rated: ${starCount} ⭐<br>
                <em>${feedback}</em>
            </div>
        `;

        $("#all-reviews").append(reviewHTML);


        $("#feedback-text").val('');
        $("input[name='rating']").prop("checked", false);


        $("#review_box").fadeIn(300);
    });

    $(".close-btn").click(function () {
        $("#review_box").fadeOut(200);
    });

});
  