import { GoogleGenAI } from '@google/genai';
import { configDotenv } from 'dotenv';
configDotenv();
const ai = new GoogleGenAI({});

async function geminiFun() {
	const response = await ai.models.generateContent({
		model: 'gemini-2.0-flash',
		contents: 'what is generative ai?',
	});
	return response.text;
}

export default geminiFun;
