import geminiFun from '../services/gemini.service.js';

export const messageController = async (req, res) => {
	const { message } = req.body;
	try {
		const response = await geminiFun(message);
		res.status(200).json({ responce: response });
	} catch (error) {
		console.log(error);
		res.status(500).send('there is an error, please try again later');
	}
};
