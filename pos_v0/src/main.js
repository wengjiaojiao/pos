//TODO: Please write code in this file.
function printInventory(inputs) {
    var info="***<没钱赚商店>购物清单***"+"\n";
    var sum=0;
    for(var i=0;i<inputs.length;i++) {
      info=info+"名称："+inputs[i].name+"，数量：" +inputs[i].count+inputs[i].unit
      +"，单价："+inputs[i].price+".00(元)，小计："+inputs[i].count*inputs[i].price+".00(元)"+"\n";
     sum=sum+(inputs[i].price*inputs[i].count);
    }
    info=info+"----------------------"+"\n"+"总计："+sum+".00(元)"+"\n"+"**********************";
    console.log(info);
}
