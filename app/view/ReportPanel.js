Ext.define('Finance.view.ReportPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.reportpanel',

    layout: 'card',
    activeItem: 0,

    items: [
        {
            xtype: 'stockpricescolumnchart'
        }
    ]

});

