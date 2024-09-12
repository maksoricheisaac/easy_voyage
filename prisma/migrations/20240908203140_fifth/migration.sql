/*
  Warnings:

  - The values [ADMIN_AGENCY] on the enum `User_role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('USER', 'AGENCY_ADMIN', 'SUPER_ADMIN') NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE `AgencyAdmin` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,

    UNIQUE INDEX `AgencyAdmin_name_key`(`name`),
    UNIQUE INDEX `AgencyAdmin_address_key`(`address`),
    UNIQUE INDEX `AgencyAdmin_phone_key`(`phone`),
    UNIQUE INDEX `AgencyAdmin_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AgencyToAgencyAdmin` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_AgencyToAgencyAdmin_AB_unique`(`A`, `B`),
    INDEX `_AgencyToAgencyAdmin_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_AgencyToAgencyAdmin` ADD CONSTRAINT `_AgencyToAgencyAdmin_A_fkey` FOREIGN KEY (`A`) REFERENCES `Agency`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AgencyToAgencyAdmin` ADD CONSTRAINT `_AgencyToAgencyAdmin_B_fkey` FOREIGN KEY (`B`) REFERENCES `AgencyAdmin`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
