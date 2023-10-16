import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://riot-free-lance.hasura.app/v1/graphql": {
        headers: {
          "x-hasura-admin-secret": "tKvU0cHFeIRFtuXaqCD4bW6U7y3ocW16e6l8KphpYFZE8xVBotoglTsC7QKYDnBt",
        },
      },
    },
  ],
  documents: "src/schemas/**/*.graphql",
  generates: {
    "src/lib/graphql/": {
      preset: "client",
    },
  },
};

export default config;
