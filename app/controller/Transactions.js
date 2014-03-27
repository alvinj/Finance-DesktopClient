Ext.define('Finance.controller.Transactions', {
    extend: 'Ext.app.Controller',

    views: [
        'TransactionList',
    ],

    stores: [
        'Transactions'
    ],

    refs: [
        {
            ref: 'transactionList',
            selector: 'transactionList'
        }
    ],

    init: function(application) {

        console.log('ENTERED Transactions Controller');

        // add the components and events we listen to
        this.control({
            'transactionList': {
                render: this.onRender
            }
            // 'transactionList button#add': {
            //     click: this.onAddStockButtonClicked
            // }
        });

        if (!Ext.getStore('Transactions')) {
            Ext.create('Finance.store.Transactions');
        }    
    },

    onRender: function(component, options) {
        component.getStore().load();
    },

    dumpObject: function(obj) {
        var output, property;
        for (property in obj) {
            output += property + ': ' + obj[property] + '; ';
        }
        console.log(output);
    }

});










