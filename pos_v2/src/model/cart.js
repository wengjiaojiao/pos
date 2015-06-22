var fixtures = require('../../spec/fixtures');

function Cart() {

}
Cart.prototype.getSubtotal = function(cartitems) {
    var subtotal = [];
    var promotions = fixtures.loadPromotions();
    var that = this;

    each(cartitems, function(cartitem, key) {
        subtotal.push((cartitem.item.price * cartitem.count) - that.getCartItemPrice(cartitem));
    });

    return subtotal;
}

Cart.prototype.getCartItemPrice = function(cartitem) {
    var promotionprice = 0;
    var promotions = fixtures.loadPromotions();

    each(promotions[0].barcodes, function(promotion){
        if(cartitem.item.barcode === promotion) {
            promotionprice = parseInt(cartitem.count/3) * cartitem.item.price;
        }
    });

    return promotionprice;
}

function each(collection,fun) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            fun(collection[i], i);
        }
    }else {
        for (var key in collection) {
            fun(collection[key], key);
        }
    }
}
module.exports = Cart;
