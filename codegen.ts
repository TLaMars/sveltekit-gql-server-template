import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  // schema: "./src/core/server/type-defs/*.ts",
  schema: "http://localhost:5173/graphql",
  // documents: ["./src/core/gql/queries/*.ts"],
  generates: {
    "./src/core/gql/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-resolvers",
        "typescript-operations",
        "named-operations-object",
      ],
      config: {
        namingConvention: {
          enumValues: "keep",
        },
        makeResolverTypeCallable: true,
        useConsts: true,
      },
    },
  },
};

export default config;
