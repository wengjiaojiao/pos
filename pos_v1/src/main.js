//TODO: Please write code in this file.
function printInventory(inputs){
    var list =[];
    var allItems = loadAllItems();
    var promotions=loadPromotions();
    if(inputs.length>10){
        count=inputs[i].substring(inputs[i].indexOf("-")+1);
    }
    for(var i=0;i<inputs.length;i++) {
        var temp={};
        for(var k=0;k< allItems.length;k++) {
            inputs[i]="ITEM00000"+parseInt(inputs[i].substring(9));
            if(inputs[i]===allItems[k].barcode){
             temp.name=allItems[k].name;
             temp.unit=allItems[k].unit;
             temp.price=allItems[k].price;
             temp.barcodes=allItems[k].barcodes;
             list.push(temp);
            }
        }
    }
    var carlist=[];
    for (var h=0;h<list.length;h++) {
        var count=1;
        var temp_1={};
        var name=list[h].name;
        var unit=list[h].unit;
        var price=list[h].price;
        var barcodes=list[h].barcodes;
        var exist=false;
        for (var g=0;g<carlist.length;g++) {
            if(carlist[g].name==name){
                carlist[g].count=carlist[g].count+count;
                exist=true;
            }
        }
        if(!exist) {
            temp_1.name=name;
            temp_1.count=count;
            temp_1.unit=unit;
            temp_1.price=price;
            temp_1.sale=count;
            carlist.push(temp_1);
        }
    }
    var info="***<没钱赚商店>购物清单***"+"\n";
    var sum=0;
    for(var x=0;x<carlist.length;x++) {
     info=info+"名称："+carlist[x].name+"，数量：" +carlist[x].count+carlist[x].unit+"，单价："+carlist[x].price+".00(元)，小计："+carlist[x].count*carlist[x].price+".00(元)"+"\n";
     sum=sum+(carlist[x].price*carlist[x].count);
    }

    var prolist=[];
    var sale=0;
    for(var a=0;a<carlist.length;a++) {
        for(var b=0;b<promotions[0].length;b++){
            if(carlist[a].barcodes==promotions[0].barcodes[b]) {
                temp_1.sale=temp_1.sale-parseInt(temp_1.sale/3);
            }
        }
    }
    info=info+"----------------------"+"\n"+"'挥泪赠送商品："+"\n";
    for (var z = 0; z < carlist.length; z++) {
        if(carlist[a].barcodes==promotions.barcodes[b]) {
            info=info+"名称："+carlist[z].name+"，数量："+ (carlist[z].count-carlist[z].sale)+carlist[z].unit+"\n";
            sum=sum-carlist[z].sale*carlist[z].price;
        }
    }
   info=info+'----------------------\n'+'总计：'+sum+'(元)\n';
   info=info+"节省："+carlist[z].sale*carlist[z].price+"(元)\n"+"**********************";
    console.log(info);
}
