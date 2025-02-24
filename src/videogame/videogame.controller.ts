import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VideogameService } from './videogame.service';
import { CreateVideogameDto } from './dto/create-videogame.dto';
import { UpdateVideogameDto } from './dto/update-videogame.dto';

@Controller('/api/videogames')
export class VideogameController {
  constructor(private readonly videogameService: VideogameService) {}

  @Post('/createvideogame')
  async create(@Body() createVideogameDto: CreateVideogameDto) {    
    try{
    const NewVideogame = await this.videogameService.create(createVideogameDto);
    return{
      success: true,
      message: 'Videogame created successfully',
      data: NewVideogame
    }
    }catch(error){
      return {
        success: false,
        message: 'Error creating videogame',
        error: error.message
    };
  }
}

  @Get('/getallvideogames')
  async findAll() {
    try{
      const AllVideogames = await this.videogameService.findAll();
      
      return{
        success: true,
        message: 'All videogames fetched successfully',
        data: AllVideogames
      }
    }catch(error){
      return {
        success: false,
        message: 'Error fetching all videogames',
        error: error.message
      };
    }
  }

  @Get('/getvideogamebyid/:id')
  async findOne(@Param('id') id: string) {
    return this.videogameService.findOne(+id);
  }

  @Patch('/updatevideogame/:id')
  async update(@Param('id') id: string, @Body() updateVideogameDto: UpdateVideogameDto) {
    return this.videogameService.update(+id, updateVideogameDto);
  }

  @Delete('/deletevideogame/:id')
  async remove(@Param('id') id: string) {
    return this.videogameService.remove(+id);
  }
}
