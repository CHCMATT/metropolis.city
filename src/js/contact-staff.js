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

	const webhookUrl = '';

	const response = await fetch(webhookUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(webhookBody),
	});

	if (response.ok) {
		alert('I have received your message!');
	} else {
		alert('There was an error - please try again later!');
	}
}