!function($,analytics){"use strict";$(document).ready(function(){$(".purchase-credit-btn").on("click",function(event){var courseKey=$(event.target).data("course-key");analytics.track("edx.bi.credit.clicked_purchase_credit",{category:"credit",label:courseKey})})})}(jQuery,window.analytics);var edx=edx||{};!function($){"use strict";edx.dashboard=edx.dashboard||{},edx.dashboard.donation={},edx.dashboard.donation.DonationView=function(params){var configureForm=function(form,method,url,params){$("input",form).remove(),form.attr("action",url),form.attr("method",method),_.each(params,function(value,key){$("<input>").attr({type:"hidden",name:key,value:value}).appendTo(form)})},firePaymentAnalyticsEvent=function(course){analytics.track("edx.bi.user.payment_processor.visited",{category:"donations",label:course})},addDonationToCart=function(amount,course){return $.ajax({url:"/shoppingcart/donation/",type:"POST",data:{amount:amount,course_id:course}})},view={initialize:function(params){return this.$el=params.el,this.course=params.course,_.bindAll(view,"render","donate","startPayment","validate","startPayment","displayServerError","submitPaymentForm"),this},render:function(){var html=_.template($("#donation-tpl").html(),{});return this.$el.html(html),this.$amount=$('input[name="amount"]',this.$el),this.$submit=$(".action-donate",this.$el),this.$errorMsg=$(".donation-error-msg",this.$el),this.$paymentForm=$(".payment-form",this.$el),this.$submit.click(this.donate),this},donate:function(event){if(event&&event.preventDefault(),this.$submit.addClass("disabled"),this.validate()){var amount=this.$amount.val();addDonationToCart(amount,this.course).done(this.startPayment).fail(this.displayServerError)}else this.$submit.removeClass("disabled")},startPayment:function(data){configureForm(this.$paymentForm,"post",data.payment_url,data.payment_params),firePaymentAnalyticsEvent(this.course),this.submitPaymentForm(this.$paymentForm)},validate:function(){var amount=this.$amount.val(),isValid=this.validateAmount(amount);return isValid?(this.$amount.removeClass("validation-error"),this.$errorMsg.text("")):(this.$amount.addClass("validation-error"),this.$errorMsg.text(gettext("Please enter a valid donation amount."))),isValid},validateAmount:function(amount){var amountRegex=/^\d+.\d{2}$|^\d+$/i;return amountRegex.test(amount)?parseFloat(amount)<.01?!1:!0:!1},displayServerError:function(){this.$errorMsg.text(gettext("Your donation could not be submitted.")),this.$submit.removeClass("disabled")},submitPaymentForm:function(form){form.submit()}};return view.initialize(params),view},$(document).ready(function(){$(".donate-container").each(function(){{var container=$(this),course=container.data("course");new edx.dashboard.donation.DonationView({el:container,course:course}).render()}})})}(jQuery);var edx=edx||{};!function($,gettext,Logger,accessibleModal){"use strict";edx.dashboard=edx.dashboard||{},edx.dashboard.legacy={},edx.dashboard.legacy.init=function(urls){function generateProperties(element){var $el=$(element),properties={};return $el.hasClass("action-upgrade")?properties.category="upgrade":$el.hasClass("cta")&&(properties.category="verification"),properties.label=$el.data("course-id"),properties}function toggleCourseActionsDropdown(event){var dashboard_index=$(this).data("dashboard-index"),dropdown_selector="div#actions-dropdown-"+dashboard_index,dropdown=$(dropdown_selector);dropdown.toggleClass("is-visible"),dropdown.hasClass("is-visible")?dropdown.attr("tabindex",-1):dropdown.removeAttr("tabindex");var anchor_selector="a#actions-dropdown-link-"+dashboard_index,anchor=$(anchor_selector),aria_expanded_state="true"===anchor.attr("aria-expanded");anchor.attr("aria-expanded",!aria_expanded_state),event.preventDefault()}var notifications=$(".dashboard-notifications"),upgradeButtonLinks=$(".action-upgrade"),verifyButtonLinks=$(".verification-cta > .cta");notifications.children().length>0&&notifications.focus(),$(".action-more").bind("click",toggleCourseActionsDropdown),window.analytics.trackLink(upgradeButtonLinks,"edx.bi.dashboard.upgrade_button.clicked",generateProperties),window.analytics.trackLink(verifyButtonLinks,"edx.bi.user.verification.resumed",generateProperties),window.analytics.trackLink($(".action-linkedin-profile"),"edx.bi.user.linkedin_add_to_profile",function(element){var $el=$(element);return{category:"linkedin",label:$el.data("course-id"),mode:$el.data("certificate-mode")}}),$("#failed-verification-button-dismiss").click(function(){$.ajax({url:urls.verifyToggleBannerFailedOff,type:"post"}),$("#failed-verification-banner").addClass("is-hidden")}),$("#upgrade-to-verified").click(function(event){var user=$(event.target).closest(".action-upgrade").data("user"),course=$(event.target).closest(".action-upgrade").data("course-id");Logger.log("edx.course.enrollment.upgrade.clicked",[user,course],null)}),$(".action-email-settings").click(function(event){$("#email_settings_course_id").val($(event.target).data("course-id")),$("#email_settings_course_number").text($(event.target).data("course-number")),"False"===$(event.target).data("optout")&&$("#receive_emails").prop("checked",!0)}),$(".action-unenroll").click(function(event){$("#unenroll_course_id").val($(event.target).data("course-id")),$("#unenroll_course_number").text($(event.target).data("course-number"))}),$("#unenroll_form").on("ajax:complete",function(event,xhr){200===xhr.status?location.href=urls.dashboard:403===xhr.status?location.href=urls.signInUser+"?course_id="+encodeURIComponent($("#unenroll_course_id").val())+"&enrollment_action=unenroll":$("#unenroll_error").html(xhr.responseText?xhr.responseText:gettext("An error occurred. Please try again later.")).stop().css("display","block")}),$("#email_settings_form").submit(function(){return $.ajax({type:"POST",url:urls.changeEmailSettings,data:$(this).serializeArray(),success:function(data){data.success&&(location.href=urls.dashboard)},error:function(xhr){403===xhr.status&&(location.href=urls.signInUser)}}),!1}),$(".action-email-settings").each(function(index){$(this).attr("id","email-settings-"+index);var trigger="#"+$(this).attr("id");accessibleModal(trigger,"#email-settings-modal .close-modal","#email-settings-modal","#dashboard-main")}),$(".action-unenroll").each(function(index){$(this).attr("id","unenroll-"+index);var trigger="#"+$(this).attr("id");accessibleModal(trigger,"#unenroll-modal .close-modal","#unenroll-modal","#dashboard-main")}),$("#unregister_block_course").click(function(event){$("#unenroll_course_id").val($(event.target).data("course-id")),$("#unenroll_course_number").text($(event.target).data("course-number"))})}}(jQuery,gettext,Logger,accessible_modal);