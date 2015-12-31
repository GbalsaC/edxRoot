(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.Tab = (function() {
    function Tab(id, items) {
      this.id = id;
      this.items = items;
      this.onShow = __bind(this.onShow, this);
      this.el = $("#tab_" + id);
      this.render();
    }

    Tab.prototype.$ = function(selector) {
      return $(selector, this.el);
    };

    Tab.prototype.render = function() {
      $.each(this.items, (function(_this) {
        return function(index, item) {
          var tab;
          tab = $('<a>').attr({
            href: "#" + (_this.tabId(index))
          }).html(item.title);
          _this.$('.navigation').append($('<li>').append(tab));
          return _this.el.append($('<section>').attr({
            id: _this.tabId(index)
          }));
        };
      })(this));
      return this.el.tabs({
        show: this.onShow
      });
    };

    Tab.prototype.onShow = function(element, ui) {
      this.$('section.ui-tabs-hide').html('');
      this.$("#" + (this.tabId(ui.index))).html(this.items[ui.index]['content']);
      return this.el.trigger('contentChanged');
    };

    Tab.prototype.tabId = function(index) {
      return "tab-" + this.id + "-" + index;
    };

    return Tab;

  })();

}).call(this);
