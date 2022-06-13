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

	const webhookUrl = 'https://discord.com/api/webhooks/985737219694284870/OQ6e3HKekoe8juG3PqnLd4y1IuJKGEJV2-leKIwnBKzw5c4F2j-LA2S-TQFNgHnvXpb7';

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
		alert('There was an error! Try again later!');
	}
}