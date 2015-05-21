function printInventory(inputs){
    var list =[];
    var allItems = loadAllItems();
    var promotions = loadPromotions();
    for(var i=0; i<inputs.length; i++) {
        if(inputs[i].length>10){
            var location = inputs[i].indexOf("-");
        }
        for(var k=0; k< allItems.length; k++) {
            var inputs1 = inputs[i].substring(0,location);
            if(inputs1 === allItems[k].barcode) {
            var newitem = {
             name : allItems[k].name,
             unit : allItems[k].unit,
             price : allItems[k].price,
             barcodes : allItems[k].barcode,
             };
             list.push(newitem);
            }
        }
    }
    var carlist = [];
    for (var h=0; h<list.length; h++) {
        var count = inputs[h].length>10 ? inputs[h].substring(inputs[h].indexOf("-") + 1) :1;
        var newitem_sale = {};
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
            var newitem_sale = {
                name : name,
                count : count,
                unit : unit,
                price : price,
                sale : count,
                barcodes : barcodes
            };
            carlist.push(newitem_sale);
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
        info += "名称：" + carlist[a].name + "，" +
                "数量：" + carlist[a].count + carlist[a].unit + "，" +
                "单价：" + carlist[a].price.toFixed(2) + "(元)，"+
                "小计：" + digitsubtotal.toFixed(2)+"(元)"+"\n";
        sum += (carlist[a].price * carlist[a].count);
    }
       sum -= saleprice;

	info += "----------------------" + "\n" + "挥泪赠送商品:\n" + promoinfo;

    info += "----------------------\n" +
            "总计：" + sum.toFixed(2) + "(元)\n" + "节省：" + saleprice.toFixed(2) + "(元)\n" +
            "**********************";
    console.log(info);
}
