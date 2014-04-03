Ext.define('Finance.view.ResearchLinkForm', {
    extend: 'Ext.window.Window',

    alias: 'widget.researchLinkForm',

    height: 260,
    width: 400,

    layout: 'fit',

    title: 'Add/Edit Research Link',  // replace this in the controller

    items: [
        {
            // layout: {
            //     type: 'vbox',
            //     align: 'stretch'  // child items are stretched to full width
            // },
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
                labelWidth: 60
            },
            items: [
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
                    fieldLabel: 'URL',
                    name: 'url',
                    itemId: 'url',
                    allowBlank: false,
                    maxLength: 10
                },
                {
                    fieldLabel: 'Notes',
                    xtype: 'textareafield',
                    name: 'notes',
                    itemId: 'notes',
                    grow: true,
                    allowBlank: true,
                    flex: 1
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

