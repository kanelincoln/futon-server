/*
  Warnings:

  - You are about to drop the `OpeningHours` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "OpeningHours" DROP CONSTRAINT "OpeningHours_spaceId_fkey";

-- DropTable
DROP TABLE "OpeningHours";

-- CreateTable
CREATE TABLE "Hours" (
    "id" SERIAL NOT NULL,
    "spaceId" INTEGER NOT NULL,
    "day" TEXT NOT NULL,
    "openTime" TEXT NOT NULL,
    "closeTime" TEXT NOT NULL,

    CONSTRAINT "Hours_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Hours" ADD CONSTRAINT "Hours_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "Space"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
