import express from "express";
import routes from "../routers";
import {
  videos,
  upload,
  videoDetail,
  editVideo,
  deleteVideo,
} from "../controller/videoController";

const videoRouter = express();

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.videoDetail, videoDetail);

export default videoRouter;
