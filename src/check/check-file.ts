import { FileContext } from '../files/file-context';
import { Store } from '../store/store';
import { getBorder } from './get-border';
import { createBorderLessFileMessage } from '../message/message';

export function checkFile(store: Store, ctx: FileContext) {
  const border = getBorder(store, ctx);
  if (!border) {
    store.addMessage(createBorderLessFileMessage(ctx));
  }
}
