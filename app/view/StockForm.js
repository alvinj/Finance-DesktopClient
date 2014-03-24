Ext.define('Finance.view.StockForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.stockform',

    height: 200,
    width: 550,

    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    title: 'Stock',

    items: [
        {
            xtype: 'form',
            bodyPadding: 5,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                anchor: '100%',
                xtype: 'textfield',
                blankText: 'This is required',
                labelWidth: 90
            },
            items: [
                // TODO do i need this hidden field?
                {
                    xtype: 'hiddenfield',
                    fieldLabel: 'Label',
                    name: 'id'
                },
                {
                    fieldLabel: 'Symbol',
                    name: 'symbol',
                    itemId: 'symbol',
                    allowBlank: false,
                    maxLength: 10,
                    enableKeyEvents: true,      // needed to handle the [Enter] key
                    maskRe: /([a-zA-Z0-9]+)$/   // only allow letters and numbers, no spaces
                },
                {
                    fieldLabel: 'Company Name',
                    name: 'companyName',
                    itemId: 'companyName',     // the controller refers to this itemId as: 'stockform textfield#companyName'
                    allowBlank: false,
                    maxLength: 100,
                    enableKeyEvents: true      // needed to handle the [Enter] key
                    // this works, but doesn't fit the current programming pattern
                    // (from http://www.phs4j.com/2011/05/how-to-process-the-enter-key-with-extjs/)
                    // listeners:{
                    //     scope: this,
                    //     specialkey: function(f,e) {
                    //         if(e.getKey()==e.ENTER) {
                    //             Ext.Msg.alert('Keys','You pressed the Enter key');
                    //         }
                    //     }
                    // }
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            flex: 1,
            dock: 'bottom',
            ui: 'footer',
            layout: {
                pack: 'end',
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'button',
                    text: 'Cancel',
                    itemId: 'cancel',
                    iconCls: 'cancel'
                },
                {
                    xtype: 'button',
                    text: 'Save',
                    itemId: 'save',
                    iconCls: 'save'
                }
            ]
        }
    ]

});





