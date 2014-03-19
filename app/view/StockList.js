Ext.define('Finance.view.StockList', {
    extend: 'Ext.container.Container',
    alias: 'widget.stockList',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [
        {
            html: '<a href="#">Item 1</a>'
        },
        {
            html: '<a href="#">Item 2</a>'
        }
    ]

});