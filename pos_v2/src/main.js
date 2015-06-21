var Scanner = require('./model/scanner');
var inputs = require('../spec/main_spec');
var Pos =  require('./model/pos');
var Dateformatter = require('./tools/dateformatter');

function printInventory(inputs){
    // var group_item = get_group_item(inputs);
    // var shop_cart = get_whole_item(group_item);
    // return  get_gift_item(shop_cart);
    // /return get_info(shop_cart,gift_cart);
    var scanner = new Scanner(inputs);
    var cartitem = scanner.split_group_tag();
    //return cartitem;
    var pos = new Pos();
    return pos.getInfo(cartitem);

}

module.exports = printInventory;
