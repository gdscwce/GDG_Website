import type { Request, Response } from "express";
import { eventModel } from "../models/eventModel.js";
import uploadimage from "./uploadtoS3.js";

const addOrEditThumbnail = async (req: Request, res: Response) => {
  try {
    const { eventId } = req.params;

    if (!req.file) {
      return res.status(400).json({
        ok: false,
        message: "thumbnail image is required",
      });
    }

    const event = await eventModel.findById(eventId);
    if (!event) {
      return res.status(404).json({
        ok: false,
        message: "event not found",
      });
    }

    const s3Key = await uploadimage(
      req.file.originalname,
      req.file.buffer
    );

    event.eventThumbnailKey = s3Key;
    await event.save();

    return res.status(200).json({
      ok: true,
      message: "thumbnail uploaded successfully",
      thumbnailKey: s3Key,
    });
  } catch (err) {
    console.error("addOrEditThumbnail error:", err);
    return res.status(500).json({
      ok: false,
      message: "internal server error",
    });
  }
};


const deleteThumbnail = async (req: Request, res: Response) => {
    try {
      const { eventId } = req.params;
  
      const event = await eventModel.findById(eventId);
      if (!event || !event.eventThumbnailKey) {
        return res.status(404).json({
          ok: false,
          message: "thumbnail not found",
        });
      }
  
      event.eventThumbnailKey = "";
      await event.save();
  
      return res.status(200).json({
        ok: true,
        message: "thumbnail removed successfully",
      });
    } catch (err) {
      console.error("deleteThumbnail error:", err);
      return res.status(500).json({
        ok: false,
        message: "internal server error",
      });
    }
  };
  

export { addOrEditThumbnail, deleteThumbnail };