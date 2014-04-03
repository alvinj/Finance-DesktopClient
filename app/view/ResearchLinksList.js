Ext.define('Finance.view.ResearchLinksList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.researchLinksList',

    frame: true,
    store: Ext.create('Finance.store.ResearchLinks'),

    // valid column xtypes are:
    // none, 'numbercolumn', 'datecolumn'
    columns: [
        { 
            text: 'ID', 
            width: 30,
            dataIndex: 'id'
        },
        { 
            text: 'Symbol', 
            width: 60,
            dataIndex: 'symbol'
        },
        { 
            text: 'URL',
            width: 250,
            dataIndex: 'url',
            xtype: 'templatecolumn',
            tpl: '<a href="{url}" target="_blank">{url}</a>'
        },
        { 
            text: 'Date', 
            width: 80,
            dataIndex: 'datetime',
            xtype: 'datecolumn',
            format: 'Y-m-d',
            align: 'right'
        },
        { 
            text: 'Notes', 
            width: 400,
            dataIndex: 'notes'
        }
    ],

    dockedItems: [
        {
            xtype: 'toolbar',
            flex: 1,
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'Add',
                    itemId: 'add',
                    iconCls: 'add'
                },
                {
                    xtype: 'button',
                    text: 'Delete',
                    itemId: 'delete',
                    iconCls: 'delete'
                }
            ]
        }
    ]

});



