/* Ventana modal*/
document.addEventListener("DOMContentLoaded", function() {
  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  myModal.show();
});

/* Popover*/
document.addEventListener("DOMContentLoaded", function () {
  var popoverTriggerEl = document.getElementById('infoButton');
  var popover = new bootstrap.Popover(popoverTriggerEl, {
      html: true,
      content: function () {
          return document.getElementById('popover-content').innerHTML;
      },
      trigger: 'click',
  });
});

/* Carousel*/
document.addEventListener("DOMContentLoaded", function() {
  var heroCarousel = document.getElementById('heroCarousel');
  var carousel = new bootstrap.Carousel(heroCarousel, {
      interval: 4000,
      ride: 'carousel'
  });
});

/* Barra Busqueda*/
document.addEventListener('DOMContentLoaded', function () {
  var popoverTriggerEl = document.getElementById('passengersPopover');

  if (popoverTriggerEl) {
      var popover = new bootstrap.Popover(popoverTriggerEl, {
          trigger: 'click',
          html: true,
          sanitize: false
      });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var popoverTriggerEl = document.getElementById('passengersPopover');

  if (popoverTriggerEl) {
      var popover = new bootstrap.Popover(popoverTriggerEl, {
          trigger: 'click',
          html: true,
          sanitize: false
      });

      // Función para actualizar el texto del botón
      function updatePassengerText() {
          var adults = parseInt(document.getElementById('adults').value) || 0;
          var children = parseInt(document.getElementById('children').value) || 0;
          var infants = parseInt(document.getElementById('infants').value) || 0;

          var text = `${adults} Adulto${adults !== 1 ? 's' : ''}, ${children} Niño${children !== 1 ? 's' : ''}, ${infants} Bebé${infants !== 1 ? 's' : ''}`;
          popoverTriggerEl.textContent = text;
      }

      document.addEventListener('shown.bs.popover', function () {
          var adultsInput = document.getElementById('adults');
          var childrenInput = document.getElementById('children');
          var infantsInput = document.getElementById('infants');

          adultsInput.addEventListener('input', updatePassengerText);
          childrenInput.addEventListener('input', updatePassengerText);
          infantsInput.addEventListener('input', updatePassengerText);
      });

      // Cerrar el popover al hacer clic fuera de él
      document.addEventListener('click', function (e) {
          var popoverContent = document.getElementById('popoverContent');
          if (popoverContent && popoverContent.contains(e.target)) {
              e.stopPropagation();
          } else if (!popoverTriggerEl.contains(e.target)) {
              popover.hide();
          }
      });
  }
});

/* Modal 2º pagina*/
window.onload = function() {
    setTimeout(function() {
        var loadingModal = document.getElementById("loadingModal");
        
        if (loadingModal) {
            loadingModal.style.display = "none";
            document.getElementById("pageContent").style.display = "block";
        }}, 3000);
};

/* Formulario*/
function increment(id) {
    let input = document.getElementById(id);
    input.value = parseInt(input.value) + 1;
}

function decrement(id) {
    let input = document.getElementById(id);
    if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
    }
}

$(document).ready(function() {
    // Mostrar y ocultar el formulario de búsqueda con un efecto de deslizamiento
    $('#searchToggle').click(function() {
        $('#searchForm').slideToggle(); // Toggle del formulario de búsqueda
    });
});

AOS.init();