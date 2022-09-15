import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux'
import { configureStore, createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
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

export function useStore() {
    const cart = useSelector((state) => state.cart.cartCount);
    const dispatch = useDispatch();
    return {
        cart,
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        clear: () => dispatch(clear())
    }
}

export function StoreProvider({children}) {
    return <Provider store={store}>{children}</Provider>
}