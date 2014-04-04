Ext.define('Finance.controller.Reports', {
    extend: 'Ext.app.Controller',

    views: [
        'ReportPanel',
        'StockPricesColumnChart'
    ],

    stores: [
        'StockPricesStore'
    ],

    refs: [
        {
            ref: 'reportPanel',
            selector: 'reportPanel'
        }
    ],

    init: function(application) {

        // the components and events we listen to
        this.control({
            'reportPanel': {
                render: this.onRender
            }
        });

        if (!Ext.getStore('StockPricesStore')) {
            Ext.create('Finance.store.StockPricesStore');
        }
    },

    onRender: function(component, options) {
        component.getStore().load();
    }

});


















