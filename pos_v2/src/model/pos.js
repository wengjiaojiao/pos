
function Pos() {

}

Pos.prototype.getInfo = function(cart) {
    var result = '';

    result += this.printHead();
    result += this.printItem(cart);
    result += this.printPromotion(cart);
    result += this.printSubtotal(cart);

    console.log(result);
}

Pos.prototype.printHead = function() {
    var getdate = Util.getDate();
    var result = '';
    return result = '***<没钱赚商店>购物清单***\n' +
             '打印时间：' + getdate +
             '\n----------------------\n';
}
Pos.prototype.printItem = function(cart) {
    var result = '';
    cart.cartBasket.forEach(function(cartbasket) {
        result += '名称：' + cartbasket.getItemInfo().name +
                '，数量：' + cartbasket.count
                           + cartbasket.getItemInfo().unit +
                '，单价：' + cartbasket.getItemInfo().price.toFixed(2) + '(元)' +
                '，小计：' + parseFloat(cartbasket.getSubtotal()).toFixed(2) +'(元)\n';
     })
     return result;
}
Pos.prototype.printPromotion = function(cart) {
    var result = '';
    result += '----------------------\n' + '挥泪赠送商品：\n';
    cart.cartBasket.forEach(function(cartbasket){
        if (cartbasket.getPromotionCount() !== 0) {
        result += '名称：' + cartbasket.getItemInfo().name +
                '，数量：' + cartbasket.getPromotionCount()
                           + cartbasket.getItemInfo().unit +"\n";
        }
    });
    return result;
}
Pos.prototype.printSubtotal = function(cart) {
    var result = '';
    result +=  '----------------------\n' +
               this.getTotal(cart) +
               '**********************';
    return result;
}
Pos.prototype.getTotal = function(cart) {
    var total = 0;
    var save = 0;

    cart.cartBasket.forEach(function(cartbasket) {
        total += parseInt(cartbasket.getSubtotal());
        save += cartbasket.getPromotionCount() * cartbasket.getItemInfo().price;
    })
    return '总计：' + total.toFixed(2) + '(元)\n' +
           '节省：' + save.toFixed(2) + '(元)\n';
}
