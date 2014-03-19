Ext.define('Finance.controller.Menu', {
    extend: 'Ext.app.Controller',

    views: [
        'menu.Menu',
        'StockList'
    ],

    refs: [
        {
            ref: 'mainPanel',
            selector: 'mainpanel'
        }
    ],

    init: function(application) {
        this.control({
            // lookup the 'My Stocks' button on the menu and add a click handler.
            // the name 'basic-panels' is the xtype declared in view.menu.Menu.
            "basic-panels button#myStocks": {
                click: this.onMyStocksButtonClick
            },

            "basic-panels button#watchList": {
                click: this.onWatchListButtonClick
            },

            "basic-panels button#research": {
                click: this.onResearchButtonClick
            }
        });
    },

    onMyStocksButtonClick: function(button, event, options) {
        console.log('You clicked My-Stocks');

        var mainPanel = this.getMainPanel();
        var newTab = mainPanel.add({
            xtype: 'stockList',
            closable: true,
            iconCls: 'stockList',
            title: 'Your Stocks'
        });

        mainPanel.setActiveTab(newTab);
    },

    onWatchListButtonClick: function(button, event, options) {
        console.log('You clicked Watch-List');
    },

    onResearchButtonClick: function(button, event, options) {
        console.log('You clicked Research');
    }

});












