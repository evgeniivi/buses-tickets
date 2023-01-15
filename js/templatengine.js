window.t = new (function(){
	this.htmlize = function(html, data) {
		for (var i in data) {
			html = html.replace("#" + i + "#", data[i]);
		}
		return html;
	}
})();
