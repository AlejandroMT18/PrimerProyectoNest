import { IsOptional, IsString } from 'class-validator';

export class updateCarDto {
  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsOptional()
  readonly model?: string;
}
