/*
  Warnings:

  - You are about to drop the column `rules` on the `Space` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Space" DROP COLUMN "rules",
ADD COLUMN     "comments" TEXT;
