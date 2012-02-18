$(document).ready(function() {

	var domscripts = {

		init: function init () {

			var self = this;

			self.installStickyMenu();
			self.installTabs();
			self.installSyntaxHighlighting();
			self.installGrid();
			self.installFormSwitcher();
		},

		installStickyMenu: function installStickyMenu () {

			var header      = $('body > header'),
				headings    = $('#main h2'),
				nav         = $('nav#level2'),
				stickyClass = 'fix';

			if (nav.find('.ym-hlist').length > 0 ) {

				$(document).bind('scroll',function(){
					var hOffset = header.offset().top+header.height(),
						top     = $(document).scrollTop(),
						trigger = false;

					// make it sticky ...
					if (hOffset < top) {
						if (nav.data(stickyClass) !== true) {
							nav.addClass(stickyClass).data(stickyClass,true);
						}
					} else {
						if (nav.data(stickyClass) !== false) {
							nav.removeClass(stickyClass).data(stickyClass,false);
						}
					}

					var nOffset = nav.height();

					// adjust active menu-item from scroll-value
					$.each(headings, function(key){
						var id        = '#'+$(this).attr('id'),
							offset    = $(this).offset().top,
							pos       = offset - top,
							targetPos = 0;

						if (nav.hasClass(stickyClass) === true) {
							targetPos = 2*nav.height();
						}

						if (pos > targetPos) {
							nav.find('a[href="'+id+'"]').parent().prev().addClass('active').siblings().removeClass('active');
							return false;
						} else if (pos < targetPos && pos > targetPos - nOffset) {
							nav.find('a[href="'+id+'"]').parent().addClass('active').siblings().removeClass('active');
							return false;
						}
					});
				});

				// initial check for scroll-status ...
				$(document).trigger('scroll');

				if ($('body').hasClass('doc') === true) {

					var stateObj = { page: "index" };

					// jump to a named anchor ...
					$('#level2 a').bind('click', function(event){
						event.preventDefault();

						var id      = $(this).attr('href'),
							pos     = $(id).offset().top,
							nHeight = nav.height() + 6; // 6px whitespace

						// set active menu-item ...
						$(this).parent()
							.addClass('active')
							.siblings()
							.removeClass('active');

						$(id).focus();

						// adjust scroll-value
						if (nav.hasClass(stickyClass) === true) {
							$(document).scrollTop(pos-nHeight);
						} else {
							$(document).scrollTop(pos-2*nHeight);
						}
						// update URL id fragment
						history.pushState(stateObj, "docs", "index.html"+id);
					});
				}
			}
		},

		installTabs: function installTabs () {

			// standard behavoir in YAML docs
			$('.jquery_tabs:not([data-sync])').accessibleTabs({
				fx:"show",
				fxspeed: '',
				syncheights: false,
				tabhead: 'h5',
				tabbody:'.tab-content'
			});

			// "accessible tabs" sync example
			$('.jquery_tabs[data-sync="true"]').accessibleTabs({
				fx:"show",
				fxspeed: '',
				syncheights: true,
				tabhead: 'h5',
				tabbody:'.tab-content'
			});
		},

		installSyntaxHighlighting: function installSyntaxHighlighting () {
			var highlightStyle = "peachpuff";

			if (jQuery.fn.snippet) {
				$("pre.htmlCode").snippet("html", {style: highlightStyle});
				$("pre.cssCode").snippet("css", {style: highlightStyle});
				$("pre.jsCode").snippet("javascript", {style: highlightStyle});
			}
		},

		installGrid: function installGrid () {

			// vertical rhythm lines for typography section ...
			if (jQuery.fn.gridBuilder) {
				$(".v-grid").gridBuilder({
					color: '#eee', // color of the primary gridlines
					secondaryColor: '#f9f9f9', // color of the secondary gridlines
					vertical: 21, // height of the vertical rhythm
					horizontal: 2000, // width of horizontal strokes
					gutter: 0 // width of the gutter between strokes
				});
			}
		},

		installFormSwitcher: function installFormSwitcher () {
			$('#formswitch').change(function(event){
				var target = event.target,
					type   = $(target).data('type');
				$('#demo-form1, #demo-form2').prop('class','ym-form').addClass(type);
			});
		}
	};

	domscripts.init();
});