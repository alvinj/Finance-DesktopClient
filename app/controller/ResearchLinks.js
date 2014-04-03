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
            'researchLinkForm button#cancel': { //ResearchLinkForm cancel button
                click: this.onAddResearchLinkFormCancelClicked
            },
            'researchLinkForm button#save': { //ResearchLinkForm save button
                click: this.onAddResearchLinkFormSaveClicked
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

    onAddResearchLinkFormSaveClicked: function(button, event, options) {
        // TODO
    },


    onRender: function(component, options) {
        component.getStore().load();
    }

});












