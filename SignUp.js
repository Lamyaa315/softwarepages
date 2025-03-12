document.addEventListener("DOMContentLoaded", function () {
    const makeupRole = document.getElementById("MakeupArtistRole");
    const clientRole = document.getElementById("ClientRole");
    const makeupForm = document.getElementById("MakeupArtist");
    const clientForm = document.getElementById("Client");

    makeupForm.style.display = "none";
    clientForm.style.display = "none";

    function showForm() {
        makeupForm.style.display = "none";
        clientForm.style.display = "none";

        if (makeupRole.checked) {
            makeupForm.style.display = "block";
        } else if (clientRole.checked) {
            clientForm.style.display = "block";
        }
    }

    makeupRole.addEventListener("change", showForm);
    clientRole.addEventListener("change", showForm);
});
function validateForm(role) {
    let name, email, password, phone;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (role === "Client") {
        name = document.getElementById("FullName").value.trim();
        email = document.getElementById("ClientEmail").value.trim();
        password = document.getElementById("password").value.trim();
        phone = document.getElementById("phoneNum").value.trim();
    } else if (role === "MakeupArtist") {
        name = document.getElementById("fullName").value.trim();
        email = document.getElementById("MAEmail").value.trim();
        password = document.getElementById("pass").value.trim();
        phone = document.getElementById("PhoneNum").value.trim();
    }

    if (!name || !email || !password || !phone) {
        alert("All fields are required!");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    let userData = { name, email, password, phone };
    localStorage.setItem("userData", JSON.stringify(userData));

    if (role === "MakeupArtist") {
        window.location.href = "MAHomePage.html";
    } else {
        window.location.href = "WelcomePage.html";
    }
}