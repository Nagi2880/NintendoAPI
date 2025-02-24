/*
  Warnings:

  - You are about to drop the column `ESRB` on the `Videogame` table. All the data in the column will be lost.
  - You are about to drop the column `GameSize` on the `Videogame` table. All the data in the column will be lost.
  - You are about to drop the column `GameSizeUnit` on the `Videogame` table. All the data in the column will be lost.
  - You are about to drop the column `SupportedLanguages` on the `Videogame` table. All the data in the column will be lost.
  - You are about to drop the column `SupportedPlatforms` on the `Videogame` table. All the data in the column will be lost.
  - You are about to drop the column `SupportedPlayModes` on the `Videogame` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Videogame` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - Added the required column `esrb` to the `Videogame` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gameSize` to the `Videogame` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Videogame" DROP COLUMN "ESRB",
DROP COLUMN "GameSize",
DROP COLUMN "GameSizeUnit",
DROP COLUMN "SupportedLanguages",
DROP COLUMN "SupportedPlatforms",
DROP COLUMN "SupportedPlayModes",
ADD COLUMN     "esrb" "ESRB" NOT NULL,
ADD COLUMN     "gameSize" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "gameSizeUnit" "GameSizeUnit" NOT NULL DEFAULT 'GB',
ADD COLUMN     "supportedLanguages" TEXT[],
ADD COLUMN     "supportedPlatforms" TEXT[],
ADD COLUMN     "supportedPlayModes" TEXT[],
ALTER COLUMN "price" SET DATA TYPE DECIMAL(10,2);
