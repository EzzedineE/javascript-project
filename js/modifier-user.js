var pseudo = JSON.parse(localStorage.getItem('users')) || []
var nom = document.getElementById("nom")
var email = document.getElementById("email")
var password = document.getElementById("password")
var i = Number(window.location.search.substring(7))

function modifier() { 
    nom.value = pseudo[i].nom;
    email.value = pseudo[i].email;
    password.value = pseudo[i].password;
}

function valider() {
    var object = {
      nom: nom.value,
      email: email.value,
      password: password.value,
    };
    pseudo.splice(i, 1, object);
    localStorage.setItem("users", JSON.stringify(pseudo));
    nom.value = "";
    email.value = "";
    password.value = "";
    window.location.replace("./gestion-utilisateur.html")
}
  