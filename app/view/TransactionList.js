Ext.define('Finance.view.TransactionList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.transactionList',

    frame: true,
    store: Ext.create('Finance.store.Transactions'),

    columns: [
        {
            text: 'ID',
            width: 50,
            dataIndex: 'id'
        },
        {
            text: 'Symbol',
            width: 100,
            dataIndex: 'symbol'
        },
        {
            text: 'Type',
            width: 50,
            dataIndex: 'ttype'
        },
        {
            text: 'Qty',
            width: 100,
            dataIndex: 'quantity',
            xtype: 'numbercolumn', 
            format: '0,000',
            align: 'right'
        },
        {
            text: 'Price',
            width: 100,
            dataIndex: 'price',
            xtype: 'numbercolumn', 
            format: '0.00',
            align: 'right'
        },
        // {
        //     width: 150,
        //     dataIndex: 'datetime',
        //     text: 'Date/Time'
        // },
        {
            text: 'Date',
            width: 150,
            dataIndex: 'datetime',
            xtype: 'datecolumn',
            format: 'Y-m-d'
        },
        {
            text: 'Notes',
            width: 250,
            dataIndex: 'notes'
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







