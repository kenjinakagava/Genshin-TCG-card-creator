-- CreateTable
CREATE TABLE "CharacterCard" (
    "user" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "title" VARCHAR(16) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "energy" INTEGER NOT NULL,
    "element" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "health" TEXT NOT NULL,

    CONSTRAINT "CharacterCard_pkey" PRIMARY KEY ("id")
);
