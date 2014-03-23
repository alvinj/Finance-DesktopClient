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
                    allowBlank: false,
                    maskRe: /[A-Z]/,    // uppercase only
                    maxLength: 10
                },
                {
                    fieldLabel: 'Company Name',
                    name: 'companyName',
                    allowBlank: false,
                    maxLength: 100
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





