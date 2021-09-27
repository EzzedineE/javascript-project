var perso = JSON.parse(localStorage.getItem('users')) || []

function login(event) {
    event.preventDefault();
    // console.log(email3.value);
    // console.log(password3.value);
    const conected = Users.find(
        (element) => element.email == email3.value && element.password == password3.value)
        if (conected) {
            localStorage.setItem("UserConnecter", JSON.stringify(conected));
            // location.replace("")
        }
        else
        {
            alert("Entre non valider")
        }
}