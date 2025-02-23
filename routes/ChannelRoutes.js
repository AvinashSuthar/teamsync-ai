import { Router } from "express";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import {
  addChannelImage,
  createChannel,
  editChannel,
  getChannelMessages,
  getUserChannels,
} from "../controllers/ChannelController.js";

const channelRoutes = Router();
channelRoutes.post("/create-channel", verifyToken, createChannel);
channelRoutes.put("/edit-channel", verifyToken, editChannel);
channelRoutes.get("/get-user-channels", verifyToken, getUserChannels);
channelRoutes.get(
  "/get-channel-messages/:channelId",
  verifyToken,
  getChannelMessages
);

channelRoutes.post(
  "/add-channel-image/:channelId",
  verifyToken,
  addChannelImage
);

export default channelRoutes;
