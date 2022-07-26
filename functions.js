let next = document.getElementById('next');
let prev = document.getElementById('prev');
let slider = document.getElementsByClassName('smbg');
let hero = document.getElementById('hero');
let i = 0;
let backgrounds = new Array("./images/bg1.jpg",
                            "./images/bg2.jpg",
                            "./images/bg3.jpg",
                            "./images/bg4.webp",
                            "./images/bg5.webp",
                             ); 
next.onclick = function(){
    if (i<4){
        hero.style.backgroundImage = 'url('+ backgrounds[i+1] +')';
        slider[i+1].classList.add("active");
        slider[i].classList.remove('active');
        i++
    }
}

prev.onclick = function(){
    if (i>0){
        hero.style.backgroundImage = 'url('+ backgrounds[i-1] +')';
        slider[i-1].classList.add('active');
        slider[i].classList.remove("active")
        i--
    }
}