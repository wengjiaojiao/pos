var inputs = require('../../spec/main_spec');
var fixtures = require('../../spec/fixtures');
var Item = require('./item');
var CartItem = require('./cartItem');

function Scanner(inputs) {
    this.inputs = inputs;
}

Scanner.prototype.splitGroupTag = function() {
    var temp = (_(this.inputs).group(function(n,i) {
       return n.split("-")[0];
    }).value());

    var groupItem = {};
    for(var key in temp) {
        temp[key].map(function(n, i) {
            temp[key][i] = n.indexOf("-") === -1 ? 1 : parseFloat(n.split('-')[1]);
        })
        groupItem[key] = temp[key].reduce(function(a, b) {
            return a + b;
        });

    }
    var getGroupItem = [];
    var that = this;

    each(groupItem,function(key, value) {
        getGroupItem.push(that.mapTag(key, value));
    });

    return getGroupItem;
}

Scanner.prototype.mapTag = function(key, value) {
    var allItems = fixtures.loadAllItems();
    var cartItem;
    allItems.forEach(function(allItem) {
        if (value === allItem.barcode) {
            cartItem = new CartItem(allItem, key);
        }
    });

    return cartItem;
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
    value:function() {
        return this.collection;
    }
}
module.exports = Scanner;
