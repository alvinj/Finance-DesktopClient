Ext.define('Finance.view.menu.Menu', {
    extend: 'Ext.Container',
    alias: 'widget.mainmenu',
    xtype: 'basic-panels',
    width: 300,
    // requires: [
    //     'Ext.layout.container.Table'
    // ],

    // layout types: http://dev.sencha.com/deploy/ext-4.0.0/examples/layout-browser/layout-browser.html
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    },
    // layout: {
    //     type: 'table',
    //     columns: 1,
    //     tdAttrs: { style: 'padding: 10px;' }
    // },

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
                text: 'My Stocks'
            },
            {
                xtype: 'button',
                itemId: 'watchList',
                text: 'Watch List'
            },
            {
                xtype: 'button',
                itemId: 'research',
                text: 'Research'
            },
            {
                html: '<a href="#">Item 1</a>'
            },
            {
                html: '<a href="#">Item 2</a>'
            },
            {
                html: '<a href="#">Item 3</a>'
            }
        ];

        this.callParent();
    }
});

