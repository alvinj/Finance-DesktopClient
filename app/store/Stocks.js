Ext.define('Finance.store.Stocks', {
    extend: 'Ext.data.Store',

    requires: [
        'Finance.model.Stock'
    ],

    model: 'Finance.model.Stock',

    proxy: {
        type: 'ajax',
        url: 'php/stocks.php',

        reader: {
            type: 'json'
            // root: 'data'
        }
    },

    init: function(application) {
        console.log('Stocks Store created');
    }

});

