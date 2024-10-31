/* Ventana modal*/
document.addEventListener("DOMContentLoaded", function() {
  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  myModal.show();
});

document.addEventListener("DOMContentLoaded", function () {
  // Inicializa el popover
  var popoverTriggerEl = document.getElementById('infoButton');
  var popover = new bootstrap.Popover(popoverTriggerEl, {
      html: true,
      content: function () {
          return document.getElementById('popover-content').innerHTML;
      },
      trigger: 'click', // Se abrirá al hacer clic
  });
});