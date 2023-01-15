window.ticketGenerator = new (function(){
	this.tickets = [];
	this.border_color = null;
	this.happy = null;

	this.getRandomInt = function(max) {
	  	return Math.floor(Math.random() * max);
	}

	this.getCity = function(){
		return "state of freedom";
	}

	this.getPrice = function() {
		return this.getRandomInt(100) + " rub";
	}

	this.city = this.getCity();
	this.price = this.getPrice();


 	this.getNumber = function() {
 		return (this.happy) ? (this.happy++, this.getNumberAsString()) : (this.getHappyTicket(), this.getNumberAsString());
 	};

	this.getHappyTicket = function() {
		var number = null;
		var happy = false;

		while (!happy) {
			this.getRandomNumber();
			number = this.getNumberAsString();

			for (var i = 0; i < this.rules.length; i++ ) {
				if (typeof(this.rules[i]) == "function") {
					happy = this.rules[i](number);
				} else {
					happy = false;
				}
			}			
		}

		return this.happy = number;
	}

	this.getNumberAsString = function() {
		return ((this.happy + "").length < 6) ? (Math.pow(10, 6 - (this.happy + "").length) + "").replace("1", "") + this.happy : this.happy;
	}

	this.getRandomNumber = function() {
		this.happy = Math.round(Math.random() * 1000000);
		return this.happy;
	}

	this.getBorderColor = function() {
		if (this.border_color) 
			return this.border_color;

	    var letters = '0123456789';
	    var number = 'rgba(';

	    for (var i = 0; i < 3; i++ ) {
	        number += Math.floor(Math.random() * 255) + ",";
	    }

	    number += "0.4)"
	    this.border_color = number;

	    return number;
	};

	this.new = function(options) {
		this.rules = options.rules || [];

		var data = window.d.ticket_data;
		var ticket = {
			ticket_subject: data.ticket_subject,
			ticket_main_city_info: this.city,
			ticket_main_company_inn_name: data.ticket_main_company_inn_name,
			ticket_main_company_inn_value: data.ticket_main_company_inn_value,
			ticket_type: data.ticket_type,
			ticket_title: data.ticket_title,
			ticket_price: this.price,
			ticket_series_name: data.ticket_series_name,
			ticket_series_value: data.ticket_series_value,
			ticket_ads: data.ticket_ads,
			ticket_company_info: data.ticket_company_info,
			ticket_company_inn_name: data.ticket_company_inn_name,
			ticket_company_inn_value: data.ticket_company_inn_value,
			ticket_number: this.getNumber(),
			last_ticket: this.tickets.length > 0 ? "": "last-ticket",
			border_color: 'style="border-color:'+this.getBorderColor()+';"'
		}

		this.tickets.push(ticket);
		return ticket;
	}	
})();