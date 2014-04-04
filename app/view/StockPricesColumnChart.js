Ext.define('Finance.view.StockPricesColumnChart', {
    extend: 'Ext.chart.Chart',
    alias: 'widget.stockpricescolumnchart',

    store: 'StockPricesStore',

    animate: true,
    shadow: true,
    insetPadding: 60,
    theme: 'Base:gradients',

    axes: [{
        type: 'Numeric',
        position: 'left',
        fields: ['price'],
        label: {
            renderer: Ext.util.Format.numberRenderer('0,0')
        },
        title: 'Price',
        grid: true,
        minimum: 0
    }, {
        type: 'Category',  // the type of x-axis chart thingy
        position: 'bottom',
        fields: ['symbol'],
        title: 'Symbol'
    }],

    series: [{
        type: 'column',
        axis: 'left',
        highlight: true,
        tips: {
          trackMouse: true,
          width: 140,
          height: 28,
          renderer: function(storeItem, item) {
            this.setTitle(storeItem.get('symbol') + ': ' + storeItem.get('price') + ' $');
          }
        },
        label: {
          display: 'insideEnd',
          'text-anchor': 'middle',
            field: 'price',
            renderer: Ext.util.Format.numberRenderer('0'),
            orientation: 'vertical',
            color: '#333'
        },
        xField: 'symbol',
        yField: 'price'
  }]
});

