Ext.define('Finance.store.ResearchLinks', {
    extend: 'Ext.data.Store',

    requires: [
        'Finance.model.ResearchLink'
    ],

    model: 'Finance.model.ResearchLink',

    proxy: {
        type: 'ajax',
        url: 'php/researchlinks.php',

        reader: {
            type: 'json'
        }
    },

    init: function(application) {
        console.log('ResearchLinks Store created');
    }

});


