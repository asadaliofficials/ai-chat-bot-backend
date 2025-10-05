import geminiFun from '../services/gemini.service.js';
const chatHistory = [];

export const messageController = async (req, res) => {
	const { message } = req.body;
	chatHistory.push({
		role: 'user',
		parts: [{ text: message }],
	});
	try {
		const response = await geminiFun(chatHistory);
		chatHistory.push({
			role: 'model',
			parts: [{ text: response }],
		});
		res.status(200).json({ responce: response });
	} catch (error) {
		console.log(error);
		res.status(500).send('there is an error, please try again later');
	}
};
