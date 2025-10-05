# AI Chat-Bot (Backend)

This project is a Node.js REST API that leverages Google Gemini AI to provide intelligent chat responses. Designed for easy integration with frontend clients, it demonstrates modern backend practices and AI-powered conversational capabilities.

## Features

- **Express.js REST API**: Fast and scalable HTTP server.
- **Google Gemini AI Integration**: Uses the latest Gemini model for generating chat responses.
- **Environment Configuration**: Securely manages sensitive keys and settings via `.env`.
- **Modular Structure**: Clean separation of concerns for controllers, routes, services, and configuration.
- **Easy Setup & Deployment**: Ready to run locally or deploy to cloud platforms.

## Project Structure

```
.
├── .env.example           # Example environment variables
├── package.json           # Project metadata and dependencies
├── server.js              # Entry point for the server
├── src/
│   ├── app.js             # Express app setup
│   ├── config/
│   │   └── env.config.js  # Loads environment variables
│   ├── controllers/
│   │   └── message.controllers.js # Handles chat requests
│   ├── routes/
│   │   └── message.route.js      # API route definitions
│   └── services/
│       └── gemini.service.js     # Gemini AI integration
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone repo
   cd ai-chat-bot-backend
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env`:
     ```sh
     cp .env.example .env
     ```
   - Add your [Google Gemini API key](https://ai.google.dev/) to `.env`:
     ```
     GEMINI_API_KEY=your_actual_api_key
     PORT=3000
     ```

### Running the Server

- **Development mode (with auto-reload):**
  ```sh
  npm run dev
  ```
- **Production mode:**
  ```sh
  npm start
  ```

The server will start on the port specified in `.env` (default: 3000).

## API Usage

### Endpoint

- **POST** `/api/v1/message`

### Request Body

```json
{
	"message": "Hello, how are you?"
}
```

### Response

```json
{
	"responce": "I'm an AI model, and I'm here to help you!"
}
```

## How It Works

- The backend receives chat messages via the `/api/v1/message` endpoint.
- It maintains a chat history and sends it to the Gemini AI model.
- The AI's response is returned to the client and appended to the chat history.

## Environment Variables

| Variable         | Description           |
| ---------------- | --------------------- |
| `PORT`           | Server listening port |
| `GEMINI_API_KEY` | Google Gemini API key |

## Contributing

Pull requests and suggestions are welcome! Please open an issue to discuss changes or improvements.

## License

This project is licensed under the ISC License.

---

**Showcase your AI skills and backend expertise with this project!**
