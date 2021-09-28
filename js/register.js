var Name = document.getElementById("Name");
var email = document.getElementById("email");
var password = document.getElementById("password1");
var password2 = document.getElementById("password2");
var Users = JSON.parse(localStorage.getItem("users")) || [];
var x = document.getElementById("myModal2")
var close = document.getElementById("close")

function register(event) {
    // event.preventDefault();
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
    close.click()
  }
}