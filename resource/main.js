const card = document.querySelector('.card');
const container = document.querySelector('.container');

const title = document.querySelector('.title');
const sniker = document.querySelector('.sniker img');
const purchase = document.querySelector('.purchase button');
const sizes = document.querySelector('.sizes');
const info = document.querySelector('.info h3');

container.addEventListener('mousemove', (e) => {
    let xAxis = ((window.innerWidth / 2 - e.pageX) / 25);
    let yAxis = ((window.innerHeight / 2 - e.pageY ) / 25);

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener('mouseleave', (e) => {
    card.style.transition = `all 0.5s ease`;
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    sniker.style.transform = `rotate(0deg)`;
    container.style.filter = `grayscale(1)`;
});

container.addEventListener('mouseenter', (e) => {
    container.style.filter = `grayscale(0)`;
    card.style.transition = `none`;
    title.style.transform = `translateZ(120px)`;
    sniker.style.transform = `translateZ(150px) rotate(45deg)`;;
    purchase.style.transform = `translateZ(60px)`;
    sizes.style.transform = `translateZ(80px)`;
    info.style.transform = `translateZ(100px)`;
    sniker.style.transition = `all 0.5s ease-out`;
});
