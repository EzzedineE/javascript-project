var users = JSON.parse(localStorage.getItem("users")) || [];
var nom = document.getElementById("nom1");
var email = document.getElementById("email1");
var password = document.getElementById("password1");
var index;
function profil() {
    const connectedUser = JSON.parse(localStorage.getItem("UserConnecter"));
    var users = JSON.parse(localStorage.getItem("users")) || [];
    const UserIndex = users.findIndex((element) => element.email === connectedUser.email)
    modifier(UserIndex)
}

function modifier(i) {
    nom.value = users[i].nom;
    email.value = users[i].email;
    password.value = users[i].password;
    index = i;
}

function valider() {
    if (confirm("voulez vous  modifier?")) {
        var object = {
            nom: nom1.value,
            email: email1.value,
            password: password1.value,
        };
        nom1.value = "";
        email1.value = "";
        password1.value = "";
        users.splice(index, 1, object);
        localStorage.setItem("UserConnecter", JSON.stringify(object));
        localStorage.setItem("users", JSON.stringify(users));
        profil();
    }
}
