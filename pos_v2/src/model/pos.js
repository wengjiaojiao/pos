var Dateformatter = require('../tools/dateformatter');

function Pos() {

}
Pos.prototype.getInfo = function(cartitems, subtotal, promotionitems,promotioncount) {
    var getdate = new Dateformatter().getDate();
    var result;
    result = '***<没钱赚商店>购物清单***\n' +
                 '打印时间：' + getdate + '\n----------------------\n';
    each(cartitems, function(cartitem, key) {
        result += '名称：' + cartitem.item.name +
                '，数量：' + cartitem.count + cartitem.item.unit +
                '，单价：' + cartitem.item.price.toFixed(2) + '(元)' +
                '，小计：' + subtotal[key].toFixed(2) + '(元)\n';
    });
    result += '----------------------\n' + '挥泪赠送商品：\n';
    each(promotionitems,function(promotionitem, key) {
        result += '名称：' + promotionitem.item.name +
                '，数量：' + promotioncount[key]
                           + promotionitem.item.unit + '\n';
    });
    result +=  '----------------------\n' +
                this.getTotal(cartitems, subtotal) +
                '**********************';

    return result;
}

Pos.prototype.getTotal = function(cartitems, subtotals) {
    var total = 0;
    var lastTotal = 0;
    var save = 0;
    each(cartitems, function(cartitem) {
        total += cartitem.item.price * cartitem.count;
    });

    each(subtotals, function(subtotal) {
        lastTotal += subtotal;
    });

    return '总计：' + (lastTotal).toFixed(2) + '(元)\n' +
            '节省：' + (total - lastTotal).toFixed(2) + '(元)\n'
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
module.exports = Pos;
