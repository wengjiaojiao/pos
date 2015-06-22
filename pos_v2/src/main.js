var Scanner = require('./model/scanner');
var Cart = require('./model/cart');
var Pos =  require('./model/pos');
var Promotion = require('./model/promotion');
var inputs = require('../spec/main_spec');
var Dateformatter = require('./tools/dateformatter');

function printInventory(inputs){
    var scanner = new Scanner(inputs);
    var cartitems = scanner.split_group_tag();

    var promotion = new Promotion();
    var promotionitems = promotion.getPromotionMessage(cartitems);
    var promotioncount = promotion.getPromotionCount(promotionitems);

    var cart = new Cart();
    var subtotal = cart.getSubtotal(cartitems);

    var pos = new Pos();
    return pos.getInfo(cartitems, subtotal,promotionitems,promotioncount);
}

module.exports = printInventory;
