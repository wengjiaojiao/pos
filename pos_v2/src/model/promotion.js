var fixtures = require('../../spec/fixtures');

function Promotion(type, barcodes) {
    this.type = type;
    this.barcodes = barcodes || [];
}
Promotion.prototype.getPromotionMessage = function(cartitems) {
    var promotions = fixtures.loadPromotions();
    var promotionitems = [];
    var promotionitem;

    each(promotions[0].barcodes, function(promotion, key) {
        each(cartitems, function(value, key) {
            if(value.item.barcode === promotion) {
                promotionitems.push(value);
            }
        });
    });
    return promotionitems;
}

Promotion.prototype.getPromotionCount = function(promotionitems) {
    var promotioncount = [];

    each(promotionitems,function(promotionitem) {
        promotioncount.push(parseInt(promotionitem.count / 3));
    })
    return promotioncount;
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
