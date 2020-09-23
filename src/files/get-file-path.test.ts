import { getAppContext } from '../app/get-app-context';
import { getFileContext } from './get-file-context';
import { getFilePath } from './get-file-path';

describe('get-file-path', () => {
  it('should returns full file path', () => {
    const ctx = getFileContext(
      getAppContext('/path-to-project/', 'src'),
      'src/index.ts',
    );
    const filePath = getFilePath(ctx);
    expect(filePath).toBe('src/index.ts');
  });
  describe('without root', () => {
    it('should returns full file path', () => {
      const ctx = getFileContext(
        getAppContext('/path-to-project/'),
        'index.ts',
      );
      const filePath = getFilePath(ctx);
      expect(filePath).toBe('index.ts');
    });
  });
});
