import type { Resolvers } from "gql/generated/graphql";

const goodByeResolvers: Resolvers = {
  Query: {
    bye: () => "Seeee yaa later",
  },
};

export default goodByeResolvers;
