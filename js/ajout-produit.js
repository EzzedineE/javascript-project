var produit = JSON.parse(localStorage.getItem("produit")) || [];
var nom = document.getElementById("nom");
var description = document.getElementById("description");
var quantité = document.getElementById("quantité");
var prix = document.getElementById("prix");
var Photo = document.getElementById("Photo");

function getBase64FromImage(imageFile) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject("Error: ", error);
    });
  }
  async function ajouter() {
    if (Photo.files.length > 0) {
      const myfile = Photo.files[0];
      const base64 = await getBase64FromImage(myfile);
      produit.push({
        nom: nom.value,
        description: description.value,
        quantité: quantité.value,
        prix: prix.value,
        Photo: base64,
      });
      localStorage.setItem("produit", JSON.stringify(produit))
      nom.value = "";
      description.value = "";
      quantité.value = "";
      prix.value = "";
      Photo.value = "";
      ;
    } else {
      alert("entre une photo");
    }
  }
  