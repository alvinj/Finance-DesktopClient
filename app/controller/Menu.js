Ext.define('Finance.controller.Menu', {
    extend: 'Ext.app.Controller',

    views: [
        'menu.Menu'
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
            }

        });
    },

    onMyStocksButtonClick: function(button, event, options) {
        console.log('You clicked My-Stocks');
    },

    onWatchListButtonClick: function(button, event, options) {
        console.log('You clicked Watch-List');
    }

});












