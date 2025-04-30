window.addEventListener('DOMContentLoaded', () => {
  // Ajuste o nome exato do JSON com espaçamento
  const jsonFile = 'JSON-LADING-PAGE-CLAREADOR 2025.json';

  fetch(jsonFile)
    .then(response => {
      if (!response.ok) throw new Error('JSON não encontrado');
      return response.json();
    })
    .then(data => {
      const container = document.getElementById('produtos-container');
      // Cada seção do JSON vira um card
      (data.content || []).forEach(section => {
        (section.elements || []).forEach(item => {
          const card = document.createElement('div');
          card.className = 'product-card';
          card.innerHTML = `
            <img src="${item.image}" alt="Produto ${item.id}">
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
      console.error('Erro ao carregar JSON:', err);
      document.getElementById('produtos-container').innerHTML =
        '<p style="color:red; text-align:center;">Não foi possível carregar os produtos.</p>';
    });
});
