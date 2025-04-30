document.addEventListener("DOMContentLoaded", function () {
  const buyButtons = document.querySelectorAll(".buy-now");

  buyButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      window.open("https://entrega.logzz.com.br/share-page/memz3doog/421", "_blank");
    });
  });
});
