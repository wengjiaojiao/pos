var fixtures = require('../../spec/fixtures');

function Promotion(type, barcodes) {
    this.type = type;
    this.barcodes = barcodes || [];
}
Promotion.prototype.getPromotionMessage = function(cartItem) {
    var promotions = fixtures.loadPromotions();
    var promotionItems = [];
    var promotionItem;

    promotions[0].barcodes.forEach(function(promotion, key) {
        cartItem.forEach(function(value, key) {
            if(value.item.barcode === promotion) {
                promotionItems.push(value);
            }
        });
    });
    return promotionItems;
}

Promotion.prototype.getPromotionCount = function(promotionItems) {
    var promotionCount = [];

    promotionItems.forEach(function(promotionItem) {
        promotionCount.push(parseInt(promotionItem.count / 3));
    });
    return promotionCount;
}

module.exports = Promotion;
