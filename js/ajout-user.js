var Name = document.getElementById("Name");
var email = document.getElementById("email");
var password = document.getElementById("password1");
var password2 = document.getElementById("password2");
var Users = JSON.parse(localStorage.getItem("users")) || [];

function ajout() {
  const Verif = Users.find((element) => element.email == email.value);
  if (Verif) {
    alert("email existante");
  } else {
    Users.push({
      Name: Name.value,
      email: email.value,
      password: password.value,
    });
    localStorage.setItem("users", JSON.stringify(Users));
    Name.value = "";
    email.value = "";
    password1.value = "";
    password2.value = "";
    window.location.replace("./gestion-utilisateur.html")
  }
}