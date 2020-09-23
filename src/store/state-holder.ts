export type Updater<State> = (state: State) => State;
export interface StateHolder<State> {
  getState(): State;
  updateState(updater: Updater<State>): void;
}
export function createStateHolder<State>(
  initialState: State,
): StateHolder<State> {
  let state = initialState;
  return {
    getState() {
      return state;
    },
    updateState(updater: Updater<State>) {
      state = updater(state);
    },
  };
}
