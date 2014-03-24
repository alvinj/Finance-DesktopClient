Ext.define('Finance.controller.Stocks', {
    extend: 'Ext.app.Controller',

    // requires: [
    //     'Packt.util.Util'
    // ],

    views: [
        'StockList',
    ],

    stores: [
        'Stocks'
    ],

    refs: [
        {
            ref: 'stockList',
            selector: 'stockList'
        }
    ],

    init: function(application) {

        console.log('ENTERED Stocks Controller');

        // add the components and events we listen to
        this.control({
            'stockList': {
                render: this.onRender
            },
            // TODO i hate this, but it works
            'stockList button#add': {
                click: this.onAddStockButtonClicked
            },
            // the StockForm cancel button
            'stockform button#cancel': {
                click: this.onAddStockFormCancelClicked
            },
            // the StockForm save button
            'stockform button#save': {
                click: this.onAddStockFormSaveClicked
            }
        });

        if (!Ext.getStore('Stocks')) {
            Ext.create('Finance.store.Stocks');
        }    
    },

    onRender: function(component, options) {
        component.getStore().load();
    },

    /**
     * Stock Form
     * ----------
     */
    onAddStockButtonClicked: function(button, event, options) {
        var win = Ext.create('Finance.view.StockForm');
        win.setTitle('Add Stock');
        win.show();
    },

    onAddStockFormCancelClicked: function(button, event, options) {
        button.up('window').close();
    },

    // TODO - WORKING
    onAddStockFormSaveClicked: function(button, event, options) {
        var win = button.up('window'),
        formPanel = win.down('form'),
        store = this.getStockList().getStore();

        if (formPanel.getForm().isValid()) {
            formPanel.getForm().submit({
                clientValidation: true,
                url: 'php/stockssave.php',
                success: function(form, action) {
                    var result = action.result;
                    console.log(result);

                    if (result.success) {
                        Packt.util.Alert.msg('Success!', 'Stock was saved.');
                        store.load();
                        win.close();                      
                    } else {
                        Packt.util.Util.showErrorMsg(result.msg);
                    }
                },
                failure: function(form, action) {
                    switch (action.failureType) {
                        case Ext.form.action.Action.CLIENT_INVALID:
                            Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
                            break;
                        case Ext.form.action.Action.CONNECT_FAILURE:
                            Ext.Msg.alert('Failure', 'Ajax communication failed');
                            break;
                        case Ext.form.action.Action.SERVER_INVALID:
                            Ext.Msg.alert('Failure', action.result.msg);
                   }
                }
            });
        } 
    },

    dumpObject: function(obj) {
        var output, property;
        for (property in obj) {
            output += property + ': ' + obj[property] + '; ';
        }
        console.log(output);
    }


});










