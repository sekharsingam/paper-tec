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
    getOrdersCalling: boolean,
    createOrderCalling: boolean;
}


const initialState: OrderState = {
    orders: [],
    getOrdersCalling: false,
    createOrderCalling: false
}

export const ordersSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        getOrders: (state) => ({ ...state, getOrdersCalling: true }),
        getOrdersDone: (state, action: PayloadAction<any>) => ({
            ...state,
            orders: action.payload,
            getOrdersCalling: false
        }),

        createOrder:(state) => ({...state, createOrderCalling: true}),
        createOrderDone: (state, action: PayloadAction<any>) => ({
            ...state,
            createOrderCalling: false
        })
        
    },
})

// Action creators are generated for each case reducer function
export const { getOrders, getOrdersDone, createOrder, createOrderDone } = ordersSlice.actions

export default ordersSlice.reducer

