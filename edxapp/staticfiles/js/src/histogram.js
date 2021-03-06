(function() {
  this.Histogram = (function() {
    function Histogram(id, rawData) {
      this.id = id;
      this.rawData = rawData;
      this.xTicks = [];
      this.yTicks = [];
      this.data = [];
      this.calculate();
      this.render();
    }

    Histogram.prototype.calculate = function() {
      var count, log_count, score, _i, _len, _ref, _ref1, _results;
      _ref = this.rawData;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        _ref1 = _ref[_i], score = _ref1[0], count = _ref1[1];
        if (score === null) {
          continue;
        }
        log_count = Math.log(count + 1);
        this.data.push([score, log_count]);
        this.xTicks.push([score, score.toString()]);
        _results.push(this.yTicks.push([log_count, count.toString()]));
      }
      return _results;
    };

    Histogram.prototype.render = function() {
      return $.plot($("#histogram_" + this.id), [
        {
          data: this.data,
          bars: {
            show: true,
            align: 'center',
            lineWidth: 0,
            fill: 1.0
          },
          color: "#b72121"
        }
      ], {
        xaxis: {
          min: -1,
          max: Math.max.apply(Math, $.map(this.xTicks, function(data) {
            return data[0] + 1;
          })),
          ticks: this.xTicks,
          tickLength: 0
        },
        yaxis: {
          min: 0.0,
          max: Math.max.apply(Math, $.map(this.yTicks, function(data) {
            return data[0] * 1.1;
          })),
          ticks: this.yTicks,
          labelWidth: 50
        }
      });
    };

    return Histogram;

  })();

}).call(this);
