/*
  Warnings:

  - A unique constraint covering the columns `[bookingId]` on the table `Ticket` will be added. If there are existing duplicate values, this will fail.
  - Made the column `email` on table `agency` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `bookingId` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `agency` MODIFY `address` VARCHAR(191) NULL,
    MODIFY `email` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `ticket` ADD COLUMN `bookingId` VARCHAR(191) NOT NULL,
    MODIFY `name` VARCHAR(191) NULL,
    MODIFY `surname` VARCHAR(191) NULL,
    MODIFY `phoneNumber` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Ticket_bookingId_key` ON `Ticket`(`bookingId`);

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `Booking`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
