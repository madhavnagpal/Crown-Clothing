import { AnyAction } from "redux";

/**
 * Type Predicate Function
 * A function that verifies a specific argument that it receive is going to be a narrower type or not.
 * Narrower type means more specific type
 */

// AC means Action Creator
type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>["type"];
  match(action: AnyAction): action is ReturnType<AC>;
};

export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

/**
 * withMatcher takes some actionCreator function and adds an additional functionality
 * on them so they can determine if a passed action has the same type as the
 * corresponding action that they create.
 * @param actionCreator
 * @returns
 */
export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = { type: T };

// Overload signatures
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

// Implementation signature
export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
