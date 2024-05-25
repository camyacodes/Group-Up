import { Router, Request, Response } from "express";
import User from "../models/User";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { name, email, password, profilePic } = req.body;

  try {
    const newUser = new User({ name, email, password, profilePic });
    const savedUser = await newUser.save();
    res.status(500).json(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async (req: Request, res: Response) => {});

export default router;
