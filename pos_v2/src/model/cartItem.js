
function CartItem(item, count) {
    this.item = item;
    this.count = count;
}
CartItem.prototype.getItem = function() {
    return this.item;
}

CartItem.prototype.getCount = function() {
    return this.count;
}

module.exports = CartItem;
