function ajouterProduit() {
    const user = JSON.parse(localStorage.getItem('UserConnecter'))
    console.log(users.admin);
    if (user.admin == true) {
        location.href("./ajout-produit.html")
        console.log(user.admin);
    } else {
        location.href = "./index.html"
    }
}