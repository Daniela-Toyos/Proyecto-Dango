window.addEventListener('load', () => {
    const heroSwiper = new Swiper('.hero-carousel', {
      loop: true,
      navigation: {
        nextEl: '.hero-next',
        prevEl: '.hero-prev',
      },
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },

      allowSlideNext: true,
      allowSlidePrev: true,
    
    });

      // Carrusel de Featured Collection
      const featuredCollectionSwiper = new Swiper('.featured-collection-carousel', {
      loop: true,
      slidesPerView: 1, // Cantidad de slides visibles
      spaceBetween: 10, // Espacio entre slides
      navigation: {
        nextEl: '.featured-next',
        prevEl: '.featured-prev',
      },
      autoplay: false, // No se mueve automáticamente
    });

    let botonCarrito = document.getElementById("botonCarrito"); 
    botonCarrito.addEventListener("click", abrirModal);

    let carrito = [];
    const modalCarrito = document.getElementById("modalCarrito");
    const itemsCarrito = document.getElementById("itemsCarrito");
    const precioTotalElement = document.getElementById("precioTotal");

    // Abrir y cerrar el modal
    function abrirModal() {
        modalCarrito.classList.remove("hidden");
        renderizar();
    };

    function cerrarModal() {
        modalCarrito.classList.add("hidden");
    };

    const botones = document.querySelectorAll(".agregarProducto");

    botones.forEach(boton => {
        boton.addEventListener("click", function() {
            const nombre = boton.getAttribute("data-nombre");
            const precio = parseFloat(boton.getAttribute("data-precio"));
            agregar(nombre, precio);
        });
    });



    // Agregar al carrito
    function agregar(nombre, precio){
      const productoExistente = carrito.find(producto => producto.nombre === nombre);
      if (productoExistente) {
        productoExistente.cantidad += 1;
      } else {
        carrito.push({ nombre, precio, cantidad: 1 });
      }
      abrirModal();
    }

    // Eliminar del carrito
    window.eliminar = function(nombre) {
      carrito = carrito.filter(producto => {
          if (producto.nombre === nombre) {
              if (producto.cantidad > 1) {
                  producto.cantidad -= 1;
                  return true;
              }
              return false;
          }
          return true;
      });
      renderizar();
    };


    // Renderizar el carrito
    function renderizar() {
        itemsCarrito.innerHTML = "";
        let total = 0;
        carrito.forEach(producto => {
            const item = document.createElement("li");
            item.innerHTML = `
                ${producto.nombre} - $${producto.precio} x ${producto.cantidad}
                <button onclick="eliminar('${producto.nombre}')" class="ml-2 text-red-500 hover:text-red-700">Eliminar</button>
            `;
            itemsCarrito.appendChild(item);
            total += producto.precio * producto.cantidad;
        });
        precioTotalElement.textContent = total.toFixed(2);
    };

    // Cerrar modal al hacer clic fuera de él
    window.onclick = function(event) {
        if (event.target === modalCarrito) {
            cerrarModal();
        }
    };

    document.getElementById("botonCerrarModal").addEventListener("click", cerrarModal);


});
  