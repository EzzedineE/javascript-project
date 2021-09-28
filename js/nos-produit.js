var produit = JSON.parse(localStorage.getItem("produit")) || [];
var recherche = document.getElementById("recherche")

function affiche(){
    affichage(produit)
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
        </tr>`;
  });
}
function rechercher() {
    const rechercheArr = produit.filter((element) =>
      element.nom.toLowerCase().includes(recherche.value.toLowerCase()))
      affichage(rechercheArr)
}