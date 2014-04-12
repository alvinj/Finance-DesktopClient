Ext.define('Finance.view.menu.Menu', {
    extend: 'Ext.Container',
    alias: 'widget.mainmenu',
    xtype: 'basic-panels',      // TODO needs better name; update controller when changing
    width: 300,

    // layout types: http://dev.sencha.com/deploy/ext-4.0.0/examples/layout-browser/layout-browser.html
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    },

    defaults: {
        xtype: 'panel',
        width: 300,
        height: 36,
        bodyPadding: 10
    },

    initComponent: function () {
        this.items = [
            {
                xtype: 'button',
                itemId: 'myStocks',
                iconCls: 'myStocks',  // `iconCls` renders this classname in the output
                text: 'My Stocks'
            },
            {
                xtype: 'button',
                itemId: 'transactions',
                iconCls: 'transactions',
                text: 'Transactions'
            },
            {
                xtype: 'button',
                itemId: 'watchList',
                iconCls: 'watchList',
                text: 'Watch List'
            },
            {
                xtype: 'button',
                itemId: 'research',
                iconCls: 'research',
                text: 'Research'
            },
            {
                xtype: 'button',
                itemId: 'reports',
                iconCls: 'reports',
                text: 'Reports'
            }
        ];

        this.callParent();
    }
});




