let burger = document.querySelector('.header--burger');
let headerMenu = document.querySelector('.header--menu');
let body = document.querySelector('body');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    body.classList.toggle('lock');
})


let headerMenuItems = document.querySelectorAll('.header--menu-item');

for (let i = 0; i < headerMenuItems.length; i++) {
    headerMenuItems[i].addEventListener('click', function () {
        burger.classList.toggle('active');
        headerMenu.classList.toggle('active');
    })
}

let jumpTop = document.querySelector('.jump-top');
jumpTop.addEventListener('click', () => {
        window.scrollTo(0, 0)
    }
);

window.addEventListener('scroll', function() {
    //document.querySelector('.jump-top').innerHTML = pageYOffset + 'px';
    if (pageYOffset > 0) {
        jumpTop.style.display = 'block';
    } else {
        jumpTop.style.display = 'none';
    }

    
  });