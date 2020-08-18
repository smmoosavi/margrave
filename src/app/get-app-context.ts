import { AppContext } from './app-context';

export function getAppContext(nodePath: string, root: string = ''): AppContext {
  return { nodePath, root: root || '.' };
}
