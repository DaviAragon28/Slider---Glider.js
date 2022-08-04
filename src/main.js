window.addEventListener('load', () => {
    new Glider(document.querySelector('.carousel--list'), {
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: '.carousel--indicadores',
    arrows: {
    prev: '.previous',
    next: '.next'
      }
});
})