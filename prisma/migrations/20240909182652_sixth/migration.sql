/*
  Warnings:

  - You are about to drop the column `routeId` on the `booking` table. All the data in the column will be lost.
  - You are about to drop the column `routeId` on the `ticket` table. All the data in the column will be lost.
  - You are about to drop the `route` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[tripId]` on the table `Ticket` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tripId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tripId` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `booking` DROP FOREIGN KEY `Booking_routeId_fkey`;

-- DropForeignKey
ALTER TABLE `route` DROP FOREIGN KEY `Route_agencyId_fkey`;

-- DropForeignKey
ALTER TABLE `ticket` DROP FOREIGN KEY `Ticket_routeId_fkey`;

-- AlterTable
ALTER TABLE `booking` DROP COLUMN `routeId`,
    ADD COLUMN `tripId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `ticket` DROP COLUMN `routeId`,
    ADD COLUMN `tripId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `route`;

-- CreateTable
CREATE TABLE `Trip` (
    `id` VARCHAR(191) NOT NULL,
    `agencyId` VARCHAR(191) NOT NULL,
    `departure` VARCHAR(191) NOT NULL,
    `arrival` VARCHAR(191) NOT NULL,
    `departureTime` DATETIME(3) NOT NULL,
    `arrivalTime` DATETIME(3) NOT NULL,
    `adult_price` INTEGER NOT NULL,
    `child_price` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Ticket_tripId_key` ON `Ticket`(`tripId`);

-- AddForeignKey
ALTER TABLE `Trip` ADD CONSTRAINT `Trip_agencyId_fkey` FOREIGN KEY (`agencyId`) REFERENCES `Agency`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_tripId_fkey` FOREIGN KEY (`tripId`) REFERENCES `Trip`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_tripId_fkey` FOREIGN KEY (`tripId`) REFERENCES `Trip`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
