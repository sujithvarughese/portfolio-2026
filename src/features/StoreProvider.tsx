'use client';
import {configureStore} from "@reduxjs/toolkit";
import assistantReducer from "./assistantSlice";
import {Provider} from 'react-redux';
import type {ReactNode} from 'react';

export const store = configureStore({
  reducer: {
    chatbot: assistantReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

interface StoreProviderProps {
  children: ReactNode;
}

export default function StoreProvider({children}: StoreProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}