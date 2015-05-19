function printInventory(inputs) {
    var list=[];
    for (var i=0;i<inputs.length;i++) {
        var count=1;
        var temp={};
        var name=inputs[i].name;
        var unit=inputs[i].unit;
        var price=inputs[i].price;
        var exist=false;
        for (var k=0;k<list.length;k++) {
            if(list[k].name==name){
                list[k].count=list[k].count+count;
                exist=true;
            }
        }
        if(!exist) {
            temp.name=name;
            temp.count=count;
            temp.unit=unit;
            temp.price=price;
            list.push(temp);
        }
    }
    var info="***<没钱赚商店>购物清单***"+"\n";
    var sum=0;
    for(var i=0;i<list.length;i++) {
     info=info+"名称："+list[i].name+"，数量：" +list[i].count+list[i].unit+"，单价："+list[i].price+".00(元)，小计："+list[i].count*list[i].price+".00(元)"+"\n";
     sum=sum+(list[i].price*list[i].count);
    }
    info=info+"----------------------"+"\n"+"总计："+sum+".00(元)"+"\n"+"**********************";
    console.log(info);
}
