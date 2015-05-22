function printInventory(inputs){
    var dateDigitToString;

    dateDigitToString = function (num) {
        return num < 10 ? '0' + num : num;
    };
    var currentDate = new Date(),
        year = dateDigitToString(currentDate.getFullYear()),
        month = dateDigitToString(currentDate.getMonth() + 1),
        date = dateDigitToString(currentDate.getDate()),
        hour = dateDigitToString(currentDate.getHours()),
        minute = dateDigitToString(currentDate.getMinutes()),
        second = dateDigitToString(currentDate.getSeconds()),
        formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
        //console.log(formattedDateString);
        var new_inputs = [];

        for(var i=0;i<inputs.length;i++) {
            var count = inputs[i].length>10 ? inputs[i].substring(inputs[i].indexOf("-") + 1) :1;
            var barcode = inputs[i];
            var exist = false;
            for(var j=0;j<new_inputs.length;j++) {
                if(barcode === new_inputs[j].barcode){
                    new_inputs[j].count += count;
                    exist = true;
                }
            }
            if(!exist) {
                var temp = {};
                temp.barcode = barcode;
                temp.count = count;
                new_inputs.push(temp);
            }
        }
}
