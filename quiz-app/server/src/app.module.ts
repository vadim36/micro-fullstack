import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriverConfig, ApolloDriver } from "@nestjs/apollo";
import { join } from "path";
import { AuthResolver } from "./auth/auth.resolver";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ["./**/*.gql"],
      definitions: {
        path: join(__dirname, "src/root.schema.gql")
      }
    })
  ],
  providers: [
    AuthResolver
  ]
})
export class AppModule {}