import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateServiceDto {
  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  serviceSpecificationId: string;

  @IsOptional()
  category?: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  isBundle?: boolean;
}
