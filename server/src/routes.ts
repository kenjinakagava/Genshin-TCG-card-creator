import { Request, response, Response, Router } from "express";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const express = require("express");

const router: Router = express.Router();

router.post("/upload", async (req: Request, res: Response) => {
  const { title, status, energy, element, imgUrl, health } = req.body;
  const character = await prisma.CharacterCard.create({
    data: {
      title,
      status,
      energy,
      element,
      imgUrl,
      health,
    },
  });
  return res.status(201).json(character);
});

router.get("/cards", async (req: Request, res: Response) => {
  const cards = await prisma.CharacterCard.findMany();
  return res.status(200).json(cards);
});

router.get("/cards/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const intId = parseInt(id);

  if (!intId) {
    return res.status(400).json("Id is mandatory");
  }

  const card = await prisma.CharacterCard.findUnique({
    where: { id: intId },
  });

  if (!card) {
    return res.status(404).json("Card does not exist");
  }

  return res.status(200).json(card);
});

router.put("/cards", async (req: Request, res: Response) => {
  const { id, title, status, energy, element, imgUrl } = req.body;

  if (!id) {
    return res.status(400).json("Id is mandatory");
  }

  const cardExists = await prisma.CharacterCard.findUnique({ where: { id } });

  if (!cardExists) {
    return res.status(404).json("Card does not exist");
  }

  const character = await prisma.CharacterCard.update({
    where: {
      id,
    },
    data: {
      title,
      status,
      energy,
      element,
      imgUrl,
    },
  });
  return res.status(200).json(character);
});

router.delete("/cards/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const intId = parseInt(id);

  if (!intId) {
    return res.status(400).json("Id is mandatory");
  }

  const card = await prisma.CharacterCard.findUnique({
    where: { id: intId },
  });

  if (!card) {
    return res.status(404).json("Card does not exist");
  }

  await prisma.CharacterCard.delete({ where: { id: intId } });

  return res.status(200).send(`Card id${intId} successfully deleted`);
});

module.exports = router;
