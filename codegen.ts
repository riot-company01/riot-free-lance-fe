import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://famous-walrus-45.hasura.app/v1/graphql",
  documents: "src/schemas/**/*.graphql",
  generates: {
    "src/lib/graphql/": {
      preset: "client",
    },
  },
};

export default config;
