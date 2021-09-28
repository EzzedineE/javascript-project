var produit = JSON.parse(localStorage.getItem("produit")) || [];
var recherche = document.getElementById("recherche");

function affiche() {
  affichage(produit);
}

function affichage(produit) {
  document.getElementById("produit1").innerHTML = "";
  produit.forEach((element, i) => {
    document.getElementById("produit1").innerHTML += `<tr> 
          <td>${element.nom}</td>
          <td>${element.description} </td>
          <td>${element.quantité}</td>
          <td>${element.prix}</td>
          <td>
            <img src="${element.Photo}" width="50" height="50">
          </td>
          <td class="text-center" class="text-center">
          <button class="mx-3 rounded btn btn-danger" onclick="supprimer(${i})"><i class="fa fa-trash"></i> Supprimer</button>
          <a class="mx-3 rounded btn btn-primary" href="./modifier-produit.html?index=${i}"><i class="fa fa-edit"></i> Modifier</a>
        </td>
        </tr>`;
  });
}
function rechercher() {
  const rechercheArr = produit.filter(
    (element) =>
      element.nom.toLowerCase().includes(recherche.value.toLowerCase()) ||
      element.description
        .toLowerCase()
        .includes(recherche.value.toLowerCase()) ||
      element.quantité.toLowerCase().includes(recherche.value.toLowerCase()) ||
      element.prix.toLowerCase().includes(recherche.value.toLowerCase())
  );
  affichage(rechercheArr);
}
function supprimer(i) {
  if (confirm("voulez vous supprimer")) {
    produit.splice(i, 1);
    affichage(produit);
    localStorage.setItem("produit", JSON.stringify(produit));
  }
}
