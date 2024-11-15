window.addEventListener('load', () => {
    const heroSwiper = new Swiper('.hero-carousel', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },

      allowSlideNext: true,
      allowSlidePrev: true,
    
    });

      // Carrusel de Featured Collection (sin autoplay)
      const featuredCollectionSwiper = new Swiper('.featured-collection-carousel', {
      loop: true,
      slidesPerView: 1, // Cantidad de slides visibles
      spaceBetween: 20, // Espacio entre slides
      navigation: {
        nextEl: '.featured-next',
        prevEl: '.featured-prev',
      },
      autoplay: false, // No se mueve automáticamente
    });

    let carrito = document.getElementById("botonCarrito"); 
    


});
  