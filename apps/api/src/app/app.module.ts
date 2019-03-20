import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AthletesModule } from './athletes/athletes.module';
import { CompetitionsModule } from './competitions/competitions.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [AthletesModule, CompetitionsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
