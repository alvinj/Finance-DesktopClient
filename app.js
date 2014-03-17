/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/
Ext.Loader.setConfig({
    enabled: true,
    paths: {
        //Ext: '.',
        //'Ext.ux': 'ux',
        'Packt.util': 'app/util',
        'Packt.model': 'app/model',
        'Packt.store': 'app/store',
        'Packt.view': 'app/view'
    }
});

Ext.application({
    name: 'Finance',
    extend: 'Finance.Application',
    
    requires: [
    //     'Finance.view.Login'
    //     'Ext.menu.Menu',
    //     'Ext.form.Panel',
    //     'Ext.layout.container.Accordion',
    //     'Ext.form.Label',
    //     'Packt.store.security.Permissions',
    //     'Packt.store.security.Users',
    //     'Packt.util.Util',
    //     'Ext.data.proxy.Ajax',
    //     'Ext.form.FieldSet',
    //     'Ext.form.field.Hidden',
    //     'Ext.form.field.ComboBox',
    //     'Ext.form.field.File',
    //     'Ext.grid.plugin.CellEditing',
    //     'Ext.ux.grid.FiltersFeature',
    //     'Ext.grid.column.Date',
    //     'Ext.grid.column.Action',
    //     'Ext.form.CheckboxGroup'
    ],

    views: [
        // 'Main',
        // 'Viewport',
        // 'Login'       // this is loaded by the Login controller
    ],

    // stores: [
    //     'security.Permissions'
    // ],

    controllers: [
        'Login'
        // 'Main'
        // 'Menu',
        // 'TranslationManager',
        // 'security.Groups',
        // 'security.Users'
    ],

    splashscreen: {},

    //autoCreateViewport: true,

    init: function() {

        // console.log('init');

        // Start the mask on the body and get a reference to the mask
         splashscreen = Ext.getBody().mask('Loading application', 'splashscreen');

        // Add a new class to this mask as we want it to look different from the default.
         splashscreen.addCls('splashscreen');

        // Insert a new div before the loading icon where we can place our logo.
        // Search for the first div tag that contains the '.x-mask-msg' class,
        // and add a new div tag as a child (p. 29 of Mastering Ext JS book).
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });

    },

    launch: function() {

        // console.log('launch');

        Ext.tip.QuickTipManager.init();

        var task = new Ext.util.DelayedTask(function() {

            //Fade out the body mask
            splashscreen.fadeOut({
                duration: 1000,
                remove:true
            });

            //Fade out the icon and message
            splashscreen.next().fadeOut({
                duration: 1000,
                remove:true,
                listeners: {
                    afteranimate: function(el, startTime, eOpts ){
                        Ext.widget('login');
                    }
                }
            });

           // Ext.widget('mainviewport');
           // Ext.widget('login');

            //console.log('launch');
       });

       task.delay(2000);

    }

});







