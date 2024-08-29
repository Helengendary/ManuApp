document.addEventListener("DOMContentLoaded", function () {
    fetch("../Dados/loja.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        produtos = data;
        const produtosContainer =
          document.getElementById("produtos-container");

        produtos.forEach((produto, index) => {
          const card = document.createElement("div");
          card.className = "card";
          card.style.width = "18rem";
          card.style.marginRight = "10px";
  
          const imagem = document.createElement("img");
          imagem.src = produto.imagem;
          imagem.className = "card-img-top";
  
          const cardBody = document.createElement("div");
          cardBody.className = "card-body";
  
          const cardTitle = document.createElement("h5");
          cardTitle.className = "card-title";
          cardTitle.textContent = produto.descricao;
  
          const cardText = document.createElement("p");
          cardText.className = "card-text";
          cardText.textContent = "Preço: $" + produto.preco.toFixed(2);
  
          const cardStatus = document.createElement("div");
          cardStatus.textContent = "⨂"
          cardStatus.style.borderRadius = "100%"    
          if (produto.Status == true) {
            cardStatus.style.backgroundColor = "red"
        } else {
            cardStatus.style.backgroundColor = "greenyellow"
          }

  
          cardBody.appendChild(cardTitle);
          cardBody.appendChild(cardText);
  
          card.appendChild(imagem);
          card.appendChild(cardBody);
          card.appendChild(cardStatus);
  
          produtosContainer.appendChild(card);
        });
      })
      .catch((error) => console.error("Erro ao carregar o arquivo JSON", error));

  });
  