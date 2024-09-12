-- DropForeignKey
ALTER TABLE `trip` DROP FOREIGN KEY `Trip_agencyId_fkey`;

-- AlterTable
ALTER TABLE `trip` MODIFY `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NULL;

-- CreateTable
CREATE TABLE `_AgencyToTrip` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_AgencyToTrip_AB_unique`(`A`, `B`),
    INDEX `_AgencyToTrip_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_AgencyToTrip` ADD CONSTRAINT `_AgencyToTrip_A_fkey` FOREIGN KEY (`A`) REFERENCES `Agency`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AgencyToTrip` ADD CONSTRAINT `_AgencyToTrip_B_fkey` FOREIGN KEY (`B`) REFERENCES `Trip`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
