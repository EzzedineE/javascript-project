function security() {
  const user = JSON.parse(localStorage.getItem("UserConnecter"));
  if (user == null) {
    window.location.replace("./index.html");
  }
}
