import { getAppContext } from './app/get-app-context';
import { loadStore } from './load-store/laod-store';
import { logMessages } from './message/log-messages';
import { createStore } from './store/create-store';

export interface Options {
  nodePath: string;
  root: string;
}

export function margrave(options: Options) {
  const { nodePath, root } = options;
  const store = createStore();
  const ctx = getAppContext(nodePath, root);
  loadStore(ctx, store);
  logMessages(store.getMessages());
}
