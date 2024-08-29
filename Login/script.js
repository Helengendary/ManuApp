
function mostrar() {
  var senha = document.querySelector("#senha");

  if (senha.getAttribute("type") === "password") {
    senha.setAttribute("type", "text");
  } else {
    senha.setAttribute("type", "password");
  }
}

function login() {
  var nome = $("#nome").val();
  var senha = $("#senha").val();

  if (nome && senha && nome === "admin" && senha === "admin") {
    const user = {
      name: nome,
      dataEntrada: new Date(),
      id: Math.floor(Math.random() * 100000),
    };

    localStorage.setItem("usuario", JSON.stringify(user));

    window.location.href = "../Loja/loja.html";
  } else {
    document.getElementById("modal").showModal();
  }
}
