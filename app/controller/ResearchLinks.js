Ext.define('Finance.controller.ResearchLinks', {
    extend: 'Ext.app.Controller',

    views: [
        'ResearchLinksList',
    ],

    stores: [
        'ResearchLinks'
    ],

    refs: [
        {
            ref: 'researchLinksList',
            selector: 'researchLinksList'
        }
    ],

    init: function(application) {

        // the components and events we listen to
        this.control({
            'researchLinksList': {
                render: this.onRender
            },
            'researchLinksList button#add': {
                click: this.onAddResearchLinkButtonClicked
            },
            'researchLinksList button#delete': {
                click: this.onDeleteResearchLinkButtonClicked
            },
            'researchLinkForm button#cancel': { //ResearchLinkForm cancel button
                click: this.onAddResearchLinkFormCancelClicked
            },
            'researchLinkForm button#save': { //ResearchLinkForm save button
                click: this.onAddResearchLinkFormSaveClicked
            },
            'researchLinkForm textfield': {
                specialkey: this.onTextfieldSpecialKey
            },
            'researchLinkForm textfield#symbol': { //handle blur event on the symbol textfield
                blur: this.onAddResearchLinkFormSymbolFieldBlur
            }
        });

        if (!Ext.getStore('ResearchLinks')) {
            Ext.create('Finance.store.ResearchLinks');
        }    
    },

    /**
     * ResearchLinkForm events/methods
     */
    onAddResearchLinkFormSymbolFieldBlur: function(textfield, event, options) {
        textfield.setValue(textfield.getValue().toUpperCase());
    },

    onAddResearchLinkButtonClicked: function(button, event, options) {
        var win = Ext.create('Finance.view.ResearchLinkForm');
        win.setTitle('Add Research Link');
        win.show();
    },

    onAddResearchLinkFormCancelClicked: function(button, event, options) {
        button.up('window').close();
    },

    // handle 'Enter' key in textfields of the form.
    // not really useful on this form, but i wanted to test it.
    onTextfieldSpecialKey: function(field, event, options) {
        if (event.getKey() == event.ENTER) {
            var saveBtn = field.up('researchLinkForm').down('button#save');
            saveBtn.fireEvent('click', saveBtn, event, options);
        }
    },

    // the 'save' button click event on the 'add form'
    onAddResearchLinkFormSaveClicked: function(button, event, options) {
        var win = button.up('window'),
            formPanel = win.down('form'),
            store = this.getResearchLinksList().getStore();

        if (formPanel.getForm().isValid()) {
            formPanel.getForm().submit({
                clientValidation: true,
                url: 'php/researchlinksave.php',
                success: function(form, action) {
                    var result = action.result;
                    console.log(result);
                    if (result.success) {
                        Packt.util.Alert.msg('Success!', 'The link was saved.');
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

    // TODO this is almost all boilerplate code; refactor into a reusable function
    // unique things are: getResearchLinksList, url, messages
    onDeleteResearchLinkButtonClicked: function (button, e, options) {
        var grid = this.getResearchLinksList(),
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
                            url: 'php/deleteresearchlink.php',
                            params: {
                                id: idToDelete
                            },
                            success: function(conn, response, options, eOpts) {
                                var result = Packt.util.Util.decodeJSON(conn.responseText);
                                if (result.success) {
                                    Packt.util.Alert.msg('Success', 'The link was deleted.');
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
                title: 'Dude',
                msg: 'Dude, you need to select at least one link.',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });
        }
    },

    onRender: function(component, options) {
        component.getStore().load();
    }

});


















