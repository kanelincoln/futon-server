/*
  Warnings:

  - Added the required column `affordability` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `busyness` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coffee` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `googleMaps` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hotspot` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loudness` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `power` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rules` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `space` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wiFi` to the `Space` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Space" ADD COLUMN     "affordability" INTEGER NOT NULL,
ADD COLUMN     "busyness" INTEGER NOT NULL,
ADD COLUMN     "coffee" INTEGER NOT NULL,
ADD COLUMN     "googleMaps" TEXT NOT NULL,
ADD COLUMN     "hotspot" INTEGER NOT NULL,
ADD COLUMN     "loudness" INTEGER NOT NULL,
ADD COLUMN     "power" INTEGER NOT NULL,
ADD COLUMN     "rules" TEXT NOT NULL,
ADD COLUMN     "size" INTEGER NOT NULL,
ADD COLUMN     "space" INTEGER NOT NULL,
ADD COLUMN     "wiFi" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "OpeningHours" (
    "id" SERIAL NOT NULL,
    "spaceId" INTEGER NOT NULL,
    "day" TEXT NOT NULL,
    "openTime" TEXT NOT NULL,
    "closeTime" TEXT NOT NULL,

    CONSTRAINT "OpeningHours_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OpeningHours" ADD CONSTRAINT "OpeningHours_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "Space"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
