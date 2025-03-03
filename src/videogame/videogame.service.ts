import { All, Injectable } from '@nestjs/common';
import { CreateVideogameDto } from './dto/create-videogame.dto';
import { UpdateVideogameDto } from './dto/update-videogame.dto';
import { PrismaService } from 'src/Prisma.service';
import { Decimal } from '@prisma/client/runtime/library';
import { GameSizeUnit } from '@prisma/client';
import { normalizeDecimal } from './utils/number.utils';
import { videogameSelect } from './selectors';


@Injectable()
export class VideogameService {
  constructor(private readonly prisma: PrismaService) {}

  // Create a new videogame

  create(createVideogameDto: CreateVideogameDto) {
    // Normalize the game size and price to a decimal if they are strings for example 0,5GB -> 0.5GB and 0,5$ -> 0.5$
    const gameSize = normalizeDecimal(createVideogameDto.gameSize);
    const price = normalizeDecimal(createVideogameDto.price);

    return this.prisma.videogame.create({
      data:{ 
        ...createVideogameDto,
        gameSize: new Decimal(gameSize),
        price: new Decimal(price),
        gameSizeUnit: createVideogameDto.gameSizeUnit as GameSizeUnit,
      },
      select: videogameSelect,
    });

  }

  // Find all videogames

  async findAll() {
    try{
      const allVideogames = this.prisma.videogame.findMany({
        select: videogameSelect,
      });
      return allVideogames ? allVideogames: Promise.reject({
        message: 'There are no videogames in the database',
        statusCode: 404,
      });
    }
    catch(error){
      throw new Error('Error fetching all videogames ' + error.message);
    }
  }

  // Find a videogame by id	
  async findById( id: string ) {
    try{
      const videogame =  await this.prisma.videogame.findUnique({
        where: { id },
        select: videogameSelect,
      })

      return videogame ? videogame: Promise.reject({
        message: `The videogame with id ${id} was not found`,
        statusCode: 404,
      });
    }
    catch(error){
      throw new Error(  `Unexpected error: ${error.message}`);
    }
  }

  async updateVideogame(id: string, updateVideogameDto: UpdateVideogameDto) {
    try{
      const updatedVideogame = await this.prisma.videogame.update({
        where: {
          id: id,
        },
        data:{
          ...updateVideogameDto,
        },
      });
      return updatedVideogame
    }
    catch (error){
      throw new Error(`Error, the video game with id ${id} was not found or there was an error with the type of any data` + error.message)
    }
  }

  remove(id: string) {
    return this.prisma.videogame.delete({
      where: {
        id: id,
      },
    });
  }
}
