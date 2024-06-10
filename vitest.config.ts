/// <reference types="vitest" />

import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    testTimeout: 10_000,
    css: false,
    globals: false,
    environment: 'happy-dom',
    include: ['./tests/**/*.test.{ts,tsx}'],
    setupFiles: [
      '@testing-library/react/dont-cleanup-after-each',
      './tests/vitest.setup.ts'
    ],
    pool: 'threads',
    poolOptions: {
      threads: {
        isolate: false,
        minThreads: 4,
      }
    },
    isolate: false,
    typecheck: {
      enabled: true,
      tsconfig: 'tsconfig.json',
    }
  },
}, {
  site: 'http://localhost:3000/base',
},
);
