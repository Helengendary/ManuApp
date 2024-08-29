var senha = $("#senha");
let apertado = false;

function mostrar() {

  apertado = !apertado;

  if (apertado) {
    
    senha.attr("type", "text");
  } else {

    senha.attr("type", "password");
  }
}

function login() {
  var nome = $("#nome").val();
  senha = senha.val();

  if (nome && senha && nome === "admin" && senha === "admin") {
    const user = {
      name: nome,
      dataEntrada: new Date(),
      id: Math.floor(Math.random() * 100000),
    };

    localStorage.setItem("usuario", JSON.stringify(user));

    window.location.href = "../Loja/loja.html";
  } else {
    //logica para se o nome e senha forem incorretos
  }
}
