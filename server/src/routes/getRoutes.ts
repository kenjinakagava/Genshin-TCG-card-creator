import { PrismaClient } from "@prisma/client";
import express, { Request, Response, Router } from "express";

const prisma = new PrismaClient();

const router: Router = express.Router();

router.get("/cards", async (req: Request, res: Response) => {
  const cards = await prisma.characterCard.findMany();
  return res.status(200).json(cards);
});

router.get("/user-cards/:user", async (req: Request, res: Response) => {
  const { user } = req.params;
  const cards = await prisma.characterCard.findMany({ where: { user: user } });
  return res.status(200).json(cards);
});

router.get("/recent-cards", async (req: Request, res: Response) => {
  const cards = await prisma.characterCard.findMany({ take: -4 });
  return res.status(200).json(cards);
});

router.get("/cards/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const intId = parseInt(id);

  if (!intId) {
    return res.status(400).json("Id is mandatory");
  }

  const card = await prisma.characterCard.findUnique({
    where: { id: intId },
  });

  if (!card) {
    return res.status(404).json("Card does not exist");
  }

  return res.status(200).json(card);
});

module.exports = router;
