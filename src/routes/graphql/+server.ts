import { createYoga, createSchema } from "graphql-yoga";
import stringBool from "../../utils/string-bool";

import { GRAPHQLI_ENABLED } from "$env/static/private";

const yogaApp = createYoga({
  schema: createSchema({
    typeDefs: `
    type Query {
      hello: String
    }
  `,
    resolvers: {
      Query: {
        hello: () => "SvelteKit - GraphQL Yoga",
      },
    },
  }),
  fetchAPI: globalThis,
  graphiql: stringBool(GRAPHQLI_ENABLED),
});

export { yogaApp as GET, yogaApp as POST };
