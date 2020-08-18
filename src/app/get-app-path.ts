import path from 'path';
import { AppContext } from './app-context';

export function getAppPath(ctx: AppContext) {
  const { nodePath } = ctx;
  return path.join(nodePath, '.');
}
