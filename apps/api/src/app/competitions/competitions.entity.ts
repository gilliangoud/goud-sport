import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import {
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
  IsNotEmpty
} from 'class-validator';
import { CREATE_UPDATE, CREATE, UPDATE } from '@nestjsx/crud';
import { BaseEntity } from '../base-entity';
import { Athlete } from '../athletes/athletes.entity';

@Entity('competitions')
export class Competition extends BaseEntity{
  @IsOptional({ ...UPDATE })
  @IsNotEmpty({ ...CREATE })
  @IsString({ ...CREATE_UPDATE })
  @MaxLength(32, { ...CREATE_UPDATE })
  @Column({ type: 'varchar', length: 32, nullable: true, default: 'nameless competition' })
  name: string;

  @IsOptional({ ...UPDATE })
  @IsNotEmpty({ ...CREATE })
  @IsDate({ ...CREATE_UPDATE })
  @Column()
  date: Date;

  @ManyToMany((type) => Athlete, (c) => c.competitionsin)
  @JoinTable()
  competitors: Athlete[];
}
