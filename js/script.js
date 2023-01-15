window.x = new (function(){

	// Generating ticket by template, we can try to pass different data
	this.newTicket = function() {
		var ticket = window.ticketGenerator.new({rules: window.rulesOfHappyness});

		var ticketTemplate = document.getElementById("ticket-template");
		var ticketsOutput = document.getElementById("ticket-output");

		var html = window.t.htmlize(ticketTemplate.innerHTML, ticket);
		ticketsOutput.innerHTML = html + ticketsOutput.innerHTML;
		ticketsOutput.className += " animation";

		setTimeout(function() {
			ticketsOutput.className = ticketsOutput.className.replace("animation", "");
		}, 1000);
	}


	// Let's find needable sizes for current window
	this.initSizes = function() {
		var width, height, px;
		var zoom = 8;

		if (window.innerWidth > window.innerHeight) {
			height = Math.round(window.innerHeight / zoom) * 3;
			width = Math.round(window.innerHeight / zoom) * 2;
			px = window.innerHeight / (zoom * 60);
		} else {
			height = Math.round(window.innerWidth / zoom) * 3;
			width = Math.round(window.innerWidth / zoom) * 2;
			px = window.innerWidth / (zoom * 60);
		}

		if (!height || height < 105) {
			height = 105;
		}

		if (!width || width < 70) {
			width = 70;
		}

		if (!px || px < 0.59) {
			px = 0.59;
		}
		

		var ticket_header = document.getElementsByClassName("ticket__header");
		for (var i = 0; i < ticket_header.length; i++) {
			(ticket_header[i]).style.height = height * 10 / 100 + "px";
			(ticket_header[i]).style.width = width + 30 + "px";
		}

		var ticket_footer = document.getElementsByClassName("ticket__footer");
		for (var i = 0; i < ticket_footer.length; i++) {
			(ticket_footer[i]).style.height = height * 30 / 100 + "px";
			(ticket_footer[i]).style.width = width + 30 + "px";
		}

		var ticket_content_main = document.getElementsByClassName("ticket__content-main");
		for (var i = 0; i < ticket_content_main.length; i++) {
			(ticket_content_main[i]).style.height = height * 55 / 100 + "px";
		}

		var ticket_content_header = document.getElementsByClassName("ticket__content-header");
		for (var i = 0; i < ticket_content_header.length; i++) {
			(ticket_content_header[i]).style.height = height * 30 / 100 + "px";
		}

		var ticket_content_footer = document.getElementsByClassName("ticket__content-footer");
		for (var i = 0; i < ticket_content_footer.length; i++) {
			(ticket_content_footer[i]).style.height = height * 15 / 100 + "px";
		}

		var ticket_content = document.getElementsByClassName("ticket__content");
		for (var i = 0; i < ticket_content.length; i++) {
			(ticket_content[i]).style.height = height + 30 + "px";
		}

		var ticket = document.getElementsByClassName("ticket");
		for (var i = 0; i < ticket.length; i++) {
			(ticket[i]).style.width = width + 10 + "px";
			(ticket[i]).style.height = height *1.5 + "px";
		}

		var ticket_button = document.getElementById("get-ticket");
		ticket_button.style.width = width + 30 + "px";		


		var text10 = document.getElementsByClassName("px10");
		for (var i = 0; i < text10.length; i++) {
			text10[i].style.fontSize = 10 * px + "px";
		}

		var text7 = document.getElementsByClassName("px7");
		for (var i = 0; i < text7.length; i++) {
			text7[i].style.fontSize = 7 * px + "px";	
		}

		var text20 = document.getElementsByClassName("px20");
		for (var i = 0; i < text20.length; i++) {
			text20[i].style.fontSize = 20 * px + "px";		
		}
	}

	this.ticketButton = function() {
		var button = document.getElementById("get-ticket");
		var self = this;

		button.onclick = function() {
			self.newTicket();
			self.initSizes();
		}
	}

	this.initEvents = function() {
		var self = this;

		window.onresize = function() {
			self.initSizes();
		}

		window.onload = function() {
			self.ticketButton();
			self.initSizes();
		}
	}

	this.init = function() {
		this.initEvents();
	}

	this.init();
})();