
/*
Data Download Section

imports from other modules.
wrap in (-> ... apply) to defer evaluation
such that the value can be defined later than this assignment (file load order).
 */

(function() {
  var DataDownload, PendingInstructorTasks, ReportDownloads, std_ajax_err;

  std_ajax_err = function() {
    return window.InstructorDashboard.util.std_ajax_err.apply(this, arguments);
  };

  PendingInstructorTasks = function() {
    return window.InstructorDashboard.util.PendingInstructorTasks;
  };

  ReportDownloads = function() {
    return window.InstructorDashboard.util.ReportDownloads;
  };

  DataDownload = (function() {
    function DataDownload($section) {
      this.$section = $section;
      this.$section.data('wrapper', this);
      this.$list_studs_btn = this.$section.find("input[name='list-profiles']'");
      this.$list_studs_csv_btn = this.$section.find("input[name='list-profiles-csv']'");
      this.$list_may_enroll_csv_btn = this.$section.find("input[name='list-may-enroll-csv']");
      this.$list_anon_btn = this.$section.find("input[name='list-anon-ids']'");
      this.$grade_config_btn = this.$section.find("input[name='dump-gradeconf']'");
      this.$calculate_grades_csv_btn = this.$section.find("input[name='calculate-grades-csv']'");
      this.$problem_grade_report_csv_btn = this.$section.find("input[name='problem-grade-report']'");
      this.$download = this.$section.find('.data-download-container');
      this.$download_display_text = this.$download.find('.data-display-text');
      this.$download_request_response_error = this.$download.find('.request-response-error');
      this.$reports = this.$section.find('.reports-download-container');
      this.$download_display_table = this.$reports.find('.data-display-table');
      this.$reports_request_response = this.$reports.find('.request-response');
      this.$reports_request_response_error = this.$reports.find('.request-response-error');
      this.report_downloads = new (ReportDownloads())(this.$section);
      this.instructor_tasks = new (PendingInstructorTasks())(this.$section);
      this.clear_display();
      this.$list_anon_btn.click((function(_this) {
        return function(e) {
          var url;
          url = _this.$list_anon_btn.data('endpoint');
          return location.href = url;
        };
      })(this));
      this.$list_studs_csv_btn.click((function(_this) {
        return function(e) {
          var url;
          _this.clear_display();
          url = _this.$list_studs_csv_btn.data('endpoint');
          url += '/csv';
          return $.ajax({
            dataType: 'json',
            url: url,
            error: function(std_ajax_err) {
              _this.$reports_request_response_error.text(gettext("Error generating student profile information. Please try again."));
              return $(".msg-error").css({
                "display": "block"
              });
            },
            success: function(data) {
              _this.$reports_request_response.text(data['status']);
              return $(".msg-confirm").css({
                "display": "block"
              });
            }
          });
        };
      })(this));
      this.$list_studs_btn.click((function(_this) {
        return function(e) {
          var url;
          url = _this.$list_studs_btn.data('endpoint');
          _this.clear_display();
          _this.$download_display_table.text(gettext('Loading'));
          return $.ajax({
            dataType: 'json',
            url: url,
            error: function(std_ajax_err) {
              _this.clear_display();
              return _this.$download_request_response_error.text(gettext("Error getting student list."));
            },
            success: function(data) {
              var $table_placeholder, columns, feature, grid, grid_data, options;
              _this.clear_display();
              options = {
                enableCellNavigation: true,
                enableColumnReorder: false,
                forceFitColumns: true,
                rowHeight: 35
              };
              columns = (function() {
                var _i, _len, _ref, _results;
                _ref = data.queried_features;
                _results = [];
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                  feature = _ref[_i];
                  _results.push({
                    id: feature,
                    field: feature,
                    name: data.feature_names[feature]
                  });
                }
                return _results;
              })();
              grid_data = data.students;
              $table_placeholder = $('<div/>', {
                "class": 'slickgrid'
              });
              _this.$download_display_table.append($table_placeholder);
              return grid = new Slick.Grid($table_placeholder, grid_data, columns, options);
            }
          });
        };
      })(this));
      this.$list_may_enroll_csv_btn.click((function(_this) {
        return function(e) {
          var url;
          _this.clear_display();
          url = _this.$list_may_enroll_csv_btn.data('endpoint');
          return $.ajax({
            dataType: 'json',
            url: url,
            error: function(std_ajax_err) {
              _this.$reports_request_response_error.text(gettext("Error generating list of students who may enroll. Please try again."));
              return $(".msg-error").css({
                "display": "block"
              });
            },
            success: function(data) {
              _this.$reports_request_response.text(data['status']);
              return $(".msg-confirm").css({
                "display": "block"
              });
            }
          });
        };
      })(this));
      this.$grade_config_btn.click((function(_this) {
        return function(e) {
          var url;
          url = _this.$grade_config_btn.data('endpoint');
          return $.ajax({
            dataType: 'json',
            url: url,
            error: function(std_ajax_err) {
              _this.clear_display();
              return _this.$download_request_response_error.text(gettext("Error retrieving grading configuration."));
            },
            success: function(data) {
              _this.clear_display();
              return _this.$download_display_text.html(data['grading_config_summary']);
            }
          });
        };
      })(this));
      this.$calculate_grades_csv_btn.click((function(_this) {
        return function(e) {
          return _this.onClickGradeDownload(_this.$calculate_grades_csv_btn, gettext("Error generating grades. Please try again."));
        };
      })(this));
      this.$problem_grade_report_csv_btn.click((function(_this) {
        return function(e) {
          return _this.onClickGradeDownload(_this.$problem_grade_report_csv_btn, gettext("Error generating problem grade report. Please try again."));
        };
      })(this));
    }

    DataDownload.prototype.onClickGradeDownload = function(button, errorMessage) {
      var url;
      this.clear_display();
      url = button.data('endpoint');
      return $.ajax({
        dataType: 'json',
        url: url,
        error: (function(_this) {
          return function(std_ajax_err) {
            _this.$reports_request_response_error.text(errorMessage);
            return $(".msg-error").css({
              "display": "block"
            });
          };
        })(this),
        success: (function(_this) {
          return function(data) {
            _this.$reports_request_response.text(data['status']);
            return $(".msg-confirm").css({
              "display": "block"
            });
          };
        })(this)
      });
    };

    DataDownload.prototype.onClickTitle = function() {
      this.clear_display();
      this.instructor_tasks.task_poller.start();
      return this.report_downloads.downloads_poller.start();
    };

    DataDownload.prototype.onExit = function() {
      this.instructor_tasks.task_poller.stop();
      return this.report_downloads.downloads_poller.stop();
    };

    DataDownload.prototype.clear_display = function() {
      this.$download_display_text.empty();
      this.$download_display_table.empty();
      this.$download_request_response_error.empty();
      this.$reports_request_response.empty();
      this.$reports_request_response_error.empty();
      $(".msg-confirm").css({
        "display": "none"
      });
      return $(".msg-error").css({
        "display": "none"
      });
    };

    return DataDownload;

  })();

  _.defaults(window, {
    InstructorDashboard: {}
  });

  _.defaults(window.InstructorDashboard, {
    sections: {}
  });

  _.defaults(window.InstructorDashboard.sections, {
    DataDownload: DataDownload
  });

}).call(this);
