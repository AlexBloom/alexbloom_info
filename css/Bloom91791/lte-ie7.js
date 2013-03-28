/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Bloom\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-AB_Logo' : '&#x41;',
			'icon-envelope' : '&#x6d;',
			'icon-search' : '&#x73;',
			'icon-list-ul' : '&#x4e;',
			'icon-compass' : '&#x6e;',
			'icon-twitter' : '&#x54;',
			'icon-wordpress' : '&#x57;',
			'icon-vimeo' : '&#x56;',
			'icon-cart' : '&#x63;',
			'icon-tags' : '&#x74;',
			'icon-share' : '&#xe00c;',
			'icon-google-plus' : '&#x47;',
			'icon-dribbble' : '&#x44;',
			'icon-facebook' : '&#x46;',
			'icon-arrow-left' : '&#x6c;',
			'icon-grid' : '&#x67;',
			'icon-arrow-right' : '&#x72;',
			'icon-instagram' : '&#x49;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};