function printInventory(inputs){
    var list =[];
    var allItems = loadAllItems();
    var promotions = loadPromotions();

    for(var i=0; i<inputs.length; i++) {
        var temp={};
        for(var k=0; k< allItems.length; k++) {
            inputs[i] = "ITEM00000" + parseInt(inputs[i].substring(9));
            if(inputs[i] === allItems[k].barcode) {
            var temp = {
             name : allItems[k].name,
             unit : allItems[k].unit,
             price : allItems[k].price,
             barcodes : allItems[k].barcode,
             };
             list.push(temp);
            }
        }
    }
    var carlist = [];
    for (var h=0; h<list.length; h++) {
        var count = 1;
        var temp_1 = {};
        var name = list[h].name;
        var unit = list[h].unit;
        var price = list[h].price;
        var barcodes = list[h].barcodes;
        var exist = false;
        for (var g=0; g<carlist.length; g++) {
            if(carlist[g].name == name){
                carlist[g].count = carlist[g].count + count;
                carlist[g].sale = carlist[g].count;
                exist = true;
            }
        }
        if(!exist) {
            temp_1.name = name;
            temp_1.count = count;
            temp_1.unit = unit;
            temp_1.price = price;
            temp_1.sale = count;
            temp_1.barcodes = barcodes;
            carlist.push(temp_1);
        }
    }
    var info = "***<没钱赚商店>购物清单***" + "\n";
    var sum = 0;
    var subtotal = [];
    var prolist = [];
    var sale = 0;
    var saleprice = 0;
    var promoinfo="";
    for(var a=0; a<carlist.length; a++) {
        subtotal[a] = carlist[a].count * carlist[a].price;
        for(var b=0; b<promotions[0].barcodes.length; b++){
            if(carlist[a].barcodes == promotions[0].barcodes[b]) {
                carlist[a].sale = carlist[a].sale - parseInt(carlist[a].sale / 3);
				promoinfo += "名称：" + carlist[a].name + "，" +
                             "数量：" + (carlist[a].count - carlist[a].sale) + carlist[a].unit + "\n";
                saleprice += (carlist[a].count - carlist[a].sale) * carlist[a].price;
                subtotal[a] -= subtotal[a]-carlist[a].sale * carlist[a].price;
            }
        }
        var digitsubtotal=subtotal[a];
        if(inputs.length>10) {
            count = inputs[i].substring(inputs[i].indexOf("-") + 1);
        }
        info += "名称：" + carlist[a].name + "，" +
                "数量：" + carlist[a].count + carlist[a].unit + "，" +
                "单价：" + carlist[a].price.toFixed(2) + "(元)，"+
                "小计：" + digitsubtotal.toFixed(2)+"(元)"+"\n";
        sum += (carlist[a].price * carlist[a].count);

    }
	info += "----------------------" + "\n" + "'挥泪赠送商品:\n" + promoinfo;

    info += "----------------------\n" +
            "总计：" + sum + "(元)\n" + "节省：" + saleprice.toFixed(2) + "(元)\n" +
            "**********************";
    console.log(info);
}
