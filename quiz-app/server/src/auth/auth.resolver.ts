import { Resolver, Mutation, Args } from "@nestjs/graphql";

@Resolver("Auth")
export class AuthResolver {
  @Mutation("signup")
  async signUp(@Args("user") user) {
    return {
      token: "secret"
    }
  }
}