---
layout: "post"
title: "useState and its friends"
date: "2022-08-13 17:00"
categories: ['frontend']
tags: ['react', 'useState']
published: True
---

Did you know that `useState` & `useReducer` are the same function inside react source codes? 

<!--more-->

Of course, react exports different interfaces for you to call both `useState` and `useReducer` functions.

```js
export function useState<S>(
  initialState: (() => S) | S,
): [S, Dispatch<BasicStateAction<S>>] {
  const dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}

export function useReducer<S, I, A>(
  reducer: (S, A) => S,
  initialArg: I,
  init?: I => S,
): [S, Dispatch<A>] {
  const dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
```

But during the `mount` and `update` phases, react calls the same functions beneath the surface:

```js
function updateState<S>(
  initialState: (() => S) | S,
): [S, Dispatch<BasicStateAction<S>>] {
  // we are calling undateReducer in updateState with a default reducer called `basicStateReducer`
  return updateReducer(basicStateReducer, (initialState: any));
}

//Here the basicStateReducer is:
function basicStateReducer<S>(state: S, action: BasicStateAction<S>): S {
  return typeof action === 'function' ? action(state) : action;
}
```

In that case, you can create a `useReducer` hook on your own:

```js
import { useState } from 'react'

// All we need to do is to pass a customized reducer to replace the default `basicStateReducer` callback function:
export function useReducer(reducer, initialState) {
    const [state, setState] = useState(initialState)

    const dispatch = (action) => {
        setState(prevState => reducer(prevState, action))
    }

    return [state, dispatch]
}
```

Besides of above, we could even use `useState` to implement `useRef`:

```js
function useRef(initialValue) {
  const [ref, unused] = useState({ current: initialValue });
  return ref;
}
```

When you are coding with react, `useRef` is the kind of function that is called "Escape Hatches".

So, if we do not replace the state with the `setState` method, the information inside would always be there during renders.
