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

      // Agregar eventos de cambio en cada input dentro del popover
      document.addEventListener('shown.bs.popover', function () {
          var adultsInput = document.getElementById('adults');
          var childrenInput = document.getElementById('children');
          var infantsInput = document.getElementById('infants');

          // Llamar a la función cuando cambie el valor de cualquiera de los inputs
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
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("buscarvuelos").addEventListener("click", function(event) {
        event.preventDefault(); // Evita la redirección inmediata

        // Mostrar el modal de carga
        var loadingModal = document.getElementById("loadingModal");
        loadingModal.style.display = "block"; // Muestra el modal de carga

        // Obtener la URL de destino desde data-url
        const targetUrl = event.currentTarget.getAttribute("data-url");

        // Esperar un momento antes de redirigir
        setTimeout(function() {
            window.location.href = targetUrl; // Redirige a la página destino
        }, 1000); // Ajusta el tiempo de espera en milisegundos si es necesario
    });
});