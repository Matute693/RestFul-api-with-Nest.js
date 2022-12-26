// import { PartialType } from '@nestjs/mapped-types';
import { MinLength, IsString } from 'class-validator';
// import { CreateBrandDto } from './create-brand.dto';

// export class UpdateBrandDto extends PartialType(CreateBrandDto) {

export class UpdateBrandDto {
    @IsString()
    @MinLength(1)
    readonly name?: string;


}
