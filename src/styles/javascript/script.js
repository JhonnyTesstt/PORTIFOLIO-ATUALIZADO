//Botão do Menu-Mobile
$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    })
});


//Efeito ScrollReveal
window.revelar = ScrollReveal({reset:true})

revelar.reveal('.efeito-txt',{
    duration: 3000,
    distance: '100px'
})

ScrollReveal().reveal('.efeito-txt');