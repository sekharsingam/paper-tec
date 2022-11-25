import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Order {
    orderDate: string,
    customerName: string,
    rollWeight: string,
    rollSize: string,
    cupSize: string,
    paperSupplier: string
}

interface OrderState {
    orders: Order[],
    isLoading: boolean,
}


const initialState: OrderState = {
    orders: [],
    isLoading: false
}

export const ordersSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        getOrders: (state) => ({ ...state, isLoading: true }),
        getOrdersDone: (state, action: PayloadAction<any>) => ({
            ...state,
            orders: action.payload,
            isLoading: false
        }),
    },
})

// Action creators are generated for each case reducer function
export const { getOrders, getOrdersDone } = ordersSlice.actions

export default ordersSlice.reducer

