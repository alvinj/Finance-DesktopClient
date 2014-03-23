Ext.define('Finance.view.StockList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.stockList',

    frame: true,
    store: Ext.create('Finance.store.Stocks'),

    columns: [
        {
            width: 50,
            dataIndex: 'id',
            text: 'ID'
        },
        {
            width: 150,
            dataIndex: 'symbol',
            text: 'Symbol'
        },
        {
            width: 200,
            dataIndex: 'companyName',
            flex: 1,
            text: 'Company'
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
                    // by referencing the '#add' class
                    xtype: 'button',
                    text: 'Add',
                    itemId: 'add',
                    iconCls: 'add',
                }
                // add more buttons here as needed ...
            ]
        }
    ]

});







