Ext.define('Finance.model.Transaction', {
    extend: 'Ext.data.Model',

    idProperty: 'id',

    fields: [
        { name: 'id' },
        { name: 'symbol' },
        { name: 'type' },    // buy or sell
        { name: 'quantity' },
        { name: 'price' },
        { name: 'datetime' },
        { name: 'notes' }
    ]

});
