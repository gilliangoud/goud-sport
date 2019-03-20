import { Entity, Column } from 'typeorm';
import {
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
  IsNotEmpty
} from 'class-validator';
import { CREATE_UPDATE, CREATE, UPDATE } from '@nestjsx/crud';
import { BaseEntity } from '../base-entity';

export enum Gender {
  Male,
  Female
}

@Entity('athletes')
export class Athlete extends BaseEntity{
  @IsOptional({ ...UPDATE })
  @IsNotEmpty({ ...CREATE })
  @IsString({ ...CREATE_UPDATE })
  @MaxLength(32, { ...CREATE_UPDATE })
  @Column({ type: 'varchar', length: 32, nullable: true, default: null })
  firstname: string;

  @IsOptional({ ...UPDATE })
  @IsNotEmpty({ ...CREATE })
  @IsString({ ...CREATE_UPDATE })
  @MaxLength(32, { ...CREATE_UPDATE })
  @Column({ type: 'varchar', length: 32, nullable: true, default: null })
  lastname: string;

  @IsOptional({ ...UPDATE })
  @IsNotEmpty({ ...CREATE })
  @IsDate({ ...CREATE_UPDATE })
  @Column()
  dob: Date;

  @IsOptional({ ...UPDATE })
  @IsNotEmpty({ ...CREATE })
  @Column({ type: "enum", enum: Gender })
  gender: Gender;
}
