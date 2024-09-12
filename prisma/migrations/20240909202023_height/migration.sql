/*
  Warnings:

  - Made the column `createdAt` on table `trip` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `Trip_agencyId_fkey` ON `trip`;

-- AlterTable
ALTER TABLE `trip` MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
