import { ESRB, GameSizeUnit } from "@prisma/client";
import { IsArray, IsBoolean, IsDate, IsDecimal, IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateVideogameDto {
    @IsString()
    name: string;
    
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    price: string; /* price is a string because it will be normalized to a decimal */ 
    
    @IsDate()
    releaseDate: Date;
    
    @IsArray()
    genre: string[];
    
    @IsString()
    platform: string;
    
    @IsString()
    developer: string;
    
    @IsString()
    publisher: string;
    
    @IsNumber()
    rating: number;
    
    @IsString()
    presentationImage: string;
    
    @IsArray()
    images: string[];
    
    @IsArray()
    videos: string[];
    
    @IsBoolean()
    demo: boolean;
    
    @IsBoolean()
    hasPhysicalFormat: boolean;
    
    @IsEnum(ESRB)
    ESRB: ESRB;
    
    @IsNumber()
    numberOfPlayerSingle: number;
    
    @IsNumber()
    numberOfPlayerMultiplayer: number;
    
    @IsNumber()
    numberOfPlayerLocal: number;


    @IsArray()
    supportedPlayModes: string[];
    
    @IsEnum(GameSizeUnit)
    gameSizeUnit: GameSizeUnit;
    
    @IsString()
    @IsNotEmpty()
    gameSize: string;

    @IsArray()
    supportedLanguages: string[];
    
    @IsArray()
    supportedPlatforms: string[];
}
