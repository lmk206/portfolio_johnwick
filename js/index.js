window.addEventListener('DOMContentLoaded',function(){
    //Dom start
    var intro = document.querySelector('.intro');
    var introFirst = document.querySelector('.intro .intro_first');
    var introSecond = document.querySelector('.intro .intro_second');
    var text = document.querySelector('.Text');
    var textImg = document.querySelectorAll('.Text img');
    var first = document.querySelector('.Text .first');
    var second = document.querySelector('.Text .second');
    window.addEventListener('load',function(){
        intro.classList.add('active');
        setTimeout(function(){
            intro.classList.remove('active');
        },3000);
        setTimeout(function(){
            text.classList.add('active');
        },5000);
    })

    //Dom end
})