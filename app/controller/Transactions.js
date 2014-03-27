Ext.define('Finance.controller.Transactions', {
    extend: 'Ext.app.Controller',

    views: [
        'TransactionList',
    ],

    stores: [
        'Transactions'
    ],

    refs: [
        {
            ref: 'transactionList',
            selector: 'transactionList'
        }
    ],

    init: function(application) {

        // add the components and events we listen to
        this.control({
            'transactionList': {
                render: this.onRender
            },
            'transactionList button#add': {
                click: this.onAddTransactionButtonClicked
            },
            'transactionform button#cancel': { //TransactionForm cancel button
                click: this.onAddTransactionFormCancelClicked
            },
            'transactionform button#save': { //TransactionForm save button
                click: this.onAddTransactionFormSaveClicked
            }
        });

        if (!Ext.getStore('Transactions')) {
            Ext.create('Finance.store.Transactions');
        }    
    },

    /**
     * Transaction Form
     * ----------------
     */
    onAddTransactionButtonClicked: function(button, event, options) {
        var win = Ext.create('Finance.view.TransactionForm');
        win.setTitle('Add Transaction');
        win.show();
    },

    onAddTransactionFormCancelClicked: function(button, event, options) {
        button.up('window').close();
    },

    // add a transaction
    onAddTransactionFormSaveClicked: function(button, event, options) {
        var win = button.up('window'),
            formPanel = win.down('form'),
            store = this.getTransactionList().getStore();

        if (formPanel.getForm().isValid()) {
            formPanel.getForm().submit({
                clientValidation: true,
                url: 'php/transactionsave.php',
                success: function(form, action) {
                    var result = action.result;
                    console.log(result);
                    if (result.success) {
                        Packt.util.Alert.msg('Success!', 'Transaction was saved.');
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

    onRender: function(component, options) {
        component.getStore().load();
    },

    dumpObject: function(obj) {
        var output, property;
        for (property in obj) {
            output += property + ': ' + obj[property] + '; ';
        }
        console.log(output);
    }

});










