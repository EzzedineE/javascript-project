var pseudo = JSON.parse(localStorage.getItem('users')) || []
var AllUsers = document.getElementById("AllUsers")

function users() {
    document.getElementById("AllUsers").innerHTML = "";
    pseudo.forEach((element, i) => {
      document.getElementById("AllUsers").innerHTML += `<tr> 
            <td>${element.nom}</td>
            <td>${element.email} </td>
            <td>${element.password}</td>
            <td class="text-center">
            <button class="mx-3 rounded btn btn-danger" onclick="supprimer(${i})"><i class="fa fa-trash"></i> Supprimer</button>
            <a class="mx-3 rounded btn btn-primary" href="./modifier-user.html?index=${i}"><i class="fa fa-edit"></i> Modifier</a>
          </td>
          </tr>`
    });
}

function supprimer(i) {
    if (confirm("voulez vous supprimer")) {
      pseudo.splice(i, 1);
      users();
      localStorage.setItem("users", JSON.stringify(pseudo));
    }
  }