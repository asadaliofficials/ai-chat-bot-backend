import { GoogleGenAI } from '@google/genai';
import { configDotenv } from 'dotenv';
configDotenv();
const ai = new GoogleGenAI({});

async function geminiFun(message) {
	const response = await ai.models.generateContent({
		model: 'gemini-2.0-flash',
		contents: message,
	});
	return response.text;
}

export default geminiFun;
