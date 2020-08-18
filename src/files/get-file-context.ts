import { AppContext } from '../app/app-context';
import { FileContext } from './file-context';

export function getFileContext(ctx: AppContext, filePath: string): FileContext {
  return { ...ctx, filePath };
}
