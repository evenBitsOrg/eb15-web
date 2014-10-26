var validateEmail = function (email) { 
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};

var receiveServerBackMessage = function (message) {
	// If (0) invalid email address
	// If (1) successfully added to database
	// If (2) already added to database before, duplicate
	if (message.messageCode == 0) {
		console.log("Invalid email address.");
	} else if (message.messageCode == 1) {
		console.log("200 OK.");
	} else if (message.messageCode == 2) {
		console.log("You have already signed up.");
	};
};

var submitEmailPreorder = function () {
	var inputEmail = document.getElementById("input-email").value;
	if (validateEmail(inputEmail)) {
		window.neopXHR = new XMLHttpRequest();
		window.neopXHR.open("GET", "email-preorder.json", true);
		// window.neopXHR.open("GET", "email-preorder.json?email=" + inputEmail, true);
		window.neopXHR.send();
		window.neopXHR.onload = function () {
			receiveServerBackMessage(JSON.parse(window.neopXHR.responseText));
		};
	};
};