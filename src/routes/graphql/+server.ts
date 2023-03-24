import { createYoga, createSchema } from "graphql-yoga";
import helloWorldResolvers from "resolvers/hello-world";
import helloWorldTypeDefs from "type-defs/hello-world";
import goodByeResolvers from "resolvers/good-bye";
import goodByeTypeDefs from "type-defs/good-bye";
import stringBool from "utils/string-bool";
import { GRAPHQLI_ENABLED } from "$env/static/private";

const yogaApp = createYoga({
  schema: createSchema({
    typeDefs: [helloWorldTypeDefs, goodByeTypeDefs],
    resolvers: [helloWorldResolvers, goodByeResolvers],
  }),
  fetchAPI: globalThis,
  graphiql: stringBool(GRAPHQLI_ENABLED),
});

export { yogaApp as GET, yogaApp as POST };
