Ext.define('Finance.store.StockPricesStore', {
    extend: 'Ext.data.Store',

    fields: [
        {name: 'symbol'},
        {name: 'price'}
    ],

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'php/historicalstockprices.php',
        reader: {
            type: 'json'
        }
    }
});

