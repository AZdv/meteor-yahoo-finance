Tinytest.add('YahooFinance - Historical Function Export', function(test) {
  test.instanceOf(YahooFinance.historical, Function, "Expected YahooFinance.historical to be defined");
});

Tinytest.add('YahooFinance - Historical Quote (single)', function(test) {
    var symbol = 'YHOO';
    var testDate = new Date('2014-06-01T22:00:00.000Z');
    var expectedQuote = {
      symbol: 'YHOO',
      open: 34.69,
      high: 34.95,
      low: 34.28,
      close: 34.87,
      volume: 9178900,
      adjClose: 34.87,
      date: testDate
    }

    var quotes = YahooFinance.historical({symbol:symbol, from:testDate, to:testDate});
    // console.log(quotes);

    test.instanceOf(quotes, Array);
    test.equal(quotes[0], expectedQuote);
});

Tinytest.add('YahooFinance - Historical Quote (multiple)', function(test) {
    var symbols = ['AAPL','GOOGL','YHOO'];
    var fields = ['n','s','p'];
    var testDate = new Date('2014-06-01T22:00:00.000Z');
    var expectedQuotes =  {
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


    var stocks = YahooFinance.historical({symbols:symbols, from:testDate, to:testDate});
    // console.log(stocks);

    test.instanceOf(stocks, Object);
    test.equal(stocks, expectedQuotes);
});


Tinytest.add('YahooFinance - Snapshot Function Export', function(test) {
  test.instanceOf(YahooFinance.snapshot, Function, "Expected YahooFinance.snapshot to be defined");
});

Tinytest.add('YahooFinance - Snapshot Quote', function(test) {
    var symbols = ['AAPL','GOOGL','YHOO'];
    var fields = ['s','n'];
    var expectedSnapshots = [
      {name:'Apple Inc.', symbol:'AAPL'},
      {name:'Google Inc.', symbol:'GOOGL'},
      {name:'Yahoo! Inc.', symbol:'YHOO'}
    ];

    var snapshots = YahooFinance.snapshot({symbols:symbols, fields:fields});
    // console.log(snapshots);

    test.instanceOf(snapshots, Array);
    test.equal(snapshots, expectedSnapshots);
});
