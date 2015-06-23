var fixtures = require('../../spec/fixtures');

function CartItem(item, count) {
    this.item = item;
    this.count = count;
}

CartItem.prototype.getSubtotal = function(cartitems) {
    var subtotal = [];
    var promotions = fixtures.loadPromotions();
    var that = this;

    cartitems.forEach(function(cartitem, key) {
        subtotal.push((cartitem.item.price * cartitem.count) - that.getCartItemPrice(cartitem));
    });

    return subtotal;
}

CartItem.prototype.getCartItemPrice = function(cartitem) {
    var promotionprice = 0;
    var promotions = fixtures.loadPromotions();

    promotions[0].barcodes.forEach(function(promotion){
        if(cartitem.item.barcode === promotion) {
            promotionprice = parseInt(cartitem.count/3) * cartitem.item.price;
        }
    });

    return promotionprice;
}

module.exports = CartItem;
