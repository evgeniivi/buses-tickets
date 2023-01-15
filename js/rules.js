window.rulesOfHappyness = new (function(){
	this.rules = [];

	this.init = function() {
		var rule1 = function(number) {
			var sum1 = number[0]*1 + number[1]*1 + number[2]*1;
			var sum2 = number[3]*1 + number[4]*1 + number[5]*1;
			return sum1 == sum2;
		}

		this.rules.push(rule1);			
	}

	this.init();
	return this.rules;
})();