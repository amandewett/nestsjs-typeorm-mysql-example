import { ConfigModule } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
});
export const typOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    migrationsRun: false,
    namingStrategy: new SnakeNamingStrategy(),
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ]
};