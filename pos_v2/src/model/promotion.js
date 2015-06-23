var fixtures = require('../../spec/fixtures');

function Promotion(type, barcodes) {
    this.type = type;
    this.barcodes = barcodes || [];
}
Promotion.prototype.getPromotionMessage = function(cartItems) {
    var promotions = fixtures.loadPromotions();
    var promotionItems = [];
    var promotionItem;

    each(promotions[0].barcodes, function(promotion, key) {
        each(cartItems, function(value, key) {
            if(value.item.barcode === promotion) {
                promotionItems.push(value);
            }
        });
    });
    return promotionItems;
}

Promotion.prototype.getPromotionCount = function(promotionItems) {
    var promotionCount = [];

    each(promotionItems,function(promotionItem) {
        promotionCount.push(parseInt(promotionItem.count / 3));
    })
    return promotionCount;
}

function each(collection,fun) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            fun(collection[i], i);
        }
    } else {
        for (var key in collection) {
            fun(collection[key], key);
        }
    }
}

module.exports = Promotion;
