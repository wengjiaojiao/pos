var inputs = require('../../spec/main_spec');
var fixtures = require('../../spec/fixtures');
var Item = require('./item');
var CartItem = require('./cartItem');

function Scanner(inputs) {
    this.inputs = inputs;
}

Scanner.prototype.split_group_tag = function() {
    var temp = (_(this.inputs).group(function (n,i) {
       return n.split("-")[0];
    }).value());

    var group_item = {};
    for(var key in temp) {
        _(temp[key]).map(function(n, i) {
            if(n.indexOf("-") === -1) {
                temp[key][i] = 1;
            }else
            temp[key][i] = parseFloat(n.split('-')[1]);
        })

        group_item[key] = (_(temp[key]).reduce(function(a, b) {
            return a + b;
        }).value());

    }
    //return group_item;
    var shop_cart = [];
    var that = this;
    each(group_item,function(key, value) {
        shop_cart.push(that.map_tag(key, value));
    });

    // each(shop_cart,function(value, key) {
    //     shop_cart[key].sum_price = cal_sum_price(value,shop_cart);
    // });
    return shop_cart;
}

Scanner.prototype.map_tag = function(key, value) {
    var allItems = fixtures.loadAllItems();
    var cartitem;
    each(allItems,function (allItem) {

        if (value === allItem.barcode) {
            cartitem = new CartItem(allItem, key);
        }
    });

    return cartitem;
}

function each(collection,fun) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            fun(collection[i], i);
        }
    }else {
        for (var key in collection) {
            fun(collection[key], key);
        }
    }
}

function _(collection) {
    if(!(this instanceof _)) {
        return new _(collection);
    }else
    this.collection = collection;
}
_.prototype = {
    each: function(fun) {
        each(this.collection, fun);
    },
    group:function(fun) {
        var result ={};
        this.each(function(n, i) {
            result[fun(n, i)] = result[fun(n, i)] || [];
            result[fun(n, i)].push(n);
        });
        this.collection = result;
        return this;
    },
    map:function(fun) {
        var result = [];
        this.each(function(n, i) {
            result.push(fun(n, i));
        });
        this.collection = result;
        return this;
    },
    reduce:function(fun) {
        var result = this.collection[0];
        this.each(function(n, i) {
            if(i === 0) {
                result = n;
            }else {
                result = fun(result,n);
            }
        });
        this.collection = result;
        return this;
    },
    value:function() {
        return this.collection;
    }
}
module.exports = Scanner;
