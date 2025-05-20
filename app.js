let items = document.querySelectorAll('.slider .item');
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;

// Botão "próximo"
nextButton.onclick = function () {
    itemActive = (itemActive + 1) % countItem;
    showSlider();
};

// Botão "anterior"
prevButton.onclick = function () {
    itemActive = (itemActive - 1 + countItem) % countItem;
    showSlider();
};

// Exibir o item ativo
function showSlider() {
    // Remove ativo anterior
    document.querySelector('.slider .item.active')?.classList.remove('active');
    document.querySelector('.thumbnail .item.active')?.classList.remove('active');

    // Adiciona ativo novo
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
}
// Exibir o item ativo inicial
items[itemActive].classList.add('active');
thumbnails[itemActive].classList.add('active');

//seleciona clickando na thumbnail 
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});

//rodar o slider automaticamente
let autoSlider = setInterval(() => {
    itemActive = (itemActive + 1) % countItem;
    showSlider();
}, 5000);

// Pausar o slider automático ao passar o mouse
items.forEach(item => {
    item.addEventListener('mouseover', () => {
        clearInterval(autoSlider);
    });
});

// Retomar o slider automático ao sair do mouse
items.forEach(item => {
    item.addEventListener('mouseout', () => {
        autoSlider = setInterval(() => {
            itemActive = (itemActive + 1) % countItem;
            showSlider();
        }, 3000);
    });
});