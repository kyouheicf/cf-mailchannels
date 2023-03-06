export default {
	async fetch(request, env, ctx) {
		return await fetch('https://api.mailchannels.net/tx/v1/send', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				personalizations: [
					{
						to: [{ email: `${env.RECEIVER_EMAIL}`, name: 'Test Recipient' }],
					},
				],
				from: {
					email: `${env.SENDER_EMAIL}`,
					name: 'Workers - MailChannels integration',
				},
				subject: 'Look! No servers',
				content: [
					{
						type: 'text/plain',
						value: 'And no email service accounts and all for free too!',
					},
				],
			}),
		})
	},
}