window.addEventListener('DOMContentLoaded', () => {
  const jsonFile = 'fetch("landing.json")
';
  fetch(jsonFile)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('produtos');
      (data.content || []).forEach(secao => {
        (secao.elements || []).forEach(item => {
          const card = document.createElement('div');
          card.className = 'product-card';
          card.innerHTML = `
            <img src="${item.image}" alt="">
            <div class="info">
              <p>${item.text}</p>
              <a href="${item.link}" target="_blank">Ver Produto</a>
            </div>
          `;
          container.appendChild(card);
        });
      });
    })
    .catch(err => {
      console.error(err);
      document.getElementById('produtos').innerHTML = '<p>Erro ao carregar produtos.</p>';
    });
});
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
