function printInventory(inputs) {
    var info = "***<没钱赚商店>购物清单***" + "\n";
    var sum = 0;
    for(var i=0; i<inputs.length; i++) {
        var subtotal = inputs[i].count * inputs[i].price;
        info +=   "名称：" + inputs[i].name + "，"
                + "数量：" + inputs[i].count + inputs[i].unit + "，"
                + "单价：" + inputs[i].price.toFixed(2) + "(元)，"
                + "小计：" + subtotal.toFixed(2) + "(元)" + "\n";
        sum += subtotal;
    }
    info += "----------------------" + "\n"
            + "总计：" + sum.toFixed(2) + "(元)" + "\n"
            + "**********************";
    console.log(info);
}
