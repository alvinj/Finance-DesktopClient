Ext.define('Finance.controller.Menu', {
    extend: 'Ext.app.Controller',

    views: [
        'menu.Menu',
        'StockList',
        'ResearchLinksList',
        'ReportPanel'
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

            "basic-panels button#transactions": {
                click: this.onTransactionsButtonClick
            },

            "basic-panels button#watchList": {
                click: this.onWatchListButtonClick
            },

            "basic-panels button#research": {
                click: this.onResearchButtonClick
            },

            "basic-panels button#reports": {
                click: this.onReportsButtonClick
            }
        });
    },

    onReportsButtonClick: function(button, event, options) {
        var mainPanel = this.getMainPanel();
        var newTab = mainPanel.add({
            xtype: 'reportpanel',
            closable: true,
            iconCls: 'reportpanel',
            title: 'Reports'
        });
        mainPanel.setActiveTab(newTab);
    },

    onTransactionsButtonClick: function(button, event, options) {
        console.log('You clicked Transactions');
        var mainPanel = this.getMainPanel();
        var newTab = mainPanel.add({
            xtype: 'transactionList',
            closable: true,
            iconCls: 'transactionList',
            title: 'Transactions'
        });
        mainPanel.setActiveTab(newTab);
    },

    onMyStocksButtonClick: function(button, event, options) {
        var mainPanel = this.getMainPanel();
        var newTab = mainPanel.add({
            xtype: 'stockList',
            closable: true,         // tab can be closed
            iconCls: 'stockList',
            title: 'Your Stocks'
        });
        mainPanel.setActiveTab(newTab);
    },

    onResearchButtonClick: function(button, event, options) {
        var mainPanel = this.getMainPanel();
        var newTab = mainPanel.add({
            xtype: 'researchLinksList',
            closable: true,
            iconCls: 'researchLinksList',
            title: 'Research'
        });
        mainPanel.setActiveTab(newTab);
    },

    onWatchListButtonClick: function(button, event, options) {
        console.log('You clicked Watch-List');
    },

});












