function Cart() {
    this.cartBasket = [];
}

Cart.prototype.addCartItem = function(cartitem) {
    var exist = false;

    this.cartBasket.forEach(function(tag) {
        if (tag.barcode === cartitem.barcode) {
            tag.count += cartitem.count;
            exist = true;
        }
    })
    if (!exist) {
        this.cartBasket.push(new CartItem(cartitem.barcode, cartitem.count));
    }
}
