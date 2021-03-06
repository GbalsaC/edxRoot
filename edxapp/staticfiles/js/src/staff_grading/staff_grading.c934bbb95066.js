(function() {
  var ajax_url, backend, mock_backend, state_error, state_graded, state_grading, state_no_data,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  ({
    get_random_int: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  });

  state_grading = "grading";

  state_graded = "graded";

  state_no_data = "no_data";

  state_error = "error";

  this.StaffGradingBackend = (function() {
    function StaffGradingBackend(ajax_url, mock_backend) {
      this.ajax_url = ajax_url;
      if (!ajax_url) {
        mock_backend = true;
      }
      this.mock_backend = mock_backend;
      if (this.mock_backend) {
        this.mock_cnt = 0;
      }
    }

    StaffGradingBackend.prototype.mock = function(cmd, data) {
      var response;
      if (cmd === 'get_next') {
        this.mock_cnt++;
        switch (data.location) {
          case 'i4x://MITx/3.091x/problem/open_ended_demo1':
            response = {
              success: true,
              problem_name: 'Problem 1',
              num_graded: 3,
              min_for_ml: 5,
              num_pending: 4,
              prompt: '<h2>S11E3: Metal Bands</h2>\n<p>Shown below are schematic band diagrams for two different metals. Both diagrams appear different, yet both of the elements are undisputably metallic in nature.</p>\n<img width="480" src="/static/images/LSQimages/shaded_metal_bands.png"/>\n<p>* Why is it that both sodium and magnesium behave as metals, even though the s-band of magnesium is filled? </p>\n<p>This is a self-assessed open response question. Please use as much space as you need in the box below to answer the question.</p>',
              submission: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
              rubric: '<table class="rubric"><tbody><tr><th>Purpose</th>\n\n            <td>\n                    <input type="radio" class="score-selection" name="score-selection-0" id="score-0-0" value="0"><label for="score-0-0">No product</label>\n            </td>\n\n            <td>\n                    <input type="radio" class="score-selection" name="score-selection-0" id="score-0-1" value="1"><label for="score-0-1">Unclear purpose or main idea</label>\n            </td>\n\n            <td>\n                    <input type="radio" class="score-selection" name="score-selection-0" id="score-0-2" value="2"><label for="score-0-2">Communicates an identifiable purpose and/or main idea for an audience</label>\n            </td>\n\n            <td>\n                    <input type="radio" class="score-selection" name="score-selection-0" id="score-0-3" value="3"><label for="score-0-3">Achieves a clear and distinct purpose for a targeted audience and communicates main ideas with effectively used techniques to introduce and represent ideas and insights</label>\n            </td>\n        </tr><tr><th>Organization</th>\n\n            <td>\n                    <input type="radio" class="score-selection" name="score-selection-1" id="score-1-0" value="0"><label for="score-1-0">No product</label>\n            </td>\n\n            <td>\n                    <input type="radio" class="score-selection" name="score-selection-1" id="score-1-1" value="1"><label for="score-1-1">Organization is unclear; introduction, body, and/or conclusion are underdeveloped, missing or confusing.</label>\n            </td>\n\n            <td>\n                    <input type="radio" class="score-selection" name="score-selection-1" id="score-1-2" value="2"><label for="score-1-2">Organization is occasionally unclear; introduction, body or conclusion may be underdeveloped.</label>\n            </td>\n\n            <td>\n                    <input type="radio" class="score-selection" name="score-selection-1" id="score-1-3" value="3"><label for="score-1-3">Organization is clear and easy to follow; introduction, body and conclusion are defined and aligned with purpose.</label>\n            </td>\n        </tr></tbody></table>',
              submission_id: this.mock_cnt,
              max_score: 2 + this.mock_cnt % 3,
              ml_error_info: 'ML accuracy info: ' + this.mock_cnt
            };
            break;
          case 'i4x://MITx/3.091x/problem/open_ended_demo2':
            response = {
              success: true,
              problem_name: 'Problem 2',
              num_graded: 2,
              min_for_ml: 5,
              num_pending: 4,
              prompt: 'This is a fake second problem',
              submission: 'This is the best submission ever! ' + this.mock_cnt,
              rubric: 'I am a rubric for grading things! ' + this.mock_cnt,
              submission_id: this.mock_cnt,
              max_score: 2 + this.mock_cnt % 3,
              ml_error_info: 'ML accuracy info: ' + this.mock_cnt
            };
            break;
          default:
            response = {
              success: false
            };
        }
      } else if (cmd === 'save_grade') {
        response = this.mock('get_next', {
          location: data.location
        });
      } else if (cmd === 'get_problem_list') {
        this.mock_cnt = 1;
        response = {
          success: true,
          problem_list: [
            {
              location: 'i4x://MITx/3.091x/problem/open_ended_demo1',
              problem_name: "Problem 1",
              num_graded: 3,
              num_pending: 5,
              min_for_ml: 10
            }, {
              location: 'i4x://MITx/3.091x/problem/open_ended_demo2',
              problem_name: "Problem 2",
              num_graded: 1,
              num_pending: 5,
              min_for_ml: 10
            }
          ]
        };
      } else {
        response = {
          success: false,
          error: 'Unknown command ' + cmd
        };
      }
      if (this.mock_cnt % 5 === 0) {
        response = {
          success: true,
          message: 'No more submissions'
        };
      }
      if (this.mock_cnt % 7 === 0) {
        response = {
          success: false,
          error: 'An error for testing'
        };
      }
      return response;
    };

    StaffGradingBackend.prototype.post = function(cmd, data, callback) {
      if (this.mock_backend) {
        return callback(this.mock(cmd, data));
      } else {
        return $.post(this.ajax_url + cmd, data, callback).error((function(_this) {
          return function() {
            return callback({
              success: false,
              error: "Error occurred while performing javascript AJAX post."
            });
          };
        })(this));
      }
    };

    return StaffGradingBackend;

  })();

  this.StaffGrading = (function() {
    StaffGrading.prototype.grading_message_sel = '.grading-message';

    function StaffGrading(backend) {
      this.scroll_to_top = __bind(this.scroll_to_top, this);
      this.collapse_question = __bind(this.collapse_question, this);
      this.submit = __bind(this.submit, this);
      this.gentle_alert = __bind(this.gentle_alert, this);
      this.skip_and_get_next = __bind(this.skip_and_get_next, this);
      this.ajax_callback = __bind(this.ajax_callback, this);
      this.set_button_text = __bind(this.set_button_text, this);
      this.keyup_handler = __bind(this.keyup_handler, this);
      this.keydown_handler = __bind(this.keydown_handler, this);
      this.graded_callback = __bind(this.graded_callback, this);
      this.setup_score_selection = __bind(this.setup_score_selection, this);
      AjaxPrefix.addAjaxPrefix(jQuery, function() {
        return "";
      });
      this.backend = backend;
      this.el = $('.staff-grading');
      this.problem_list_container = $('.problem-list-container');
      this.problem_list = $('.problem-list');
      this.error_container = $('.error-container');
      this.message_container = $('.message-container');
      this.prompt_name_container = $('.prompt-name');
      this.prompt_container = $('.prompt-container');
      this.prompt_wrapper = $('.prompt-wrapper');
      this.submission_container = $('.submission-container');
      this.submission_wrapper = $('.submission-wrapper');
      this.grading_wrapper = $('.grading-wrapper');
      this.feedback_area = $('.feedback-area');
      this.score_selection_container = $('.score-selection-container');
      this.grade_selection_container = $('.grade-selection-container');
      this.flag_submission_checkbox = $('.flag-checkbox');
      this.submit_button = $('.submit-button');
      this.action_button = $('.action-button');
      this.skip_button = $('.skip-button');
      this.problem_meta_info = $('.problem-meta-info-container');
      this.meta_info_wrapper = $('.meta-info-wrapper');
      this.ml_error_info_container = $('.ml-error-info-container');
      this.breadcrumbs = $('.breadcrumbs');
      $(window).keydown(this.keydown_handler);
      $(window).keyup(this.keyup_handler);
      this.question_header = $('.question-header');
      this.question_header.click(this.collapse_question);
      this.collapse_question();
      this.state = state_no_data;
      this.submission_id = null;
      this.prompt = '';
      this.submission = '';
      this.rubric = '';
      this.error_msg = '';
      this.message = '';
      this.max_score = 0;
      this.ml_error_info = '';
      this.location = '';
      this.prompt_name = '';
      this.min_for_ml = 0;
      this.num_graded = 0;
      this.num_pending = 0;
      this.score_lst = [];
      this.grade = null;
      this.is_ctrl = false;
      this.problems = null;
      this.submit_button.click(this.submit);
      this.action_button.click(this.submit);
      this.skip_button.click(this.skip_and_get_next);
      this.get_problem_list();
    }

    StaffGrading.prototype.setup_score_selection = function() {
      this.score_selection_container.html(this.rubric);
      $('input[class="score-selection"]').change((function(_this) {
        return function() {
          return _this.graded_callback();
        };
      })(this));
      this.rub = new Rubric(this.el);
      return this.rub.initialize(this.location);
    };

    StaffGrading.prototype.graded_callback = function() {
      if (this.rub.check_complete()) {
        this.state = state_graded;
        return this.submit_button.show();
      }
    };

    StaffGrading.prototype.keydown_handler = function(event) {
      if (event.which === 17 && this.is_ctrl === false) {
        return this.is_ctrl = true;
      } else if (this.is_ctrl === true && event.which === 13 && !this.list_view && this.rub.check_complete()) {
        return this.submit_and_get_next();
      }
    };

    StaffGrading.prototype.keyup_handler = function(event) {
      if (event.which === 17 && this.is_ctrl === true) {
        return this.is_ctrl = false;
      }
    };

    StaffGrading.prototype.set_button_text = function(text) {
      return this.action_button.attr('value', text);
    };

    StaffGrading.prototype.ajax_callback = function(response) {
      this.error_msg = '';
      this.message = '';
      if (response.success) {
        if (response.problem_list) {
          this.problems = response.problem_list;
        } else if (response.submission) {
          this.data_loaded(response);
        } else {
          this.no_more(response.message);
        }
      } else {
        this.error(response.error);
      }
      this.render_view();
      return this.scroll_to_top();
    };

    StaffGrading.prototype.get_next_submission = function(location) {
      this.location = location;
      this.list_view = false;
      return this.backend.post('get_next', {
        location: location
      }, this.ajax_callback);
    };

    StaffGrading.prototype.skip_and_get_next = function() {
      var data;
      data = {
        score: this.rub.get_total_score(),
        rubric_scores: this.rub.get_score_list(),
        feedback: this.feedback_area.val(),
        submission_id: this.submission_id,
        location: this.location,
        skipped: true,
        submission_flagged: false
      };
      this.gentle_alert("Skipped the submission.");
      return this.backend.post('save_grade', data, this.ajax_callback);
    };

    StaffGrading.prototype.get_problem_list = function() {
      this.list_view = true;
      this.render_view(true);
      return this.backend.post('get_problem_list', {}, this.ajax_callback);
    };

    StaffGrading.prototype.submit_and_get_next = function() {
      var data;
      data = {
        score: this.rub.get_total_score(),
        rubric_scores: this.rub.get_score_list(),
        feedback: this.feedback_area.val(),
        submission_id: this.submission_id,
        location: this.location,
        submission_flagged: this.flag_submission_checkbox.is(':checked')
      };
      this.gentle_alert(gettext("Grades saved.  Fetching the next submission to grade."));
      return this.backend.post('save_grade', data, this.ajax_callback);
    };

    StaffGrading.prototype.gentle_alert = function(msg) {
      this.grading_message = $(this.grading_message_sel);
      this.grading_message.html("");
      this.grading_message.fadeIn();
      return this.grading_message.html("<p>" + msg + "</p>");
    };

    StaffGrading.prototype.error = function(msg) {
      this.error_msg = msg;
      return this.state = state_error;
    };

    StaffGrading.prototype.data_loaded = function(response) {
      this.prompt = response.prompt;
      this.submission = response.submission;
      this.rubric = response.rubric;
      this.submission_id = response.submission_id;
      this.feedback_area.val('');
      this.grade = null;
      this.max_score = response.max_score;
      this.ml_error_info = response.ml_error_info;
      this.prompt_name = response.problem_name;
      this.num_graded = response.num_graded;
      this.min_for_ml = response.min_for_ml;
      this.num_pending = response.num_pending;
      this.state = state_grading;
      if (this.max_score == null) {
        return this.error("No max score specified for submission.");
      }
    };

    StaffGrading.prototype.no_more = function(message) {
      this.prompt = null;
      this.prompt_name = '';
      this.num_graded = 0;
      this.min_for_ml = 0;
      this.submission = null;
      this.rubric = null;
      this.ml_error_info = null;
      this.submission_id = null;
      this.message = message;
      this.grade = null;
      this.max_score = 0;
      return this.state = state_no_data;
    };

    StaffGrading.prototype.render_view = function(before_ajax) {
      var show_grading_elements;
      this.problem_list.html('<tr>\n    <th>' + gettext("Problem Name") + '</th>\n<th>' + gettext("Graded") + '</th>\n<th>' + gettext("Available to Grade") + '</th>\n<th>' + gettext("Required") + '</th>\n<th>' + gettext("Progress") + '</th>\n</tr>');
      this.breadcrumbs.html('');
      this.problem_list_container.toggle(this.list_view);
      if (this.backend.mock_backend) {
        this.message = this.message + "<p>NOTE: Mocking backend.</p>";
      }
      this.message_container.html(this.message);
      this.error_container.html(this.error_msg);
      this.message_container.toggle(this.message !== "");
      this.error_container.toggle(this.error_msg !== "");
      this.flag_submission_checkbox.prop('checked', false);
      show_grading_elements = !(this.list_view || this.state === state_error || this.state === state_no_data);
      this.prompt_wrapper.toggle(show_grading_elements);
      this.submission_wrapper.toggle(show_grading_elements);
      this.grading_wrapper.toggle(show_grading_elements);
      this.meta_info_wrapper.toggle(show_grading_elements);
      this.action_button.hide();
      if (before_ajax) {
        return this.scroll_to_top();
      } else {
        if (this.list_view) {
          return this.render_list();
        } else {
          return this.render_problem();
        }
      }
    };

    StaffGrading.prototype.problem_link = function(problem) {
      var link;
      return link = $('<a>').attr('href', "javascript:void(0)").append("" + problem.problem_name).click((function(_this) {
        return function() {
          return _this.get_next_submission(problem.location);
        };
      })(this));
    };

    StaffGrading.prototype.make_paragraphs = function(text) {
      var new_text, paragraph, paragraph_split, _i, _len;
      paragraph_split = text.split(/\n\s*\n/);
      new_text = '';
      for (_i = 0, _len = paragraph_split.length; _i < _len; _i++) {
        paragraph = paragraph_split[_i];
        new_text += "<p>" + paragraph + "</p>";
      }
      return new_text;
    };

    StaffGrading.prototype.render_list = function() {
      var problem, problem_row, progress_max, progress_value, row_progress_bar, _i, _len, _ref, _results;
      _ref = this.problems;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        problem = _ref[_i];
        problem_row = $('<tr>');
        problem_row.append($('<td class="problem-name">').append(this.problem_link(problem)));
        problem_row.append($('<td>').append("" + problem.num_graded));
        problem_row.append($('<td>').append("" + problem.num_pending));
        problem_row.append($('<td>').append("" + problem.num_required));
        row_progress_bar = $('<div>').addClass('progress-bar');
        progress_value = parseInt(problem.num_graded);
        progress_max = parseInt(problem.num_required) + progress_value;
        row_progress_bar.progressbar({
          value: progress_value,
          max: progress_max
        });
        problem_row.append($('<td>').append(row_progress_bar));
        _results.push(this.problem_list.append(problem_row));
      }
      return _results;
    };

    StaffGrading.prototype.render_problem = function() {
      var available, graded, meta_list, needed, problem_list_link, show_action_button, show_submit_button;
      show_submit_button = true;
      show_action_button = true;
      problem_list_link = $('<a>').attr('href', 'javascript:void(0);').append("< " + gettext("Back to problem list")).click((function(_this) {
        return function() {
          return _this.get_problem_list();
        };
      })(this));
      this.breadcrumbs.append(problem_list_link);
      if (this.state === state_error) {
        this.set_button_text(gettext('Try loading again'));
        show_action_button = true;
      } else if (this.state === state_grading) {
        this.ml_error_info_container.html(this.ml_error_info);
        available = _.template(gettext("<%= num %> available "), {
          num: this.num_pending
        });
        graded = _.template(gettext("<%= num %> graded "), {
          num: this.num_graded
        });
        needed = _.template(gettext("<%= num %> more needed to start ML"), {
          num: Math.max(this.min_for_ml - this.num_graded, 0)
        });
        meta_list = $("<div>").append("<div class='meta-info'>" + available + "</div>").append("<div class='meta-info'>" + graded + "</div>").append("<div class='meta-info'>" + needed + "</div>");
        this.problem_meta_info.html(meta_list);
        this.prompt_container.html(this.prompt);
        this.prompt_name_container.html("" + this.prompt_name);
        this.submission_container.html(this.make_paragraphs(this.submission));
        show_submit_button = false;
        show_action_button = false;
        this.setup_score_selection();
      } else if (this.state === state_graded) {
        this.set_button_text(gettext('Submit'));
        show_action_button = false;
      } else if (this.state === state_no_data) {
        this.message_container.html(this.message);
        this.set_button_text(gettext('Re-check for submissions'));
      } else {
        this.error(_.template(gettext('System got into invalid state: <%= state %>'), {
          state: this.state
        }));
      }
      this.submit_button.toggle(show_submit_button);
      return this.action_button.toggle(show_action_button);
    };

    StaffGrading.prototype.submit = function(event) {
      event.preventDefault();
      if (this.state === state_error) {
        return this.get_next_submission(this.location);
      } else if (this.state === state_graded) {
        return this.submit_and_get_next();
      } else if (this.state === state_no_data) {
        return this.get_next_submission(this.location);
      } else {
        return this.error(gettext('System got into invalid state for submission: ') + this.state);
      }
    };

    StaffGrading.prototype.collapse_question = function() {
      var new_text;
      this.prompt_container.slideToggle();
      this.prompt_container.toggleClass('open');
      if (this.question_header.text() === gettext("(Hide)")) {
        Logger.log('staff_grading_hide_question', {
          location: this.location
        });
        new_text = gettext("(Show)");
      } else {
        Logger.log('staff_grading_show_question', {
          location: this.location
        });
        new_text = gettext("(Hide)");
      }
      return this.question_header.text(new_text);
    };

    StaffGrading.prototype.scroll_to_top = function() {
      var error;
      try {
        return $('html, body').animate({
          scrollTop: $(".staff-grading").offset().top
        }, 200);
      } catch (_error) {
        error = _error;
        return console.log("Scrolling error.");
      }
    };

    return StaffGrading;

  })();

  mock_backend = false;

  ajax_url = $('.staff-grading').data('ajax_url');

  backend = new StaffGradingBackend(ajax_url, mock_backend);

  $(document).ready(function() {
    return new StaffGrading(backend);
  });

}).call(this);
