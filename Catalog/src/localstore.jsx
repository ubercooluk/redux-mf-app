import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux'
import { configureStore, createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cartLocal',
  initialState :{
    cartCount: 0
  },
  reducers: {
    increment: (state) => {     
      state.cartCount += 1
    },
    decrement: (state) => {
      state.cartCount -= 1
    },
    clear: (state) => {
      state.cartCount = 0;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, clear } = cartSlice.actions

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});

export function useStoreLocal() {
    const cartLocal = useSelector((state) => state.cartLocal.cartCount);
    const dispatch = useDispatch();
    return {
      cartLocal,
        incrementLocal: () => dispatch(increment()),
        decrementLocal: () => dispatch(decrement()),
    }
}

export function StoreProviderLocal({children}) {
    return <Provider store={store}>{children}</Provider>
}