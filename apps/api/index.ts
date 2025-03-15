console.log("Hello via Bun!");
import express from "express";
import { authMiddleware } from "./middleware";
import { prismaClient } from "db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/v1/website", authMiddleware, async (req, res) => {
  const userId = req.userId!;
  const { url } = req.body;

  console.log(userId);
  const data = await prismaClient.website.create({
    data: {
      userId,
      url,
    },
  });
  res.json({
    id: data.id,
  });
});

app.get("/api/v1/website/status", authMiddleware, async (req, res) => {
  const websiteId = req.query.websiteId as string;
  const userId = req.userId!;

  const data = await prismaClient.website.findFirst({
    where: {
      id: websiteId,
      userId,
      disabled: false,
    },
    include: {
      ticks: true,
    },
  });
  res.json(data);
});

app.get("/api/v1/website", authMiddleware, (req, res) => {
  const userId = req.userId!;
  const data = prismaClient.website.findMany({
    where: {
      userId,
      disabled: false,
    },
  });
  res.json(data);
});

app.delete("/api/v1/website/", authMiddleware, (req, res) => {
  const websiteId = req.query.websiteId as string;
  const userId = req.userId!;
  //find and update to disaple the website true
  const data = prismaClient.website.update({
    where: {
      id: websiteId,
      userId,
    },
    data: {
      disabled: true,
    },
  });
  res.json({
    message: "Website deleted successfully",
  });
});

app.listen(8000);
