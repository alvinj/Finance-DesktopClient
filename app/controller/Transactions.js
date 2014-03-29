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
            'transactionList button#delete': {
                click: this.onDeleteTransactionButtonClicked
            },
            'transactionform button#cancel': { //TransactionForm cancel button
                click: this.onAddTransactionFormCancelClicked
            },
            'transactionform button#save': { //TransactionForm save button
                click: this.onAddTransactionFormSaveClicked
            },
            'transactionform textfield#symbol': { //handle blur event on the symbol textfield
                blur: this.onAddTransactionFormSymbolFieldBlur
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
    onAddTransactionFormSymbolFieldBlur: function(textfield, event, options) {
        textfield.setValue(textfield.getValue().toUpperCase());
    },

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

    // delete one or more stocks
    onDeleteTransactionButtonClicked: function (button, e, options) {
        var grid = this.getTransactionList(),
            record = grid.getSelectionModel().getSelection(), 
            store = grid.getStore();

        if (store.getCount() >= 1 && record[0]) {
            var idToDelete = record[0].get('id');
            Ext.Msg.show({
                 title:'Delete?',
                 msg: 'Are you sure you want to delete ID(' + idToDelete + ')?',
                 buttons: Ext.Msg.YESNO,
                 icon: Ext.Msg.QUESTION,
                 fn: function (buttonId){
                    if (buttonId == 'yes'){
                        Ext.Ajax.request({
                            url: 'php/deletetransaction.php',
                            params: {
                                id: idToDelete
                            },
                            success: function(conn, response, options, eOpts) {
                                var result = Packt.util.Util.decodeJSON(conn.responseText);
                                if (result.success) {
                                    Packt.util.Alert.msg('Success', 'The transaction was deleted.');
                                    store.load();
                                } else {
                                    Packt.util.Util.showErrorMsg(conn.responseText);
                                }
                            },
                            failure: function(conn, response, options, eOpts) {
                                Packt.util.Util.showErrorMsg(conn.responseText);
                            }
                        });
                    }
                 }
            });
        } else {
            Ext.Msg.show({
                title:'Dude',
                msg: 'Dude, you need to select at least one transaction.',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
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










