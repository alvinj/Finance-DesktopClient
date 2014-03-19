Ext.define('Finance.model.Stock', {
    extend: 'Ext.data.Model',

    idProperty: 'id',

    fields: [
        { name: 'id' },
        { name: 'symbol' },
        { name: 'companyName' }
    ]

});
