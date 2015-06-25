function CartItem(barcode, count) {
    this.barcode = barcode;
    this.count = count;
}
CartItem.prototype.getPromotionCount = function() {
    var promotionCount = 0;
    var promotions = loadPromotions();
    var that = this;

    promotions[0].barcodes.forEach(function(promotion){
        if(that.barcode === promotion) {
            promotionCount = parseInt(that.count/3) ;
        }
    });

    return promotionCount;
}

CartItem.prototype.getItemInfo = function() {
    var items = loadAllItems();
    var that = this;
    var getItem;

    items.forEach(function(item) {
        if(item.barcode === that.barcode) {
            getItem = item;
        }
    });
    return getItem;
}

CartItem.prototype.getSubtotal = function() {
    var subtotal = [];

    subtotal.push((this.count - this.getPromotionCount()) * this.getItemInfo().price);
    return subtotal;
}
