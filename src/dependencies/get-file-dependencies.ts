import { FileContext } from '../files/file-context';
import precinct from 'precinct';
import { getFilePath } from '../files/get-file-path';

export function getFileDependencies(ctx: FileContext) {
  try {
    return precinct.paperwork(getFilePath(ctx));
  } catch (e) {
    return null;
  }
}
