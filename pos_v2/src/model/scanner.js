function Scanner() {
}

Scanner.splitTag = function(input) {
    var temp = {};
    
    temp.barcode = input.split('-')[0];
    temp.count = input.split('-')[1] || 1;
    return temp;
}
