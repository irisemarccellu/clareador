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
