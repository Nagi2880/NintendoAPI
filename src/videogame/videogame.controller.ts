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
        message: 'Could not find any videogame',
        error: error.message
      };
    }
  }

  @Get('/getvideogamebyid/:id')
  async findOneById(@Param('id') id: string) {
    try{
      const videogame = await this.videogameService.findById(id)
      return{
        success: true,
        message: 'The videogame was finded successfully',
        data: videogame
      };   
    }
    catch(error){
      return{
        success: false,
        message: 'Could not find the request videogame',
        error: error.message
      }
    }
  }
  

  @Patch('/updatevideogame/:id')
  async updateVideogame(@Param('id') id: string, @Body() updateVideogameDto: UpdateVideogameDto) {
    try{
      const updatedVideogame = await this.videogameService.updateVideogame(id, updateVideogameDto)
      return{
        success: true,
        message: 'the videogame was updated succesfully',
        data: updatedVideogame
      }
    }
    catch(error){
      return{
        success: false,
        message: 'An error has ocurred trying to update the videogame',
        error: error.message,
      };
    }
  }

  @Delete('/deletevideogame/:id')
  async remove(@Param('id') id: string) {
    try{
      const removedVideogame = await this.videogameService.remove(id);
      return{
        success: true,
        message: "The videogame with id"+ id + "was deleted successfully",
        data: removedVideogame
      }
    }
    catch(error){
      return{
        success: false,
        message: 'An error has ocurred trying to delete the videogame with id' + id,
        error: error.message
      }
    }
  }
}
