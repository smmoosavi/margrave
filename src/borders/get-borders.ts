import glob from 'glob';
import path from 'path';
import { AppContext } from '../app/app-context';

export function getBorders(ctx: AppContext): string[] {
  const { nodePath, root } = ctx;
  return glob
    .sync((root === '.' || root === '' ? '' : root + '/') + '**/index.ts', {
      cwd: nodePath,
    })
    .map((file) => path.dirname(file));
}
