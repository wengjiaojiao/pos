
function Cart() {

}
Cart.prototype.getSubtotal = function(cartitem) {
    var subtotal = [];

    each(cartitem, function(value, key) {
        subtotal.push(cartitem[key].item.price * cartitem[key].count);
    })
    return subtotal;
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
