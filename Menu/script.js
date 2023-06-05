

const menuBtns = document.querySelectorAll('.menu-btn');
const productItems = document.querySelectorAll('.product-item');

let activeBtn = "electronics";

showproductMenu(activeBtn);

menuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        showproductMenu(btn.id);
        btn.classList.add('active-btn');
    });
});

function resetActiveBtn(){
    menuBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

function showproductMenu(newMenuBtn){
    activeBtn = newMenuBtn;
    productItems.forEach((item) => {
        if(item.classList.contains(activeBtn)){
            item.style.display = "grid";
        } else {
            item.style.display = "none";
        }
    });
}