function () {

    const addtocart = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    addtocart.addEventListener('click', function () {
        cart.classList.toggle('show-cart');
    });


}
