azdev:yahoo-finance
====================

Based on [ajbarry:yahoo-finance](https://github.com/ajbarry/meteor-yahoo-finance) but updated more frequently + tests are fixed.

Provides a Meteor server-side interface to [node-yahoo-finance](https://github.com/pilwon/node-yahoo-finance) through
a ```YahooFinance``` object.

## Usage:


### Historical Quotes

#### Single Quote

```javascript
YahooFinance.historical({symbol:'YHOO', from:'2014-06-01T22:00:00.000Z', to:'2014-06-01T22:00:00.000Z'})
```

*yields:*

```javascript
{
    symbol: 'YHOO',
    open: 34.69,
    high: 34.95,
    low: 34.28,
    close: 34.87,
    volume: 9178900,
    adjClose: 34.87,
    date: testDate
}
```

#### Multiple Quotes

```javascript
YahooFinance.historical({symbols:['AAPL','GOOGL','YHOO'], from:'2014-06-01T22:00:00.000Z', to:'2014-06-01T22:00:00.000Z'})
```

*yields:*

```javascript
{
    AAPL: [{ 
        date: testDate,
        open: 633.95996,
        high: 634.83002,
        low: 622.5,
        close: 628.64996,
        volume: 92337700,
        adjClose: 88.62704,
        symbol: 'AAPL' } ],
   GOOGL: [{
        date: testDate,
        open: 569.75,
        high: 570.40997,
        low: 556.70001,
        close: 564.34003,
        volume: 1660500,
        adjClose: 564.34003,
        symbol: 'GOOGL' } ],
   YHOO: [{
        date: testDate,
        open: 34.69,
        high: 34.95,
        low: 34.28,
        close: 34.87,
        volume: 9178900,
        adjClose: 34.87,
        symbol: 'YHOO'
    }]
}
```

### Snapshot Quotes

#### Single Quote

```javascript
YahooFinance.snapshot({symbol:'YHOO', fields:['s','n']})
```

*yields:*

```javascript
{symbol: 'YHOO', name: 'Yahoo! Inc.'}
```
#### Multiple Quotes

```javascript
YahooFinance.snapshot({symbols:['AAPL','GOOGL','YHOO'], fields:['s','n']})
```

*yields:*

```javascript
[
      {name:'Apple Inc.', symbol:'AAPL'},
      {name:'Google Inc.', symbol:'GOOGL'},
      {name:'Yahoo! Inc.', symbol:'YHOO'}
];
```

See the [node-yahoo-finance source](https://github.com/pilwon/node-yahoo-finance/blob/master/lib/index.js) for a list
of available fields.
