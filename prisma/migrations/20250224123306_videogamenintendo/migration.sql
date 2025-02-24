-- CreateEnum
CREATE TYPE "ESRB" AS ENUM ('E', 'E10+', 'T', 'M', 'A', 'RP', 'RP17+');

-- CreateEnum
CREATE TYPE "GameSizeUnit" AS ENUM ('GB', 'MB', 'KB');

-- CreateTable
CREATE TABLE "Videogame" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "genre" TEXT[],
    "platform" TEXT NOT NULL,
    "developer" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "presentationImage" TEXT NOT NULL,
    "images" TEXT[],
    "videos" TEXT[],
    "demo" BOOLEAN NOT NULL DEFAULT false,
    "hasPhysicalFormat" BOOLEAN NOT NULL DEFAULT false,
    "ESRB" "ESRB" NOT NULL,
    "numberOfPlayerSingle" INTEGER NOT NULL,
    "numberOfPlayerMultiplayer" INTEGER NOT NULL,
    "numberOfPlayerLocal" INTEGER NOT NULL,
    "SupportedPlayModes" TEXT[],
    "GameSizeUnit" "GameSizeUnit" NOT NULL DEFAULT 'GB',
    "GameSize" DECIMAL(10,2) NOT NULL,
    "SupportedLanguages" TEXT[],
    "SupportedPlatforms" TEXT[],

    CONSTRAINT "Videogame_pkey" PRIMARY KEY ("id")
);
