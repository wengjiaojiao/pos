var cartitem = require('./scanner');

function Pos() {

}
Pos.prototype.getInfo = function () {
    var result = '***<没钱赚商店>购物清单***\n' +
                 '打印时间：';
    return result;
}

module.exports = Pos;
