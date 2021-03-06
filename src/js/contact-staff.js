async function sendDiscordMsg(webhookBody) {
	fetch('https://67nwmup6n4v4kxntabgvcd4npm0xmeaf.lambda-url.us-east-1.on.aws/', {
			headers: {
				"Content-type": "application/json"
			},
			method: 'post',
			body: JSON.stringify({
				webhookBody: webhookBody
			})
		})
		.then(response => {
      return response.json();
    })
    .then(function(data) {
			addAlert(data);
			console.log(data);
			return data;
    });
	}

async function sendContact(ev) {
	ev.preventDefault();
	document.getElementById("contact-button").classList.add("is-loading");

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

	const currIsoTime = new Date().toISOString();
	var discordMessage = {
		"embeds": [
				{
					"title": `Metropolis Contact Staff Submission`,
					"description": `**Topic:** ${topicInput}\n**Discord:** ${discordNameInput}\n**Email Address:** ${emailAddrInput}\n\n**Message:** ${msgInput}`,
					"color": 0x50DDE9,
					"timestamp": `${currIsoTime}`,
					"thumbnail": {
						"url": `https://i.imgur.com/SSxtjZm.png`,
					}
				}
		 ],
		 "username": "Metropolis Contact Staff Submission",
		 "avatar_url": "https://i.imgur.com/SSxtjZm.png",
		};

	await sendDiscordMsg(discordMessage);
}

function addAlert(alertData) {
	if (alertData == "success") {
		addSuccessMsg();
	} else {
		addFailureMsg(alertData);
	}
}

// ADD SUCCESS ALERT
function addSuccessMsg() {
	document.getElementById("contact-button").classList.remove("is-loading");
	successAlert = `<div id="success-alert" class="notification notification-message success-message is-light is-success">
	<button onclick="removeSuccessMsg();" class="delete"></button>
	We successfully sent your message to our staff team. <strong>You can expect a response within 72 hours.</strong>
</div>`
  document.getElementById("alerts").innerHTML = document.getElementById("alerts").innerHTML + successAlert;
	setTimeout(async function () {
		removeSuccessMsg(); 
	}, 10000);
}

// ADD FAILURE ALERT
function addFailureMsg(alertData) {
	document.getElementById("contact-button").classList.remove("is-loading");
	failureAlert = `<div id="failure-alert" class="notification notification-message is-light is-danger">
	<button onclick="removeFailureMsg();" class="delete"></button>
	We ran into an issue when trying to send your message to our staff team. <strong>Please report the error code below
		to our Discord server.</strong>
	<p id="error-code">${alertData}</p>
</div>`
  document.getElementById("alerts").innerHTML = document.getElementById("alerts").innerHTML + failureAlert;
	setTimeout(async function () {
		removeFailureMsg(); 
	}, 10000);
}

// REMOVE SUCCESS NOTIFICATION
function removeSuccessMsg() {
  var element = document.getElementById("success-alert");
	if(element) {
  	element.remove();
	}
}

// REMOVE FAILURE NOTIFICATION
function removeFailureMsg() {
  var element = document.getElementById("failure-alert");
	if(element) {
  	element.remove();
	}
}