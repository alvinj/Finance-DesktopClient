Ext.define('Finance.store.Stocks', {
    extend: 'Ext.data.Store',

    requires: [
        'Finance.model.Stock'
    ],

    model: 'Finance.model.Stock',

    proxy: {
        type: 'ajax',
        url: 'server/stocks',
        reader: {
            type: 'json'
        }
    },

    init: function(application) {
        console.log('Stocks Store created');
    }

});

