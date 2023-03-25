import type { Resolvers } from "gql/generated/graphql";

const helloWorldResolvers: Resolvers = {
  Query: {
    hello: () => "Hello World",
  },
};

export default helloWorldResolvers;
