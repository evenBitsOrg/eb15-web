/*

var showEmailSignUpResultToUser = function (message) {
	document.getElementById("email-preorder-server-back-message").innerHTML = message;
};

var validateEmail = function (email) { 
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};

var receiveServerBackMessage = function (message) {
	// If (0) invalid email address
	// If (1) successfully added to database
	// If (2) already added to database before, duplicate
	if (message.messageCode == 0) {
		showEmailSignUpResultToUser("无效的邮箱地址。请检查输入。");
		document.getElementById("input-email").datastate = "100";
	} else if (message.messageCode == 1) {
		showEmailSignUpResultToUser("登记成功啦！");
		document.getElementById("input-email").datastate = "101";
	} else if (message.messageCode == 2) {
		showEmailSignUpResultToUser("已经成功登记了喔 XD");
		document.getElementById("input-email").datastate = "102";
	};
	window.setTimeout(function(){
		showEmailSignUpResultToUser(" ");
		document.getElementById("input-email").datastate = "000";
	}, 1200);
};

var submitEmailPreorder = function () {
	var inputEmail = document.getElementById("input-email").value;
	if (validateEmail(inputEmail)) {
		window.neopXHR = new XMLHttpRequest();
		window.neopXHR.open("GET", "email-preorder.json", true);
		/// window.neopXHR.open("GET", "email-preorder.json?email=" + inputEmail, true);
		window.neopXHR.send();
		window.neopXHR.onload = function () {
			receiveServerBackMessage(JSON.parse(window.neopXHR.responseText));
		};
	} else {
		showEmailSignUpResultToUser("无效的邮箱地址。请检查输入。");
		document.getElementById("input-email").datastate = "100";
		window.setTimeout(function(){
			showEmailSignUpResultToUser(" ");
			document.getElementById("input-email").datastate = "000";
		}, 1200);
	};
};

*/

var showCoreTeamMembers = function () {
	document.getElementById("core-team").style.display = "block";
	window.scrollBy(0,2001);
};