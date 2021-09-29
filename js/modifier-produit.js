var produit = JSON.parse(localStorage.getItem("produit")) || [];
var nom =document.getElementById("nom")
var description = document.getElementById("description")
var quantité = document.getElementById("quantité")
var prix = document.getElementById("prix")
var i = Number(window.location.search.substring(7))
function modifier() { 
    nom.value = produit[i].nom;
    description.value = produit[i].description;
    quantité.value = produit[i].quantité;
    prix.value = produit[i].prix; 
  }
  function getBase64FromImage(imageFile) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject("Error: ", error);
    });
  }


async function valider() {
    let base64;
    if (Photo.files.length > 0) {
      const myfile = Photo.files[0];
      base64 = await getBase64FromImage(myfile);
    }else{
      base64 = produit[i].Photo;
    }
    var object = {
      nom: nom.value,
      description: description.value,
      quantité: quantité.value,
      prix: prix.value,
      Photo: base64,
    };
    produit.splice(i, 1, object);
    localStorage.setItem("produit", JSON.stringify(produit));
    nom.value = "";
    description.value = "";
    quantité.value = "";
    prix.value = "";
    Photo.value = "";
    window.location.replace("./nos-produit.html")
  }
  