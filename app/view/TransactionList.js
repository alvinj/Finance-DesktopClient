Ext.define('Finance.view.TransactionList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.transactionList',

    frame: true,
    store: Ext.create('Finance.store.Transactions'),

    columns: [
        {
            width: 50,
            dataIndex: 'id',
            text: 'ID'
        },
        {
            width: 100,
            dataIndex: 'symbol',
            text: 'Symbol'
        },
        {
            width: 50,
            dataIndex: 'ttype',
            text: 'Type'
        },
        {
            width: 100,
            dataIndex: 'quantity',
            text: 'Qty'
        },
        {
            width: 100,
            dataIndex: 'price',
            text: 'Price'
        },
        {
            width: 150,
            dataIndex: 'datetime',
            text: 'Date/Time'
        },
        {
            width: 250,
            dataIndex: 'notes',
            text: 'Notes'
        }
    ],

    dockedItems: [
        {
            xtype: 'toolbar',
            flex: 1,
            dock: 'top',
            items: [
                {
                    // the controller automagically picks up the button click event
                    // by referencing the '#add' class (or possibly the 'add' itemId)
                    xtype: 'button',
                    text: 'Add',
                    itemId: 'add',
                    iconCls: 'add'
                },
                {
                    xtype: 'button',
                    text: 'Delete',
                    itemId: 'delete',
                    iconCls: 'delete'
                }
            ]
        }
    ]

});







