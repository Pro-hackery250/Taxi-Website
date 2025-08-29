const ShortProfilePhoto = document.querySelector('.img2');
const BigProfilePhoto = document.querySelector('.big');
const HideonScroll = document.querySelector('.hide');
const ALLSECTION = document.querySelector('.all');


ShortProfilePhoto.addEventListener('click', ()=>{
    BigProfilePhoto.style.display = 'flex';
    BigProfilePhoto.style.transform = 'translate(0)';
});
BigProfilePhoto.addEventListener('click', ()=>{
    BigProfilePhoto.style.display = 'none';
});

window.addEventListener('scroll' ,() =>{
    if(scrollY > 400){
        HideonScroll.classList.add('hider');
        ALLSECTION.style.background = 'white';
    }
    else{ 
        HideonScroll.classList.remove('hider');
        ALLSECTION.style.background = 'rgba(255, 255, 255, 0.123)';
    }
});