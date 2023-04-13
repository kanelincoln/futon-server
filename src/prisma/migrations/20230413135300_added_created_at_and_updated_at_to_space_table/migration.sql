/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Borough` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Borough` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Space` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Borough" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Space" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
