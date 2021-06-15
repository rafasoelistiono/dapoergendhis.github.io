function toggle(){
    var header = document.getElementById('header')
    header.classList.toggle('active')
}

window.addEventListener('scroll' , reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++ ){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active')
        }
    }
}

window.onload=function(){
    setTimeout(menu2, 1000);
    setTimeout(content, 1000);
    setTimeout(img, 1000);
    setTimeout(logo, 1000);
}

function content(){
    var he=document.querySelector('section#home h2');
    he.style.opacity='1';
        he.style.transform='translate(0)';
    var hs=document.querySelector('section#home p');
    hs.style.opacity='1';
        hs.style.transform='translate(0)';
    var hh=document.querySelector('section#home a');
    hh.style.opacity='1';
        hh.style.transform='translate(0)';
}

function menu2(){
    var y=document.querySelectorAll('header#header li');
    var i;
    for(i=0; i<y.length; i++){
        y[i].style.opacity='1';
        y[i].style.transform='translate(0)';
    }
}
function img(){
    var z=document.querySelector('section#home img');
    z.style.opacity='1';
        z.style.transform='translate(0)';
}
function logo(){
    var f=document.querySelector('header #logo');
    f.style.opacity='1';
        f.style.transform='translate(0)';
}