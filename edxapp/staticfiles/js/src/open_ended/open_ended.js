(function() {
  var OpenEnded, ajax_url,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  OpenEnded = (function() {
    function OpenEnded(ajax_url) {
      this.gentle_alert = __bind(this.gentle_alert, this);
      this.ban = __bind(this.ban, this);
      this.unflag = __bind(this.unflag, this);
      this.ajax_url = ajax_url;
      this.error_container = $('.error-container');
      this.error_container.toggle(!this.error_container.is(':empty'));
      this.message_container = $('.message-container');
      this.message_container.toggle(!this.message_container.is(':empty'));
      this.problem_list = $('.problem-list');
      this.ban_button = $('.ban-button');
      this.unflag_button = $('.unflag-button');
      this.ban_button.click(this.ban);
      this.unflag_button.click(this.unflag);
    }

    OpenEnded.prototype.unflag = function(event) {
      var action_type, callback_func, parent_tr, student_id, submission_id, tr_children;
      event.preventDefault();
      parent_tr = $(event.target).parent().parent();
      tr_children = parent_tr.children();
      action_type = "unflag";
      submission_id = parent_tr.data('submission-id');
      student_id = parent_tr.data('student-id');
      callback_func = this.after_action_wrapper($(event.target), action_type);
      return this.post('take_action_on_flags', {
        'submission_id': submission_id,
        'student_id': student_id,
        'action_type': action_type
      }, callback_func);
    };

    OpenEnded.prototype.ban = function(event) {
      var action_type, callback_func, parent_tr, student_id, submission_id, tr_children;
      event.preventDefault();
      parent_tr = $(event.target).parent().parent();
      tr_children = parent_tr.children();
      action_type = "ban";
      submission_id = parent_tr.data('submission-id');
      student_id = parent_tr.data('student-id');
      callback_func = this.after_action_wrapper($(event.target), action_type);
      return this.post('take_action_on_flags', {
        'submission_id': submission_id,
        'student_id': student_id,
        'action_type': action_type
      }, callback_func);
    };

    OpenEnded.prototype.post = function(cmd, data, callback) {
      return $.post(this.ajax_url + cmd, data, callback).error((function(_this) {
        return function() {
          return callback({
            success: false,
            error: "Error occurred while performing javascript ajax post."
          });
        };
      })(this));
    };

    OpenEnded.prototype.after_action_wrapper = function(target, action_type) {
      var action_taken, tr_children, tr_parent;
      tr_parent = target.parent().parent();
      tr_children = tr_parent.children();
      action_taken = tr_children[4].firstElementChild;
      action_taken.innerText = "" + action_type + " done for student.";
      return this.handle_after_action;
    };

    OpenEnded.prototype.handle_after_action = function(data) {
      if (!data.success) {
        return this.gentle_alert(data.error);
      }
    };

    OpenEnded.prototype.gentle_alert = function(msg) {
      var alert_elem;
      if ($('.message-container').length) {
        $('.message-container').remove();
      }
      alert_elem = "<div class='message-container'>" + msg + "</div>";
      $('.error-container').after(alert_elem);
      return $('.message-container').css({
        opacity: 0
      }).animate({
        opacity: 1
      }, 700);
    };

    return OpenEnded;

  })();

  ajax_url = $('.open-ended-problems').data('ajax_url');

  $(document).ready(function() {
    return new OpenEnded(ajax_url);
  });

}).call(this);
