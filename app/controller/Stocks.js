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
            'stockList': {
                render: this.onRender
            },
            // TODO i hate this, but it works
            'stockList button#add': {
                click: this.onAddStockButtonClicked
            }
        });

        if (!Ext.getStore('Stocks')) {
            Ext.create('Finance.store.Stocks');
        }    
    },

    onRender: function(component, options) {
        component.getStore().load();
    },

    // TODO implement the 'add stock process' here
    onAddStockButtonClicked: function(component, options) {
        console.log('*** CONTROLLER got Add Button Click Event');
        var win = Ext.create('Finance.view.StockForm');
        win.setTitle('Add Stock');
        win.show();
    }


});

