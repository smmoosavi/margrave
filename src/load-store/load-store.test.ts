import mockFs from 'mock-fs';
import { getAppContext } from '../app/get-app-context';
import { createStore } from '../store/create-store';
import { tsProject } from './__fixtures__/roots';
import { loadStore } from './laod-store';

describe('get-borders', () => {
  afterAll(() => {
    mockFs.restore();
  });
  describe('in root with ts and tsx files', () => {
    it('should returns empty array', () => {
      mockFs({
        '/path-to-project/src': tsProject,
      });
      const store = createStore();

      const ctx = getAppContext('/path-to-project/', 'src');
      loadStore(ctx, store);
      const messages = store.getMessages();

      expect(messages).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            file: 'src/pages/Page.tsx',
            dependency: '../user',
            correctDependency: 'src/user',
          }),
        ]),
      );

      expect(messages).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            file: 'src/pages/Page.tsx',
            dependency: '../user/type',
            correctDependency: 'src/user',
          }),
        ]),
      );

      expect(messages).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            file: 'src/pages/Page.tsx',
            dependency: 'src/user/type',
            correctDependency: 'src/user',
          }),
        ]),
      );

      expect(messages).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            file: 'src/user/User.tsx',
            dependency: 'src/user/type',
            correctDependency: './type',
          }),
        ]),
      );

      expect(messages).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            file: 'src/user/User.tsx',
            dependency: 'src/user',
            correctDependency: null,
          }),
        ]),
      );

      expect(messages).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            file: 'src/user/User.tsx',
            dependency: '.',
            correctDependency: null,
          }),
        ]),
      );
    });
  });
});
