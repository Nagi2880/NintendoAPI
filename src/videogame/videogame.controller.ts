import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VideogameService } from './videogame.service';
import { CreateVideogameDto } from './dto/create-videogame.dto';
import { UpdateVideogameDto } from './dto/update-videogame.dto';

@Controller('/api/videogames')
export class VideogameController {
  constructor(private readonly videogameService: VideogameService) {}

  @Post('/createvideogame')
  create(@Body() createVideogameDto: CreateVideogameDto) {
    return this.videogameService.create(createVideogameDto);
  }

  @Get('/getallvideogames')
  findAll() {
    return this.videogameService.findAll();
  }

  @Get('/getvideogamebyid/:id')
  findOne(@Param('id') id: string) {
    return this.videogameService.findOne(+id);
  }

  @Patch('/updatevideogame/:id')
  update(@Param('id') id: string, @Body() updateVideogameDto: UpdateVideogameDto) {
    return this.videogameService.update(+id, updateVideogameDto);
  }

  @Delete('/deletevideogame/:id')
  remove(@Param('id') id: string) {
    return this.videogameService.remove(+id);
  }
}
