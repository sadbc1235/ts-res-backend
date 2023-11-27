-- CreateTable
CREATE TABLE `res` (
    `res_seq` INTEGER NOT NULL AUTO_INCREMENT,
    `date` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `amt` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`res_seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
