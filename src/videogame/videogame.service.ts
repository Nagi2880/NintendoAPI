import { Injectable } from '@nestjs/common';
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
      return await this.prisma.videogame.findMany({
        select: videogameSelect,
      });
    }
    catch(error){
      throw new Error('Error fetching all videogames ' + error.message);
    }
  }

  // Find a videogame by id	
  async findById( id: string ) {
    try{
      return await this.prisma.videogame.findUnique({
        where: {
          id: id
        },
        select: videogameSelect,
      })
    }
    catch(error){
      throw new Error('Error, the videogame with id ' + id + ' was not found or there was an error fetching it ' + error.message);
    }
  }

  update(id: number, updateVideogameDto: UpdateVideogameDto) {
    return `This action updates a #${id} videogame`;
  }

  remove(id: number) {
    return `This action removes a #${id} videogame`;
  }
}
