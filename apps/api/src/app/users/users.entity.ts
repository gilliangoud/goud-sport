import { Entity, Column, JoinColumn, OneToOne, ManyToOne, ManyToMany, OneToMany, Unique } from 'typeorm';
import {
  IsOptional,
  IsString,
  MaxLength,
  IsNotEmpty,
  IsEmail,
  IsBoolean,
  ValidateNested,
} from 'class-validator';
import * as bcrypt from "bcryptjs";
import { CREATE_UPDATE, CREATE, UPDATE } from '@nestjsx/crud';

import { BaseEntity } from '../base-entity';
import { Athlete } from '../athletes/athletes.entity';

@Entity('users')
@Unique(["email"])
export class User extends BaseEntity {
  @IsOptional({ ...UPDATE })
  @IsNotEmpty({ ...CREATE })
  @IsString({ ...CREATE_UPDATE })
  @MaxLength(255, { ...CREATE_UPDATE })
  @IsEmail({ require_tld: false }, { ...CREATE_UPDATE })
  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  email: string;

  @IsOptional({ ...UPDATE })
  @IsNotEmpty({ ...CREATE })
  @IsString({ ...CREATE_UPDATE })
  @MaxLength(100, { ...CREATE_UPDATE })
  @Column({ type: 'varchar', length: 100, nullable: false })
  password: string;

  @IsOptional({ ...UPDATE })
  @IsNotEmpty({ ...CREATE })
  @IsBoolean({ ...CREATE_UPDATE })
  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @OneToMany((type) => Athlete, (t) => t.user)
  athletes: Athlete[];

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  comparePassword(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}
