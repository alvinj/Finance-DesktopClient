Ext.define('Finance.controller.Stocks', {
    extend: 'Ext.app.Controller',

    // requires: [
    //     'Packt.util.Util'
    // ],

    views: [
        'StockList',
    ],

    stores: [
        'Stocks'
    ],

    refs: [
        {
            ref: 'stockList',
            selector: 'stockList'
        }
    ],

    init: function(application) {

        console.log('ENTERED Stocks Controller');

        this.control({
            "stockList": {
                render: this.onRender
            }
        });

        if (!Ext.getStore('Stocks')) {
            Ext.create('Finance.store.Stocks');
        }    
    },

    onRender: function(component, options) {
        component.getStore().load();
    }


});

