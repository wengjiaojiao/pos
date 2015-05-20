//TODO: Please write code in this file.
function printInventory(inputs) {
    var list =[];
    var allItems = loadAllItems();
    for(var i=0;i<inputs.length;i++) {
        var temp={};
        for(var k=0;k< allItems.length;k++) {
        if(inputs[i]===allItems[k].barcode){
             temp.name=allItems[k].name;
             temp.unit=allItems[k].unit;
             temp.price=allItems[k].price;
             list.push(temp);
        }
        }
    }
    var carlist=[];
    for (var h=0; h<list.length; h++) {
        var count=1;
        var temp_1={};
        var name=list[h].name;
        var unit=list[h].unit;
        var price=list[h].price;
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
            carlist.push(temp_1);
        }
    }
    var info="***<没钱赚商店>购物清单***"+"\n";
    var sum=0;
    for(var x=0;x<carlist.length;x++) {
     info=info+"名称："+carlist[x].name+"，数量：" +carlist[x].count+carlist[x].unit+"，单价："+carlist[x].price+".00(元)，小计："+carlist[x].count*carlist[x].price+".00(元)"+"\n";
     sum=sum+(carlist[x].price*carlist[x].count);
    }
    info=info+"----------------------"+"\n"+"总计："+sum+".00(元)"+"\n"+"**********************";
    console.log(info);
}
