/*
  Warnings:

  - You are about to drop the column `closeTime` on the `Hours` table. All the data in the column will be lost.
  - You are about to drop the column `openTime` on the `Hours` table. All the data in the column will be lost.
  - Added the required column `close` to the `Hours` table without a default value. This is not possible if the table is not empty.
  - Added the required column `open` to the `Hours` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hours" DROP COLUMN "closeTime",
DROP COLUMN "openTime",
ADD COLUMN     "close" TEXT NOT NULL,
ADD COLUMN     "open" TEXT NOT NULL;
