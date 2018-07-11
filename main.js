(function($, w) {

	"use strict";

	w.socialColors = {
		Social_Media: {
			behance: '#0056FF',
			blogger: '#F79138',
			delicious: '#0076E8',
			deviantart: '#45B748',
			digg: '#005BE2',
			dribbble: '#EA4C89',
			facebook: '#4267B2',
			flickr: '#ff0084',
			forrst: '#5B9A68',
			foursquare: '#0072b1',
			googlePlus: '#dd4b39',
			instagram: '#bc2a8d',
			linkedin: '#007bb6',
			medium: '#00ab6c',
			pinterest: '#cb2027',
			quora: '#a82400',
			reddit: '#ff4500',
			soundcloud: '#ff3a00',
			spotify: '#1db954',
			stackExchange: '#1e5397',
			stackOverflow: '#f48024',
			stumbleupon: '#EB4823',
			tumblr: '#32506d',
			twitch: '#6441a5',
			twitter: '#00aced',
			vimeo: '#1ab7ea',
			vine: '#00b488',
			vk: '#45668e',
			xing: '#026466',
			youtube: '#ff0000'
		},
		Brand: {
			amazon: '#ff9900',
			apple: '#b7b7b7',
			blackberry: '#005387',
			google: '#4285f4',
			microsoft: '#00a1f1',
			yahoo: '#410093',
			yandex: '#ffcc00'
		},
		Browser: {
			chrome: '#4285f4',
			firefox: '#e66000',
			opera: '#cc0f16',
			safari: '#448aff'
		},
		CMS: {
			drupal: '#0077c0',
			joomla: '#f44321',
			magento: '#f46f25',
			opencart: '#2cbdea',
			squarespace: '#222222',
			weebly: '#2990ea',
			wix: '#162d3d',
			wordpress: '#21759b'
		},
		Messeging: {
			facebookMessenger: '#0084ff',
			line: '#00c300',
			skype: '#00aff0',
			slack: '#6ecadc',
			snapchat: '#fffc00',
			telegram: '#0088cc',
			viber: '#59267c',
			wechat: '#7bb32e',
			whatsapp: '#075e54'
		},
		Payment_Related: {
			amazonPay: '#ff9900',
			applePay: '#b7b7b7',
			bitcoin: '#faa43d',
			paypal: '#003087',
			stripe: '#6772e5'
		},
		OS_Related : {
			android: '#a4c639',
			appStore: '#',
			googlePlay: '#02d7ff',
			linux: '#f6d300',
			windows: '#0078d7',
			xbox: '#52b043'
		},
		Programming_Related: {
			angular: '#b52e31',
			codepen: '#0ebeff',
			css: '#30a8dc',
			css3: '#30a8dc',
			github: '#24292e',
			html: '#e34f26',
			html5: '#e34f26',
			javascript: '#f7df1e',
			js: '#f7df1e',
			jsfiddle: '#2795ee',
			php: '#8892be',
			python: '#ffde57',
			react: '#00d8ff',
			sass: '#CF649A',
			vuejs: '#41B883'
		},
		Misc: {
			dropbox: '#0061FE',
			googleDrive: '#0DA960',
			kickstarter: '#14E06E',
			mailchimp: '#684C46',
			maxcdn: '#FF6602',
			slideshare: '#FB8B01',
			steam: '#231F20',
			trello: '#0078BE',
			tripadvisor: '#FCC30E',
			uber: '#000'
		}
	};

	function init() {
		w.ruleField = $('#rules .rule-repeater').html();
		w.colorField = $('.color-adder').html();
		w.mergedColors = {};

		for( var group in socialColors ) {
			var checkboxesHTML = '<div class="checkboxes">';
			checkboxesHTML += '<label class="select-auto all">&check; Select All</label>';
			checkboxesHTML += '<label class="select-auto none">&times; Select None</label>';
			for( var i in socialColors[group] ) {
				checkboxesHTML += '<label><input type="checkbox" value="' + i + '" /> ' + i.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase() + '</label>';
			}
			checkboxesHTML += '</div>';
			$('.preset-colors').append('<h4>Select ' + group.replace( '_', ' ' ) + ' colors</h4>' + checkboxesHTML);
			mergedColors = $.extend({}, mergedColors, socialColors[group]);
		}
	}

	function formatProps( p ) {
		var b = $.map( p.split(':'), $.trim );
		return p == '' ? '' : '\t' + b.join(': ');
	}

	function update() {
		var a = $('#rules .a-rule'),
		x = {},
		output = '';

		$('.checkboxes input[type="checkbox"]:checked').each(function() {
			var b = $(this).val();
			x[b] = mergedColors[b];
		});

		$('.color-adder .a-color').each(function() {
			var y = $(this).find('.media-name').val(),
			z = $(this).find('.media-color').val();

			if( y != '' && z != '' ) {
				x[y] = z;
			}
		});

		a.each(function() {
			var b = $(this).find('.selectors').val().replace(/(?:\r\n|\r|\n)/g, '').split(','),
			c = $(this).find('.properties').val().replace(/(?:\r\n|\r|\n)/g, '').split(';');
			b = $.map(b, $.trim).filter(function(s){return s != ''});
			c = $.map(c, $.trim).filter(function(s) {
				return s.indexOf(':') > 0 ? true : false;
			});

			if( !b.length || !c.length ) {
				return;
			}

			for( var y in x ) {
				output += b.join(',\n').replace(/%%/g, y) + ' {\n';
				output += $.map(c, formatProps).join(';\n').replace(/##/g, x[y]) + ';';
				output += '\n}\n';
			}

			output += '\n';
		});

		$('#result').val(output.trim());

	}

	$(document).on('click', '#add_new_rule', function() {
		$(this).before(ruleField);
	});

	$(document).on('click', '#add_new_color', function() {
		$(this).before(colorField);
	});

	$(document).on('click', '.remove-rule', function() {
		$(this).closest('.a-rule').remove();
	});

	$(document).on('click', '.remove-color', function() {
		$(this).closest('.a-color').remove();
	});

	$(document).on('click', 'label.select-auto', function() {
		$(this).closest('.checkboxes').find('input[type="checkbox"]').prop('checked', $(this).hasClass('all'));
	});

	$(document).on('click', '#go', update);

	$(document).ready(init);

})(jQuery, window);