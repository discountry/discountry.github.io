---
layout: "post"
title: "Redux in Next.js"
date: "2023-09-17 00:00"
categories: ['react']
tags: ['redux']
published: True
---

> redux is a state container for javascript applications, when you need to share data between components, you can use redux to manage the state of the application.

<!--more-->

- [redux toolkit](https://redux-toolkit.js.org/)

## Create a store

```ts
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
```

## Create a slice

```ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
```

## Add a slice to the store

- UserInfo
- Theme
- Shared Market Info

```ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
```

## Use Typed Hooks

```ts
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

## Thunk action

```ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userAPI } from "./userAPI";

// First, create the thunk
const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId, thunkAPI) => {
    const response = await userAPI.fetchById(userId);
    return response.data;
  }
);

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: "users",
  initialState: { entities: [], loading: "idle" },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload);
    });
  },
});

// Later, dispatch the thunk as needed in the app
dispatch(fetchUserById(123));
```

- [redux nextjs wrapper](https://github.com/kirill-konshin/next-redux-wrapper)

## Wrap a store

```ts
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import counterReducer from "../features/counter/counterSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
}

const store = makeStore();

export type RootState = ReturnType<typeof makeStore>;

export type AppDispatch = ReturnType<RootState["getState"]>;

export const wrapper = createWrapper<typeof store>(makeStore, { debug: false });
```

## Wrap `_app.tsx`

```tsx
import React, { FC } from "react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { wrapper } from "../components/store";

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
};
```

## Wrap a slice

```ts
import { createAction, createSlice } from "@reduxjs/toolkit";
import { Action } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const hydrate = createAction<RootState>(HYDRATE);

export const subjectSlice = createSlice({
  name: "subject",

  initialState: {} as any,

  reducers: {
    setEnt(state, action) {
      return action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(hydrate, (state, action) => {
      console.log("HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload.counter,
      };
    });
  },
});
```

## State reconciliation during hydration

```ts
{
  extraReducers: (builder) => {
    builder.addCase(hydrate, (state, action) => {
      console.log("HYDRATE", state, action.payload);
      return {
        ...state,
        isFromClient() ? ...{} : ...action.payload.counter,
      };
    });
  },
}
```

## getStaticProps

```ts
import React from "react";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { wrapper, State } from "../store";

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    ({ preview }) => {
      console.log("2. Page.getStaticProps uses the store to dispatch things");
      store.dispatch({
        type: "TICK",
        payload: "was set in other page " + preview,
      });
    }
);

// you can also use `connect()` instead of hooks
const Page: NextPage = () => {
  const { tick } = useSelector<State, State>((state) => state);
  return <div>{tick}</div>;
};

export default Page;
```

## getServerSideProps

```ts
import React from "react";
import { NextPage } from "next";
import { connect } from "react-redux";
import { wrapper, State } from "../store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    ({ req, res, ...etc }) => {
      console.log(
        "2. Page.getServerSideProps uses the store to dispatch things"
      );
      store.dispatch({ type: "TICK", payload: "was set in other page" });
    }
);

// Page itself is not connected to Redux Store, it has to render Provider to allow child components to connect to Redux Store
const Page: NextPage<State> = ({ tick }) => <div>{tick}</div>;

// you can also use Redux `useSelector` and other hooks instead of `connect()`
export default connect((state: State) => state)(Page);
```
