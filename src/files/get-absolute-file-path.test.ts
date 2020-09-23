import { getAppContext } from '../app/get-app-context';
import { getAbsoluteFilePath } from './get-absolute-file-path';
import { getFileContext } from './get-file-context';

describe('get-absolute-file-path', () => {
  it('should returns full file path', () => {
    const ctx = getFileContext(
      getAppContext('/path-to-project/', 'src'),
      'src/index.ts',
    );
    const filePath = getAbsoluteFilePath(ctx);
    expect(filePath).toBe('/path-to-project/src/index.ts');
  });
  describe('without root', () => {
    it('should returns full file path', () => {
      const ctx = getFileContext(
        getAppContext('/path-to-project/'),
        'index.ts',
      );
      const filePath = getAbsoluteFilePath(ctx);
      expect(filePath).toBe('/path-to-project/index.ts');
    });
  });
});
