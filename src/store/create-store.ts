import { AppContext } from '../app/app-context';
import { Message } from '../message/message';
import { createStateHolder } from './state-holder';
import { Store } from './store';

interface State {
  roots: string[];
  rootsSet: Set<string>;
  borders: string[];
  bordersSet: Set<string>;
  messages: Message[];
}

export function createStore(): Store {
  const stateHolder = createStateHolder<State>({
    roots: [],
    rootsSet: new Set(),
    borders: [],
    bordersSet: new Set(),
    messages: [],
  });

  return {
    addBorders(ctx: AppContext, borders: string[]): void {
      stateHolder.updateState((state) => {
        const newBorders = [...state.borders, ...borders];
        return {
          ...state,
          borders: newBorders,
          bordersSet: new Set(newBorders),
        };
      });
    },
    addMessage(message: Message): void {
      stateHolder.updateState((state) => {
        return { ...state, messages: [...state.messages, message] };
      });
    },
    addRoots(appCtx: AppContext, roots: string[]): void {
      stateHolder.updateState((state) => {
        const newRoots = [...state.roots, ...roots];
        return { ...state, roots: newRoots, rootsSet: new Set(newRoots) };
      });
    },

    getRoots(): string[] {
      const state = stateHolder.getState();
      return state.roots;
    },
    hasRoot(root: string): boolean {
      const state = stateHolder.getState();
      return state.rootsSet.has(root);
    },
    getBorders(): string[] {
      const state = stateHolder.getState();
      return state.borders;
    },
    hasBorder(border: string): boolean {
      const state = stateHolder.getState();
      return state.bordersSet.has(border);
    },
    getMessages(): Message[] {
      const state = stateHolder.getState();
      return state.messages;
    },
  };
}
