import { FileContext } from '../files/file-context';
import { Store } from '../store/store';

export function getBorder(store: Store, ctx: FileContext): string | null {
  const xs = ctx.filePath.split('/');
  while (xs.length > 0) {
    const border = xs.join('/');
    if (store.hasBorder(border)) {
      return border;
    }
    xs.pop();
  }
  return null;
}
