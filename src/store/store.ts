import { AppContext } from '../app/app-context';
import { Message } from '../message/message';

export interface Store {
  addBorders(ctx: AppContext, borders: string[]): void;
  addMessage(message: Message): void;
  addRoots(appCtx: AppContext, roots: string[]): void;

  getRoots(): string[];
  hasRoot(root: string): boolean;
  getBorders(): string[];
  hasBorder(border: string): boolean;
  getMessages(): Message[];
}
