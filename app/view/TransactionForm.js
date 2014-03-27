Ext.define('Finance.view.TransactionForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.transactionform',

    height: 300,
    width: 360,

    layout: {
        align: 'stretch',
        type: 'vbox'
    },

    title: 'Transaction',

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
                blankText: 'Required',
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
                    maskRe: /([a-zA-Z0-9]+)$/   // only allow letters and numbers, no spaces
                },
                {
                    fieldLabel: 'Type (B/S)',
                    name: 'ttype',
                    itemId: 'ttype',
                    allowBlank: false,
                    maxLength: 1       //TODO convert this field to a radio button
                },
                {
                    fieldLabel: 'Qty',
                    name: 'quantity',
                    itemId: 'quantity',
                    allowBlank: false,
                    maxLength: 10,
                    maskRe: /([0-9]+)$/   // int field
                },
                {
                    fieldLabel: 'Price',
                    name: 'price',
                    itemId: 'price',
                    allowBlank: false,  //TODO add a regex here to validate a double
                    maxLength: 10
                },
                {
                    // TODO is this needed?
                    xtype: 'hiddenfield',
                    fieldLabel: 'datetime',
                    name: 'datetime'
                },
                {
                    fieldLabel: 'Notes',
                    xtype: 'textareafield',
                    name: 'notes',
                    itemId: 'notes',
                    allowBlank: true
                },
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





