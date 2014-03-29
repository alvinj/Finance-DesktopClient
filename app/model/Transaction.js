Ext.define('Finance.model.Transaction', {
    extend: 'Ext.data.Model',

    idProperty: 'id',

    // `type` is buy or sell
    fields: [
        { name: 'id' },
        { name: 'symbol' },
        { name: 'ttype' },
        { name: 'quantity' },
        { name: 'price' },
        { name: 'datetime' },
        { name: 'notes' }
    ]

});
