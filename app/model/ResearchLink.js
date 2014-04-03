Ext.define('Finance.model.ResearchLink', {
    extend: 'Ext.data.Model',

    idProperty: 'id',

    fields: [
        { name: 'id',       type: 'int' },
        { name: 'symbol',   type: 'string' },
        { name: 'url',      type: 'string' },
        { name: 'datetime', type: "date", format: 'Y-m-d' },
        { name: 'notes',    type: 'string' }
    ]

});


