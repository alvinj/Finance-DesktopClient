Ext.define('Finance.store.Transactions', {
    extend: 'Ext.data.Store',

    requires: [
        'Finance.model.Transaction'
    ],

    model: 'Finance.model.Transaction',

    proxy: {
        type: 'ajax',
        url: 'php/transactions.php',

        reader: {
            type: 'json'
        }
    },

    init: function(application) {
        console.log('Transactions Store created');
    }

});

