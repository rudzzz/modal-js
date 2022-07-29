let btnOpen = document.querySelector("#open-btn");
let btnClose = document.querySelector("#close-btn");
let modalContainer = document.querySelector(".modal-container");

btnOpen.addEventListener('click', function(){
    modalContainer.style.display = 'block'
});

btnClose.addEventListener('click', function(){
    modalContainer.style.display = 'none'
});

window.addEventListener('click', function(event){
    if (event.target == modalContainer){
        modalContainer.style.display = 'none'
    }
});