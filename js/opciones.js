(function(){

    const inicio = document.querySelector('.nav__menu');
    const acerca_de = document.querySelector('.nav__items');
    const contacto = document.querySelector('.nav__items');



    openButton.addEventListener('click', ()=>{
        inicio.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        inicio.classList.remove('nav__link--show');
    });

})();