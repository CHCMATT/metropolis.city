async function callAwsLambdaFunction(ev) {
	ev.preventDefault();
	//var xhttp = new XMLHttpRequest();
	//let resp = xhttp.open("GET", "https://u0chp9ryi3.execute-api.us-east-1.amazonaws.com/default/testPostMsg2", true);
	//xhttp.send();

	const resp = await fetch("https://u0chp9ryi3.execute-api.us-east-1.amazonaws.com/default/testPostMsg2", {
		method: 'GET',
		mode: 'no-cors',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	console.log(resp);

	if (resp) {
		addSuccessMsg();
	} else {
		addFailureMsg();
	}
}

async function sendContact(ev) {
	ev.preventDefault();

	const discordNameInput = document
		.getElementById('discordNameInput').value;
	const emailAddrInput = document
		.getElementById('emailAddrInput').value;
	const topicInput = document
		.getElementById('topicInput').value;
	const msgInput = document
		.getElementById('msgInput').value;
	const currentDate = new Date();

	document.getElementById("discordNameInput").value = "";
	document.getElementById("emailAddrInput").value = "";
	document.getElementById("topicInput").value = "Report a user";
	document.getElementById("msgInput").value = "";

	const webhookBody = {
		username: "Metropolis.city Contact Staff Form",
		avatar_url: "https://i.imgur.com/SSxtjZm.png",
		embeds: [{
			title: 'New Contact Staff Form Submission',		
			description: `**Topic:** ${topicInput} \n**Discord:** ${discordNameInput} \n**Email Address:** ${emailAddrInput} \n\n**Message:** ${msgInput}`,
			timestamp: currentDate
		}],
	};

	let resp = await callAwsLambdaFunction();
	console.log(resp);

	if (resp) {
		addSuccessMsg();
	} else {
		addFailureMsg();
	}
}

// ADD SUCCESS NOTIFICATION
function addSuccessMsg() {
  var element = document.getElementById("success-message");
  element.classList.remove("is-hidden");
	setTimeout(async function () {
		removeSuccessMsg(); 
	}, 10000);
}

// ADD FAILURE NOTIFICATION
function addFailureMsg() {
  var element = document.getElementById("failure-message");
  element.classList.remove("is-hidden");
	setTimeout(async function () {
		removeFailureMsg(); 
	}, 10000);
}

// REMOVE SUCCESS NOTIFICATION
function removeSuccessMsg() {
  var element = document.getElementById("success-message");
  element.classList.add("is-hidden");
}

// REMOVE FAILURE NOTIFICATION
function removeFailureMsg() {
  var element = document.getElementById("failure-message");
  element.classList.add("is-hidden");
}