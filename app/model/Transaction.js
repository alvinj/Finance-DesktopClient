Ext.define('Finance.model.Transaction', {
    extend: 'Ext.data.Model',

    idProperty: 'id',

    // `ttype` is B (buy) or S (sell)
    fields: [
        { name: 'id',       type: 'int' },
        { name: 'symbol',   type: 'string' },
        { name: 'ttype',    type: 'string' },
        { name: 'quantity', type: 'int' },
        { name: 'price',    type: 'float' },                  // can also use 'number'
        { name: 'datetime', type: "date", format: 'Y-m-d' },
        { name: 'notes',    type: 'string'  }
    ]

});
