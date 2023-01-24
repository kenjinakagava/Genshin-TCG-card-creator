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

-- CreateTable
CREATE TABLE "CharacterSkills" (
    "id" SERIAL NOT NULL,
    "characterId" INTEGER NOT NULL,
    "skillElementalType" TEXT,
    "firstSkillDescription" TEXT,
    "firstSkillElementalDiceCost" INTEGER,
    "firstSkillGenericDiceCost" INTEGER,
    "firstSkillImageUrl" TEXT,
    "secondSkillDescription" TEXT,
    "secondSkillImageUrl" TEXT,
    "secondSkillDiceCost" INTEGER,
    "ultimateSkillDescription" TEXT,
    "ultimateSkillDiceCost" INTEGER,
    "ultimateSkillEnergyCost" INTEGER,
    "ultimateSkillImageUrl" TEXT,
    "passiveSkillDescription" TEXT,
    "passiveSkillImageUrl" TEXT,

    CONSTRAINT "CharacterSkills_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CharacterSkills" ADD CONSTRAINT "CharacterSkills_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "CharacterCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
