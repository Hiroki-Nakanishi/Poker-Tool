'use strict'

/*
$(document).ready(function(){
    $('#open_nav').on('click', function(){
        $('#wrapper, #nav').toggleClass('show');
    });
});
*/

var trigger = document.getElementById('open_nav');
if(trigger){
    trigger.addEventListener('click', function(){
        var target1 = document.getElementById('nav');
        var target2 = document.getElementById('open_nav');
        target1.classList.toggle('show');
        target2.classList.toggle('show');
    }, false);
};