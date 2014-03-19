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
    ]
});

