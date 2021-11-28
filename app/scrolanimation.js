

window.addEventListener('scroll', function(e) {

    const target = document.querySelectorAll('.bg1');
    // const target = document.querySelectorAll('.sun');
    // const target = document.querySelectorAll('.car');

    // var scrolled = window.pageYOffset;
    
    // var rate = scrolled * -2;
    // target.style.transform = 'translate3d(0px,' + rate + 'px, 0px)';

    var index = 0, length = target.length;
    for (index; index < length; index++) {
        var pos = window.pageYOffset * target[index].dataset.rate;
        target[index].style.transform = 'translate3d(0px,' + pos + 'px, 0px)';
    }

});
window.addEventListener('scroll', function(e) {

    // const target = document.querySelectorAll('.bg1');
    const target = document.querySelectorAll('.sun');
    // const target = document.querySelectorAll('.car');

    // var scrolled = window.pageYOffset;
    
    // var rate = scrolled * -2;
    // target.style.transform = 'translate3d(0px,' + rate + 'px, 0px)';

    var index = 0, length = target.length;
    for (index; index < length; index++) {
        var pos = window.pageYOffset * target[index].dataset.rate;
        target[index].style.transform = 'translate3d(0px,' + pos + 'px, 0px)';
    }

});
window.addEventListener('scroll', function(e) {

    // const target = document.querySelectorAll('.bg1');
    // const target = document.querySelectorAll('.sun');
    const target = document.querySelectorAll('.car');

    // var scrolled = window.pageYOffset;
    
    // var rate = scrolled * -2;
    // target.style.transform = 'translate3d(0px,' + rate + 'px, 0px)';

    var index = 0, length = target.length;
    for (index; index < length; index++) {
        var pos = window.pageYOffset * target[index].dataset.rate;
        target[index].style.transform = 'translate3d(0px,' + pos + 'px, 0px)';
    }

});
window.addEventListener('scroll', function(e) {

    const target = document.querySelectorAll('.intro');

    // var scrolled = window.pageYOffset;
    
    // var rate = scrolled * -2;
    // target.style.transform = 'translate3d(0px,' + rate + 'px, 0px)';

    var index = 0, length = target.length;
    for (index; index < length; index++) {
        var pos = window.pageYOffset * target[index].dataset.rate;
        target[index].style.transform = 'translate3d(0px,' + pos + 'px, 0px)';
    }

});

var audio = document.getElementById("myAudio");
audio.volume = 0.2; 