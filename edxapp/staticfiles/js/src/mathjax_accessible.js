(function() {
  $(function() {
    var isMPInstalled;
    if (window.navigator.appName === "Microsoft Internet Explorer") {
      isMPInstalled = function(boolean) {
        var e, oMP;
        try {
          oMP = new ActiveXObject("MathPlayer.Factory.1");
          return true;
        } catch (_error) {
          e = _error;
          return false;
        }
      };
      if ((typeof MathJax !== "undefined" && MathJax !== null) && !isMPInstalled()) {
        $("#mathjax-accessibility-message").attr("aria-hidden", "false");
      }
      if ((typeof MathJax !== "undefined" && MathJax !== null) && $("#mathplayer-browser-message").length > 0) {
        return $("#mathplayer-browser-message").attr("aria-hidden", "false");
      } else {
        return $("#mathjax-accessibility-message").attr("aria-hidden", "true");
      }
    }
  });

}).call(this);
