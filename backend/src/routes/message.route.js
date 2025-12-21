import { Router } from "express";

const router = Router();

router.get("/send", (req, res) => {
  res.send("Message Sent!");
});

export default router;
