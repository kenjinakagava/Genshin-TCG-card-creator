-- CreateTable
CREATE TABLE "CharacterCard" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(14) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "energy" INTEGER NOT NULL,
    "element" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "health" VARCHAR(2) NOT NULL,

    CONSTRAINT "CharacterCard_pkey" PRIMARY KEY ("id")
);
