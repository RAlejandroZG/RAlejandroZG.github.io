(function(){

    const opciones = [...document.querySelectorAll('.knowledge__container')];
    const inicio = document.querySelector('.nav__menu');
    const acerca_de = document.querySelector('#acerca_de');
    const contacto = document.querySelector('.nav__items');
    const waze = document.querySelector('#waze');
    const ruta = document.querySelector('#comenzarRuta');



    ruta.addEventListener('click', ()=>{
        opciones.classList.add('knowledge__container--show');
    });

    inicio.addEventListener('click', ()=>{
        opciones.classList.remove('nav__link--show');
    });

}
)();