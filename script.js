fetch("landing.json")
  .then(response => response.json())
  .then(data => {
    const content = document.getElementById("conteudo");
    content.innerHTML = `
      <h2>${data.titulo}</h2>
      <p>${data.descricao}</p>
      <h3>Benefícios:</h3>
      <ul>
        ${data.beneficios.map(b => `<li>${b}</li>`).join("")}
      </ul>
    `;
  })
  .catch(error => {
    const content = document.getElementById("conteudo");
    content.innerHTML = `<p style="color: red;">Erro ao carregar o JSON 😢</p>`;
    console.error("Erro ao carregar o JSON:", error);
  });
