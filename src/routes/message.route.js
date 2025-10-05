import { Router } from 'express';
import { messageController } from '../controllers/message.controllers.js';
const messageRouter = Router();
messageRouter.post('/message', messageController);

export default messageRouter;
