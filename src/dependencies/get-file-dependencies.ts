import precinct from 'precinct';
import { FileContext } from '../files/file-context';
import { getAbsoluteFilePath } from '../files/get-absolute-file-path';

export function getFileDependencies(ctx: FileContext) {
  try {
    return precinct.paperwork(getAbsoluteFilePath(ctx));
  } catch (e) {
    return null;
  }
}
