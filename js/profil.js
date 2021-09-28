var users = JSON.parse(localStorage.getItem("users")) || [];
var nom = document.getElementById("nom1");
var email = document.getElementById("email1");
var password = document.getElementById("password1");
var index;
var input1 = document.getElementById("input")

function profil() {
    document.getElementById("connecte").innerHTML = "";
    const connectedUser = JSON.parse(localStorage.getItem("connectuser"));
    var users = JSON.parse(localStorage.getItem("users")) || [];
    const connectedUserIndex = users.findIndex((element) => element.email === connectedUser.email);
    users.forEach((users, i) => {
        if (connectedUserIndex == i) {
            document.getElementById("connecte" ).innerHTML += `<b>Nom :</b> ${users.nom}<hr>
            <b> Prenom :</b> ${users.email}<hr>
            <b> Mot de passe :</b> ${users.password}<hr>
            <button class="mb-4 btn btn-primary" type="button" onclick="modifier(${i})"><i class="fa fa-save"></i> Modifier</button>`;
        }
    })
}
input1.addEventListener('click',modifier)
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

                localStorage.setItem("connectuser", JSON.stringify(object));
                localStorage.setItem("users", JSON.stringify(users));
                profil();
            }
        }
