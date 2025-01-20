import { Environment } from 'vitest/environments';

export default <Environment> {
  name: 'prisma',
  async setup() {
    console.log('Executou');

    return {
      teardown() { },
    };
  },
  transformMode: 'ssr'
}