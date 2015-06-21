var cartitem = require('./scanner');
var Dateformatter = require('../tools/dateformatter');


function Pos() {

}
Pos.prototype.getInfo = function (cartitem) {
    var getdate = new Dateformatter().getDate();
    var result;
    result = '***<没钱赚商店>购物清单***\n' +
                 '打印时间：' + getdate + '\n----------------------\n';
    each(cartitem, function(value, key) {
        result += '名称：' + cartitem[key].item.name +
                '，数量：' + cartitem[key].count + cartitem[key].item.unit +
                '，单价：' + cartitem[key].item.price.toFixed(2) + '(元)' +
                '，小计：' + '(元)\n';
    })
    return result;
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
