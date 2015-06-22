var fixtures = require('../../spec/fixtures');

function Promotion(type, barcodes) {
    this.type = type;
    this.barcodes = barcodes || [];
}
Promotion.prototype.getPromotionMessage = function(cartitem) {
    var promotions = fixtures.loadPromotions();
    var promotionitems = [];
    var promotionitem;

    each(promotions[0].barcodes, function(promotion,key) {
        each(cartitem, function(value, key) {
            if(value.item.barcode === promotion) {
                value.count = parseInt(value.count / 3);
                promotionitems.push(value);
            }
        });
    });

    return promotionitems;
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

module.exports = Promotion;
