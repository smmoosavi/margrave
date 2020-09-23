import path from 'path';
import { getAppPath } from '../app/get-app-path';
import { FileContext } from './file-context';

export function getAbsoluteFilePath(ctx: FileContext) {
  return path.join(getAppPath(ctx), ctx.filePath);
}
