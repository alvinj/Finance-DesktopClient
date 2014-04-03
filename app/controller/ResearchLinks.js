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
            }
        });

        if (!Ext.getStore('ResearchLinks')) {
            Ext.create('Finance.store.ResearchLinks');
        }    
    },

    onRender: function(component, options) {
        component.getStore().load();
    }

});












