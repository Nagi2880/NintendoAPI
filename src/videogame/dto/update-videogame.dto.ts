import { PartialType } from '@nestjs/mapped-types';
import { CreateVideogameDto } from './create-videogame.dto';

export class UpdateVideogameDto extends PartialType(CreateVideogameDto) {
    //PartialType is used to make all the properties of the CreateVideogameDto optional
}
