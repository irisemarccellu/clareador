document.addEventListener("DOMContentLoaded", function () {
  const buyButtons = document.querySelectorAll(".buy-now");

  buyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      window.open("https://entrega.logzz.com.br/share-page/memz3doog/421", "_blank");
    });
  });
});
