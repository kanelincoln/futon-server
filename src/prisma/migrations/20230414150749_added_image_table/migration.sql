-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "spaceId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "Space"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
