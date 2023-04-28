import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:9000/graphql',
  documents: 'src/**/*.ts',
  generates: {
    'src/app/graphql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
